<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetChatRequest;
use App\Http\Requests\StoreChatRequest;
use App\Models\Chat;
use App\Models\ChatParticipant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Gets chats
     *
     * @param GetChatRequest $request
     * @return JsonResponse
     */
    public function index(GetChatRequest $request) : JsonResponse 
    {
        $data = $request->validated();

        if(Chat::find($data['chat_id'])->is_private == 0){ // grupo

            $chats = Chat::select('id', 'name', 'path_image')->find($data['chat_id']);

            $chatParticipants = ChatParticipant::select('users.id', 'users.name', 'users.username', 'users.path_image')
                                                ->join('users', 'chat_participants.user_id', '=', 'users.id')
                                                ->where('chat_participants.chat_id', $data['chat_id'])
                                                ->get();
            

            if(!empty(ChatParticipant::where('chat_id', $data['chat_id'])->where('user_id', auth()->user()->id)->first()))
                $chatUserLogged = 1;
            else
                $chatUserLogged = 0;

            return $this->success([
                'chats' => $chats,
                'participants' => $chatParticipants,
                'is_participating' => $chatUserLogged
            ]);

        }

        // $isPrivate = 1;
        // if($request->has('is_private')){
        //     $isPrivate = (int)$data['is_private'];
        // }

        // $chats = Chat::where('is_private', $isPrivate)
        //     ->hasParticipant(auth()->user()->id)
        //     ->whereHas('messages')
        //     ->with('lastMessage.user', 'participants.user')
        //     ->latest('updated_at')
        //     ->get();

        // return $this->success($chatParticipants);
    }
    
    public function getAllChats() : JsonResponse 
    {
        // $data = $request->validated();

        // if(Chat::find($data['chat_id'])->is_private == 0){ // grupo
            $userId = auth()->user()->id;

            $chats = Chat::select('id', 'name', 'path_image', 'is_private')->join('chat_participants', 'chats.id', '=', 'chat_participants.chat_id')->where('chat_participants.user_id', $userId);

            $chatParticipants = ChatParticipant::select('users.id', 'users.name', 'users.username', 'users.path_image')
                                                ->join('users', 'chat_participants.user_id', '=', 'users.id')
                                                ->where('chat_participants.chat_id', $chats->id)
                                                ->get();
            

            if(!empty(ChatParticipant::where('chat_id', $chats)->where('user_id', auth()->user()->id)->first()))
                $chatUserLogged = 1;
            else
                $chatUserLogged = 0;

            return $this->success([
                'chats' => $chats,
                'participants' => $chatParticipants,
                'is_participating' => $chatUserLogged
            ]);

        // }
    }

    /**
     * Stores a new chat
     *
     * @param StoreChatRequest $request
     * @return void
     */
    public function store(StoreChatRequest $request) 
    {

        $data = $request->validated();
        $data['created_by'] = auth()->user()->id;

        (!isset($data['chat_id'])) ? $data['chat_id'] = NULL : $data['chat_id'] = $data['chat_id'];
        (!isset($data['path_image'])) ? $data['path_image'] = NULL : $data['path_image'] = $data['path_image'];

        if ($data['is_private'] == 0) { // grupo

            $chat = Chat::updateOrCreate(
            [
                'id' => $data['chat_id']
            ],
            [
                'created_by' => $data['created_by'],
                'game_id' => $data['game_id'],
                'name' => $data['name'],
                'is_private' => 0,
                'path_image' => $data['path_image']
            ]);


            if($data['acao'] != 'update-chat'){
                $chat->participants()->createMany([
                    [
                        'user_id' => $data['created_by']
                    ]
                ]);
            }
            

            $chat->refresh()->load('lastMessage.user','participants.user');
            return $this->success($chat);



        } else { // privado

            $otherUserId = (int)$data['user_id'];
        
            $previousChat = $this->getPreviousChat($otherUserId);

            if($previousChat == null){
    
                $chat = Chat::create([
                    'created_by' => $data['created_by'],
                    'is_private' => 1,
                ]);

                $chat->participants()->createMany([
                    [
                        'user_id' => $data['created_by']
                    ],
                    [
                        'user_id' => $otherUserId
                    ]
                ]);
    
                $chat->refresh()->load('lastMessage.user','participants.user');
                return $this->success($chat);
    
            }
    
            return $this->success($previousChat->load('lastMessage.user','participants.user'));
        
        }
      
    }

    /**
     * Check if user and other user has previous chat or not
     *
     * @param integer $otherUserId
     * @return mixed
     */
    private function getPreviousChat(int $otherUserId) : mixed
    {

        $userId = auth()->user()->id;

        return Chat::where('is_private',1)
            ->whereHas('participants', function ($query) use ($userId){
                $query->where('user_id', $userId);
            })
            ->whereHas('participants', function ($query) use ($otherUserId){
                $query->where('user_id', $otherUserId);
            })
            ->first();
    }

    /**
     * Prepares for store a chat
     *
     * @param StoreChatRequest $request
     * @return array
     */
    private function prepareStoreData(StoreChatRequest $request) : array
    {
        $data = $request->validated();
        $otherUserId = (int)$data['user_id'];
        unset($data['user_id']);
        $data['created_by'] = auth()->user()->id;
        $isPrivate = (int)$data['is_private'];

        return [
            'otherUserId' => $otherUserId,
            'userId' => auth()->user()->id,
            'isPrivate' => $isPrivate,
            'data' => $data
        ];

    }

    /**
     * Gets a single chat
     *
     * @param Chat $chat
     * @return JsonResponse
     */
    public function show(Chat $chat) : JsonResponse
    {
        $chat->load('lastMessage.user', 'participants.user');
        return $this->success($chat);
    }

}
