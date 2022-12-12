<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetChatRequest;
use App\Http\Requests\StoreChatRequest;
use App\Models\Chat;
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

        $isPrivate = 1;
        if($request->has('is_private')){
            $isPrivate = (int)$data['is_private'];
        }

        $chats = Chat::where('is_private', $isPrivate)
            ->hasParticipant(auth()->user()->id)
            ->whereHas('messages')
            ->with('lastMessage.user', 'participants.user')
            ->latest('updated_at')
            ->get();

        return $this->success($chats);
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

        if ($data['is_private'] == 0) { // grupo

            $chat = Chat::create([
                'created_by' => $data['created_by'],
                'game_id' => $data['game_id'],
                'name' => $data['name'],
                'is_private' => 0,
                'path_image' => $data['path_image'] ?? null
            ]);

            $chat->participants()->createMany([
                [
                    'user_id' => $data['created_by']
                ]
            ]);

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


        // $data = $this->prepareStoreData($request);

        // if()


        
        // if($data['userId'] == $data['otherUserId']){
        //     return $this->error('You can not create a chat with your own');
        // }

       
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
