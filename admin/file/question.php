
<div class="row">
    <div class="col-lg-12 upload ">
        <form class=" frm">
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
            <!-- Question Block -->
            <div class="q_block">
                <input type="hidden" name="id" id="id" value="0" class="input">
                <textarea name="question" id="txt-question" cols="20" rows="2" class="textArea" placeholder="Question" ></textarea>
                <select name="txt-lang" id="lang" class="input">
                    <option value="">Langues</option>
                    <option value="1">Khmer</option>
                    <option value="2">English</option>
                </select>
                <label for="" class="input" >Order Number  </label>
                <input type="text" name="od" id="od" class="input" value="1">  
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