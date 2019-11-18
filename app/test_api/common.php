<?php

$debug = '';
$response  = new stdClass();
function complete($errorMessage = '')
{
    global $debug, $response;

    $response->error = $errorMessage;
    $response->debug = $debug;

    echo json_encode($response);
}

function debug($newMessage)
{
    global $debug;
    $debug.=$newMessage."\n";
}