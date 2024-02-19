
<div class="row">
    <div class="col-lg-12 upload ">
        <form class=" frm">
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
            <!-- Question Block -->
            <div class="q_block">
                <input type="hidden" name="id" id="id" value="0" class="input">
                <input type="text" name="name" id="U_name" class="input" placeholder="User name">
                <input type="text" name="mail" id="U_mail" class="input" placeholder="User Email">
                <input type="text" name="pass" id="U_pass" class="input" placeholder="Password">

                <select name="U_role" id="U_role" class="input">
                    <option value="Admin">Admin</option>
                    <option value="Client">Client</option>
                </select>

                <select name="U_status" id="U_status" class="input">
                    <option value="1">Active</option>
                    <option value="2">Not</option>
                </select>

                <!-- must type = hidden then run if you put type = file it will no running   -->
                <input type="button" value="SignUp" id="btnQ" class="btn" style="background-color: darkgreen">
                <input type="button" value="Cancel" id="btnCancel" class="btn" style="background-color: red">
            </div>
            <!-- Question Block -->
            <div class="frm-boder">
                <h1> Question </h1>
            </div>
        </form>
    </div>
</div>