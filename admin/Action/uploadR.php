<?php
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;
$id = $_POST['iddel'];
$name =$_POST['name'];
$name = $db->escape_string($name);
$img = $_POST['imgPro'];
$cate_answer=$_POST['cate_answer'];

if ($id == 0) {
    $tbl ="reward";
    $val = "null,'$name','$img','$cate_answer'";
    $db->insert($tbl, $val);
    $msg['msg'] = true;
} else if ($id != 0) {
    $tbl ="reward";
    $feild = "name='$name',img='$img',cate_answer='$cate_answer' WHERE id='$id'";
    $db->update($tbl, $feild);
    $msg['msg'] = true;
}



echo json_encode($msg);
