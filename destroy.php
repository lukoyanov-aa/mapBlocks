<?php
include_once '../lib/loging.php';
include_once 'config.php';

$id = intval($_REQUEST['id']);
if(htmlspecialchars($_GET["appId"]) == APP_ID){
    $file = file_get_contents('data.json');  // Открыть файл data.json
    $taskList = json_decode($file,TRUE);        // Декодировать в массив
    
    unset($taskList[array_search($id, array_column($taskList, 'id'))]); // Это удаляет элемент из массива

    file_put_contents('data.json',json_encode(array_values($taskList)));  // Перекодировать в формат и записать в файл.
}
echo json_encode(array('success'=>true));

?>