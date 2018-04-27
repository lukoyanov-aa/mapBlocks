<?php
include_once '../../../lib/loging.php';
include_once '../../config.php';

$id;
if(htmlspecialchars($_GET["appId"]) == APP_ID){
    $latitude = htmlspecialchars($_REQUEST['latitude']);
    $longitude = htmlspecialchars($_REQUEST['longitude']);    
    $balloonContentHeader = htmlspecialchars($_REQUEST['balloonContentHeader']);
    $balloonContentBody = htmlspecialchars($_REQUEST['balloonContentBody']);
    $balloonContentFooter = htmlspecialchars($_REQUEST['balloonContentFooter']);
    $clusterCaption = htmlspecialchars($_REQUEST['clusterCaption']);
    $hintContent = htmlspecialchars($_REQUEST['hintContent']);
    
    $file = file_get_contents('../../data.json');  // Открыть файл data.json
    $taskList = json_decode($file,TRUE);        // Декодировать в массив 

    unset($file);                               // Очистить переменную $file
    $id = max(array_column($taskList, 'id'))+1;

    $taskList[] = array(
        'id'=>$id, 
        'latitude'=>$latitude, 
        'longitude'=>$longitude, 
        'balloonContentHeader' => $balloonContentHeader, 
        'balloonContentBody' => $balloonContentBody,
        'balloonContentFooter' => $balloonContentFooter,
        'clusterCaption' => $clusterCaption,
        'hintContent' => $hintContent
        );        // Представить новую переменную как элемент массива, в формате 'ключ'=>'имя переменной'
    file_put_contents('../../data.json',json_encode($taskList));  // Перекодировать в формат и записать в файл.

    unset($taskList);
    echo json_encode(
            array(
                'id' => $id,
                'latitude' => $latitude,
                'longitude' => $longitude,                
                'balloonContentHeader' => $balloonContentHeader,
                'balloonContentBody' => $balloonContentBody,
                'balloonContentFooter' => $balloonContentFooter,
                'clusterCaption' => $clusterCaption,
                'hintContent' => $hintContent
                    
            )
    );  
}
?>