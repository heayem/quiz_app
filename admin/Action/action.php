<?php
class db
{
    private $cn;
    private $db_locahost = "localhost";
    private $user = "root";
    private $pass = "";
    private $database = "quize_web";


    function conection()
    {
        $this->cn = new mysqli(
            $this->db_locahost,
            $this->user,
            $this->pass,
            $this->database,
        );
    }
 

    // insert data into database 
    function insert($tbl, $val)
    {
        $this->cn->set_charset('utf8');
        $sql = "INSERT INTO  $tbl VALUES($val)";
        $this->cn->query($sql);
    }
    // update 
    function update($tbl,$feild){
        $this->cn->set_charset('utf8');
        $sql="UPDATE $tbl SET $feild";
        $this->cn->query($sql);
    }
    // delete item 
    function delete($tbl,$con){
        $sql ="DELETE FROM $tbl $con";
        $this->cn->query($sql);
    }

    // select questin 
    function select_data($feild, $tbl, $con)
    {
        $data = array();
        $this->cn->set_charset('utf8');
        $sql = "SELECT $feild FROM $tbl $con";
        $rs = $this->cn->query($sql);
        if ($rs->num_rows > 0) {
            while ($row = $rs->fetch_array()) {
                $data[] = $row;
            }
            return $data;
        } else {
            return 0;
        }
    }

    // select no con
    function select_single($feild, $tbl)
    {
        $this->cn->set_charset('utf8');
        $sql = "SELECT $feild FROM $tbl ";
        $rs = $this->cn->query($sql);
        if ($rs->num_rows > 0) {
            return $rs;
        } else {
            return 1;
        }
    }
    // real escape string 
    function escape_string($variable)
    {
        $respone = $this->cn->real_escape_string($variable);
        return $respone;
    }
};
