<?php
include_once '../lib/loging.php';

$result = array();

$file = file_get_contents('data.json');  // Открыть файл data.json
$taskList = json_decode($file,TRUE);        // Декодировать в массив 
unset($file);                               // Очистить переменную $file

$result["rows"] = array_values($taskList);
echo json_encode($result);

?>