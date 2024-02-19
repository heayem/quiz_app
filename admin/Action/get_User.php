<?php 
    include("action.php");
    $db =new db;
    $db->conection();
    $tbl= "user_quiz";
    $data=array();
    $res= $db->select_data("U_Id,U_Name,U_Mail,U_Role,U_status,U_Time_Log,U_Ip",$tbl,"ORDER BY U_Id DESC");
    if($res !='0'){
        foreach($res as $row){
            $data[]=array(
                "id"=>$row[0],
                "name"=>$row[1],
                "mail"=>$row[2],
                "role"=>$row[3],
                "status"=>$row[4],
                "Time_log"=>$row[5],
                "ip"=>$row[6],
            );  
        }
    }
    echo json_encode($data);
