<?php
include("./action.php");
$db= new db;
$db->conection();
$idedit=$_POST['iddel'];
$tbl=$_POST['tbl'];
$msg['msg']=false;
$con="WHERE id=$idedit";
$db->delete($tbl,$con);
$msg['msg']=true;

echo json_encode($msg)

?>