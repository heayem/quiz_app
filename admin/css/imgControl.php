<?php

$img = $_FILES["img"]["name"];
$tmp = $_FILES["img"]["tmp_name"];
$t = time();
$ex = explode(".", $img);
$img1 = rand(1000, 99999999999) . $t . '.' . end($ex);
move_uploaded_file($tmp, "imgStore/" . $img1);
$msg['IMG'] = $img1;

echo json_encode($msg);
