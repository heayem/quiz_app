<?php
session_start(); 

date_default_timezone_set("Asia/Phnom_Penh");
include("./action.php");
$db = new db;
$db->conection();
$msg['msg'] = false;
$_SESSION['login']=false;

$U_Ip = $_SERVER['REMOTE_ADDR'];
$Time=date("h:i:s A");

$U_mail =trim($_POST['Email']);
$U_mail = $db->escape_string($U_mail);

$U_pass = trim($_POST['Password']);
$U_pass = $db->escape_string($U_pass);
$U_pass = md5($U_pass);

$row = $db->select_data("U_Mail","user_quiz","WHERE U_Mail='$U_mail'");

 if($row > 0 ){

    $rowdata = $db->select_data("*","user_quiz","WHERE U_Mail='$U_mail'");
    $data= $rowdata[0]; 
    $Name = $data[1];

    if(password_verify($U_pass,$data[3]) ){
            if($data[5]==1){
                $tbl = "user_quiz";
                $val ="U_Time_Log='$Time',U_Ip='$U_Ip' WHERE U_Mail='$U_mail' && U_Name='$Name' ";
                $db->update($tbl, $val);
                $msg['msg'] = true;
                $_SESSION['login']=true;
                $_SESSION['UserName']=$data[1];
                $_SESSION['ip']=$data[7];
                
            }else{
                $msg['msg'] = false;
                $_SESSION['login']=false;
                $_SESSION['UserName']='';
                $_SESSION['ip']='';
            }
        

    }
    
}

echo json_encode($msg);
