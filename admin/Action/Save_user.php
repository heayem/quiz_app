<?php
// date_default_timezone_set('Asia/PhnomPenh');
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;
$msg['dapicate'] = false;
$msg['edit'] = false;



$id = $_POST['id'];

$U_name = trim($_POST['name']);
$U_name = $db->escape_string($U_name);

$U_mail = trim($_POST['mail']);
$U_mail = $db->escape_string($U_mail);

$U_pass = $_POST['pass'];
$U_pass = md5($U_pass);
$U_pass = password_hash($U_pass, PASSWORD_DEFAULT);



$U_role = $_POST['U_role'];
$U_status = $_POST['U_status'];

if ($id == 0) {
    $row = $db->select_data("*", "user_quiz", "WHERE U_Mail='$U_mail'");
    if ($row > 0) {
        $msg['dapicate'] = true;
    } else {
        $tbl = "user_quiz";
        $val = "null,'$U_name','$U_mail','$U_pass','$U_role','$U_status','00','00',null";
        $db->insert($tbl, $val);
        $msg['msg'] = true;
    }
}else if ($id != 0) {
    $db->update("user_quiz", "U_Role='$U_role',U_status='$U_status' WHERE U_Name='$U_name' && U_Mail='$U_mail'");
    $msg['edit'] = true;
}








echo json_encode($msg);
