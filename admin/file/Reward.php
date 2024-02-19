<?php include("../Action/action.php");
$db = new db;
$db->conection();
$rs = $db->select_single("id,Answer", "tb_answer", "ORDER BY id DESC");

?>
<div class="row">
    <div class="col-lg-12 upload ">
        <form class=" frm">
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
            <!-- Question Block -->
            <div class="q_block">
                <input type="hidden" name="iddel" id="id" value="0" class="input">
                <label for="" class="input">Reward </label>
                <input type="text" name="name" id="nameRaward" class="input" placeholder="Input Reward ">  
                
                <select name="cate_answer" id="cate_answer" class="input">
                    <option value="">Choose answer for reward</option>
                    <?php
                    while ($row = $rs->fetch_array()) {
                    ?>
                        <option value="<?php echo $row[0]; ?>"><?php echo $row[0]; ?>.<?php echo $row[1]; ?></option>
                    <?php
                    }
                    ?>
                
                </select>
                
                <label for="" class="input"> Photos</label>
                <div class="box-img">
                    <!-- type file can only input but cannot out put -->
                    <input type="file" name="img" id="txt-img">
                </div><br>
                <input type="hidden" name="imgPro" id="imgPro">
                <!-- must type = hidden then run if you put type = file it will no running   -->
                <input type="button" value="submit" id="btnQ" class="btn" style="background-color: darkgreen">
                <input type="button" value="Cancel" id="btnCancel" class="btn" style="background-color: red">
            </div>
            <!-- Question Block -->
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
        </form>
    </div>
</div>