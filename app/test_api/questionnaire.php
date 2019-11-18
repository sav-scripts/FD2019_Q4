<?php


require_once "./common.php";

$q = $_POST["questionnaire"];
$response->feedback = $q;

complete();

//echo $q[0]["question"];