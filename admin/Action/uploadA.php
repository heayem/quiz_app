<?php
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;
$idedit = $_POST['id'];
$cate_question = $_POST['cate_question'];
$Answer =trim($_POST['Answer']);
$Answer = $db->escape_string($Answer);
$status_answer = $_POST['status_answer'];

if ($idedit == 0) {

    $tbl = "tb_answer";
    $con = "null,'$Answer','$status_answer','$cate_question'";
    $db->insert($tbl, $con);
    $msg['msg'] = true;
} else if ($idedit != 0) {

    $tbl = "tb_answer";
    $feild = "answer='$Answer' ,status='$status_answer' ,Category='$cate_question' WHERE id=$idedit ";
    $db->update($tbl, $feild);
    $msg['msg'] = true;
}


echo json_encode($msg);
