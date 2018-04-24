<html>
    <head>
        <title>Install</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.6.min.js"></script>
        <script src="//api.bitrix24.com/api/v1/"></script>
        <script type="text/javascript" src="js/application.js"></script>
        <script>	
            $(document).ready(function () {                
                    BX24.callMethod('app.info',
                        {}, 
                        function(result){
                            $.post(
                                "createConfig.php?appId="+result['answer']['result']['CODE'],
                                null,
                                function (data)
                                {
//                                        var answer = JSON.parse(data);
//                                        if (answer.status == 'error') {
//                                                console.log('error', answer.result);
//                                                //curapp.displayErrorMessage('К сожалению, произошла ошибка сохранения списка участников рейтинга. Попробуйте перезапустить приложение',['#error']);
//                                        }
//                                        else {
//                                            console.log('udacha');
                                    BX24.installFinish();
//                                        }
                                }

                        );
                            //console.log(result['answer']['result']['CODE']);
                        }
                    );
                    //console.log(BX24.getAuth());

//                        BX24.init(function(){
//
//                                $.material.init();
//
//                                app.saveFrameWidth();
//                                app.loadOptions();
//
//                                app.displayDeals();
//
//                        });
                
            });
        </script>
    </head>
    <body>
        <div>TODO write content</div>
    </body>
</html>
