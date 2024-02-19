<?php
include("./action.php");
$db = new db;
$db->conection();
$rs =$db->select_single("id","q_question ORDER BY id DESC LIMIT 0,1");
$data['od']=0;
if($rs->num_rows>0){
    $row = $rs->fetch_array();
    $data['od']=$row[0];
}

echo json_encode($data);
?>