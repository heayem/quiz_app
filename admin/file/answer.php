<?php include("../Action/action.php");
$db = new db;
$db->conection();
$rs = $db->select_single("id,Q_question", "q_question", "ORDER BY id DESC");

?>
<div class="row">
    <div class="col-lg-12 upload ">
        <form class=" frm">
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
            <!-- Answer block  -->
            <div class="a_block">
                <input type="hidden" value="0" id="A_id" name="id">
                <select name="cate_question" id="cate_question" class="input">
                    <option value="">Choose question</option>
                    <?php
                    while ($row = $rs->fetch_array()) {
                    ?>
                        <option value="<?php echo $row[0]; ?>"><?php echo $row[0]; ?>.<?php echo $row[1]; ?></option>
                    <?php
                    }
                    ?>
                </select>
                    <input type="text" name="Answer" id="Answer" class="input" placeholder="Input answer">
                    <select name="status_answer" id="status" class="input">
                        <option value="">Answer Status </option>
                        <option value="1">True</option>
                        <option value="2">False</option>
                    </select>

            
            <!-- Answer block  -->
            <input type="button" value="submit" id="btnQ" class="btn" style="background-color: darkgreen">
            <input type="button" value="Cancel" id="btnCancel" class="btn" style="background-color: red">
            
            </div>
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
        </form>
    </div>
</div>