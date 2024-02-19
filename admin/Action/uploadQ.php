<?php
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;
$id = $_POST['id'];
$Q_question =trim($_POST['question']);
$od = $_POST['od'];
$Q_question = $db->escape_string($Q_question);
$lang = $_POST['txt-lang'];
$img = $_POST['imgPro'];

if ($id == 0) {
    $tbl = "q_question";
    $val = "null,'$Q_question','$img','$lang','$od'";
    $db->insert($tbl, $val);
    $msg['msg'] = true;
} else if ($id != 0) {
    $tbl = "q_question";
    $feild = "Q_question='$Q_question',img='$img',lang='$lang',od='$od' WHERE id='$id'";
    $db->update($tbl, $feild);
    $msg['msg'] = true;
}



echo json_encode($msg);
