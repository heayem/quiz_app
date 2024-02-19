<?php
// date_default_timezone_set('Asia/PhnomPenh');
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;

$U_name = trim($_POST['name']);
$U_name = $db->escape_string($U_name);

$U_mail =trim($_POST['mail']);
$U_mail = $db->escape_string($U_mail);

$U_role=$_POST['U_role'];
$U_status=$_POST['U_status'];









echo json_encode($msg);
