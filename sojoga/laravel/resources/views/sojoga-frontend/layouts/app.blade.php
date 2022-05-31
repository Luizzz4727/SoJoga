<!DOCTYPE html>
<html lang="UTF-8">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="src/css/style.css" />
        <title>@yield('title') - {{ config('app.name') }}</title>
    </head>

    <body>
        
        @yield('content')

    </body>
</html>