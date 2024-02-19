$(document).ready(function () {
    var body = $("body");
    var popup = $(".popup");
    var popupForm = `<div class="popupFrom"></div>`;
    var frm = { "1": "question.php", "2": "answer.php", "3": "Reward.php", "4": "Create_User.php", "5": "Edit_User.php" }
    var frmOpt = 0;

    // input question 
    body.on("click", ".frm #btnQ", function () {
        var eThis = $(this);
        if (frmOpt == 1) {
            save_q(eThis);
        } else if (frmOpt == 2) {
            // body.find("..frm-boder h1").html("Answer");
            save_a(eThis)
        } else if (frmOpt == 3) {
            save_r(eThis)
        }
        else if (frmOpt == 4) {
            save_User(eThis)
        }

    });
    //save user
    function save_User(eThis) {
        var Parent = eThis.parents(".frm");
        var U_name = Parent.find("#U_name");
        var U_mail = Parent.find("#U_mail");
        var U_pass = Parent.find("#U_pass");
        var title = Parent.find(".frm-boder h1");
        if (U_name.val() == '') {
            U_name.focus()
            title.html("Please set user name ");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return
        } else if (U_mail.val() == '') {
            title.html("invalid Email must has @ and .com")
            U_mail.focus()
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return
        } else if (U_pass.val() == '') {
            title.html("Please set answer status");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            U_pass.focus()
            return
        }

        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/Save_user.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                if (data['edit'] == true) {
                    popup.css({ "display": "none" });
                    U_name.val("")
                    U_mail.val("")
                    U_pass.val("")
                    title.html("User edited ! ");
                    Parent.find(".frm-boder").css({ "background-color": "rgba(0, 0, 255, 0.856)" })
                }
                if (data['msg'] == true) {
                    popup.css({ "display": "none" });
                    U_name.val("")
                    U_mail.val("")
                    U_pass.val("")
                    title.html("User seved! ");
                    Parent.find(".frm-boder").css({ "background-color": "rgba(0, 0, 255, 0.856)" })
                }

                if (data['dapicate'] == true) {
                    title.html("Dapicate User ")
                    popup.css({ "display": "none" });
                    Parent.find(".frm-boder").css({ "background-color": "red" })
                    U_name.focus()

                }
                

            }
        });

    }


    // save 
    function save_q(eThis) {

        var Parent = eThis.parents(".frm");
        var Q_question = Parent.find("#txt-question");
        var lang = Parent.find("#lang");
        var od = Parent.find("#od");
        var BoxImg = Parent.find(".box-img");
        var title = Parent.find(".frm-boder h1");
        if (Q_question.val() == '') {
            Q_question.focus();
            title.html("Please input Question");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return;
        } else if (lang.val() == '') {
            lang.focus();
            title.html("Please set langues");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return;
        }
        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/uploadQ.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                //work after success 
                if (data['msg'] == true) {
                    getAutoid();
                    popup.css({ "display": "none" });
                    Q_question.val("");
                    lang.val("");
                    BoxImg.css({ "background-image": "url(css/imgStore/download.png)" });
                    title.html("Question saved!");
                    Parent.find(".frm-boder").css({ "background-color": "rgba(0, 0, 255, 0.856)" })

                }

            }
        });
    }
    // input question 

    // save answer 
    function save_a(eThis) {
        var Parent = eThis.parents(".frm");
        var cate_question = Parent.find("#cate_question");
        var Answer = Parent.find("#Answer");
        var status_answer = Parent.find("#status");
        var title = Parent.find(".frm-boder h1");
        if (cate_question.val() == '') {
            cate_question.focus()
            title.html("Please select question");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return
        } else if (Answer.val() == '') {
            title.html("Please input Answer");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            Answer.focus()
            return
        } else if (status_answer.val() == '') {
            title.html("Please set answer status");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            status_answer.focus()
            return
        }

        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/uploadA.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                if (data['msg'] == true) {
                    title.html("Answer Saved ")
                    popup.css({ "display": "none" });
                    cate_question.val("")
                    Answer.val("")
                    status_answer.val("")
                    title.html("Answer seved! ");
                    Parent.find(".frm-boder").css({ "background-color": "rgba(0, 0, 255, 0.856)" })
                }

            }
        });

    }
    //save Reward
    function save_r(eThis) {
        var Parent = eThis.parents(".frm");
        var nameRaward = Parent.find("#nameRaward");
        var imgPro = Parent.find("#imgPro");
        cate_answer = Parent.find("#cate_answer");
        var BoxImg = Parent.find(".box-img");
        var title = Parent.find(".frm-boder h1");
        if (nameRaward.val() == '') {
            nameRaward.focus()
            title.html("Please input reward");
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return
        } else if (cate_answer.val() == '') {
            title.html("Please select answer");
            cate_answer.focus()
            Parent.find(".frm-boder").css({ "background-color": "red" })
            return
        }
        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/uploadR.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                if (data['msg'] == true) {
                    popup.css({ "display": "none" });
                    nameRaward.val("")
                    imgPro.val("")
                    BoxImg.css({ "background-image": "url(css/imgStore/download.png)" });
                    title.html("Reward seved! ");
                    Parent.find(".frm-boder").css({ "background-color": "rgba(0, 0, 255, 0.856)" })
                }

            }
        });

    }

    // cancel form 
    body.on("click", ".frm #btnCancel", function () {
        $(".popupFrom").remove();
    });

    //get Question data
    $("#show").change(function () {
        eThis = $(this);
        if (eThis.val() == '1') {
            get_Question();
        } else if (eThis.val() == '2') {
            get_answer();
        } else if (eThis.val() == '3') {
            get_reward();
        } else if (eThis.val() == '4') {
            get_User();
        }
        frmOpt = eThis.val();
    });
    // get user
    function get_User() {
        var th = `
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Time Login</th>
                        <th>User IP</th>
                        <th>Action</th>
                    </tr>
                </thead>

        `

        $.ajax({
            url: 'Action/get_User.php',
            type: 'POST',
            data: {},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                var tb = '';
                data.forEach(function (e) {
                    tb +=
                        `<tbody>
                                <tr>
                                    <td>${e.id}</td>
                                    <td>${e.name} ${sittingIconPermession(e.role,e.name)}  </td>
                                    <td>${e.mail}</td>
                                    <td>${e.role}</td>
                                    <td>${ConvertNumToStr(e.status, "Active", "Not")}</td>
                                    <td>${e.Time_log}</td>
                                    <td>${e.ip}</td>
                                    <td>
                                        ${sittingBtn(e.role,e.name)}
                                    </td>
                                </tr>
                            </tbody> `
                });
                $("#table").html(th + tb);
                popup.css({ "display": "none" });

            }

        });

    }

    function sittingIconPermession(role,name){
        if(role == "Admin" && name=="Yem Hea"){
            return  ` <i class="fa-regular fa-circle-xmark"></i>` 
        }else{
                                    
            return ` <i class="fa-solid fa-user-gear iconPermession"></i> ` 
        }

    }

    function sittingBtn(role,name){
        if(role == "Admin" && name=="Yem Hea"){
            return  ` <button style=" background-color:green" > <i class="fa-regular fa-circle-xmark"></i> </button> ` 
        }else{
                                    
            return ` <button id="edit" class="Edit_User" style=" background-color:green"> <i class="fa-solid fa-pen-to-square"></i></button>  ` 
        }
    }



    //get answer 
    function get_answer() {
        var th = `
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Answer</th>
                    <th>Status answer</th>
                    <th>Category question</th>
                    <th>Action</th>

                </tr>
            </thead>
        // `;
        $.ajax({
            url: 'Action/get_answer.php',
            type: 'POST',
            data: {},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                var tb = '';
                data.forEach(function (e) {
                    tb +=
                        `<tbody> 
                    <tr>
                    
                        <td>${e.id}</td>
                        <td>${e.answer}</td>
                        <td>${ConvertNumToStr(e.status, "True", "False")}</td>
                        <td>${e.category_question}</td>
                        <td>
                            <button id="edit" style=" background-color:green"> <i class="fa-solid fa-pen-to-square"></i></button>
                            <button id='delete' style=" background-color:red"> <i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody> `;
                });
                $("#table").html(th + tb);
                popup.css({ "display": "none" });

            }

        });
    }
    function ConvertNumToStr(status, StrOne, StrTwo) {
        if (status == 1) {
            return StrOne
        } else if (status == 2) {
            return StrTwo
        }
    }
    function ConvertStrToNum(StrOne, StrTwo, Compare) {
        if (StrOne == Compare) {
            return 1
        } else if (StrTwo == Compare) {
            return 2
        }
    }

    function get_Question() {
        var th = `
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Photos</th>
                    <th>Langues</th>
                    <th>Oder </th>
                    <th>Action</th>

                </tr>
            </thead>
        // `;
        $.ajax({
            url: 'Action/get_question.php',
            type: 'POST',
            data: {},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                var tb = '';
                data.forEach(function (e) {

                    tb +=
                        `<tbody> 
                    <tr>
                    
                        <td>${e.id}</td>
                        <td>${e.Q_question}</td>
                        <td> <img src="css/imgStore/${e.img}" alt="${e.img}"></td>
                        <td>${ConvertNumToStr(e.lang, "Khmer", "English")}</td>
                        <td>${e.od}</td>
                        <td>
                            <button id="edit" style=" background-color:green"> <i class="fa-solid fa-pen-to-square"></i></button>
                            <button id='delete' style=" background-color:red"> <i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody> `;
                });
                $("#table").html(th + tb);
                popup.css({ "display": "none" });

            }

        });

    }
    //get Question data
    function get_reward() {
        var th = `
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Photos</th>
                    <th>For Answer</th>
                    <th>Action</th>

                </tr>
            </thead>
        // `;
        $.ajax({
            url: 'Action/get_reward.php',
            type: 'POST',
            data: {},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });

            },
            success: function (data) {

                var tb = '';
                data.forEach(function (e) {
                    tb +=
                        `<tbody> 
                    <tr>
                        <td>${e.id}</td>
                        <td>${e.title}</td>
                        <td> <img src="css/imgStore/${e.img}" alt="${e.img}"></td>
                        <td>${e.cate_answer}</td>
                        <td>
                            <button id="edit" style=" background-color:green"> <i class="fa-solid fa-pen-to-square"></i></button>
                            <button id='delete' style=" background-color:red"> <i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody> `;
                });
                $("#table").html(th + tb);
                popup.css({ "display": "none" });
            }


        });


    }

    // edit question 
    body.on("click", "#table #edit", function () {

        eThis = $(this);
        if (frmOpt == 1) {
            editQuestuin(eThis);
        } else if (frmOpt == 2) {
            editAnswer(eThis)
        } else if (frmOpt == 3) {
            editReward(eThis)
        } else if (frmOpt == 4) {
            Edit_User(eThis)
        }

    })
    function Edit_User(eThis) {
        var tr = eThis.parents('tr');
        var id = tr.find("td:eq(0)").text();
        var name = tr.find("td:eq(1)").text();
        var Email = tr.find("td:eq(2)").text();
        var Role = tr.find("td:eq(3)").text();
        var status = tr.find("td:eq(4)").text();
        popup.css({ "display": "block" });
        body.append(popupForm);
        body.find(".popupFrom").load("file/" + frm[5], function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                popup.css({ "display": "none" });
            var Parent = body.find(".frm");
            Parent.find("#id").val(parseInt(id))
            Parent.find("#U_name").val(name)
            Parent.find("#U_mail").val(Email);
            Parent.find("#U_role").val(Role);
            Parent.find("#status").val(ConvertStrToNum("Active", "Not", status));
            if (statusTxt == "error")
                // alert("Error: " + xhr.status + ": " + xhr.statusText);
                alert("Page not fount! ")
        });

    }

    //Edit user  
    // body.on("click","tr .Edit_User",function(){
    //     var tr = eThis.parents('tr');
    //     var id = tr.find("td:eq(0)").text();
    //     var name = tr.find("td:eq(1)").text();
    //     var Email = tr.find("td:eq(2)").text();
    //     var Role = tr.find("td:eq(3)").text();
    //     var status = tr.find("td:eq(4)").text();
    //     popup.css({ "display": "block" });
    //     body.append(popupForm);
    //     body.find(".popupFrom").load("file/" + frm[5], function (responseTxt, statusTxt, xhr) {
    //         if (statusTxt == "success")
    //             popup.css({ "display": "none" });
    //         var Parent = body.find(".frm");
    //         Parent.find("#U_name").val(name)
    //         Parent.find("#U_mail").val(Email);
    //         Parent.find("#U_role").val(Role);
    //         Parent.find("#status").val(ConvertStrToNum("True", "False", status));
    //         if (statusTxt == "error")
    //             // alert("Error: " + xhr.status + ": " + xhr.statusText);
    //             alert("Page not fount! ")
    //     });

    // })


    //edit answer
    function editAnswer(eThis) {
        var tr = eThis.parents('tr');
        var id = tr.find("td:eq(0)").text();
        var answer = tr.find("td:eq(1)").text();
        var status = tr.find("td:eq(2)").text();
        var category_question = tr.find("td:eq(3)").text();
        popup.css({ "display": "block" });
        body.append(popupForm);
        body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                popup.css({ "display": "none" });
            var Parent = body.find(".frm");
            Parent.find("#A_id").val(parseInt(id))
            Parent.find("#cate_question").val(category_question);
            Parent.find("#Answer").val(answer);
            Parent.find("#status").val(ConvertStrToNum("True", "False", status));
            if (statusTxt == "error")
                // alert("Error: " + xhr.status + ": " + xhr.statusText);
                alert("Page not fount! ")
        });
    }

    // edit question 
    function editQuestuin(eThis) {
        var tr = eThis.parents('tr');
        var id = tr.find("td:eq(0)").text();
        var question = tr.find("td:eq(1)").text();
        var img = tr.find("td:eq(2) img").attr("alt");
        var lang = tr.find("td:eq(3)").text();
        var od = tr.find("td:eq(4)").text();

        popup.css({ "display": "block" });
        body.append(popupForm);
        body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                popup.css({ "display": "none" });
            var Parent = body.find(".frm");
            Parent.find("#id").val(parseInt(id))
            Parent.find("#txt-question").val(question);
            Parent.find("#imgPro").val(img);
            Parent.find("#lang").val(ConvertStrToNum("Khmer", "English", lang));
            Parent.find("#od").val(od);

            $(".box-img").css({ "background-image": "url(css/imgStore/" + img + ")" });

            // alert("see ")
            if (statusTxt == "error")
                // alert("Error: " + xhr.status + ": " + xhr.statusText);
                alert("Page not fount! ")
        });

    }
    //edit reward
    function editReward(eThis) {
        var tr = eThis.parents('tr');
        var id = tr.find("td:eq(0)").text();
        var nameRaward = tr.find("td:eq(1)").text();
        var img = tr.find("td:eq(2) img").attr("alt");
        var cate_answer = tr.find("td:eq(3)").text();
        popup.css({ "display": "block" });
        body.append(popupForm);
        body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                popup.css({ "display": "none" });
            var Parent = body.find(".frm");
            Parent.find("#id").val(parseInt(id))
            Parent.find("#nameRaward").val(nameRaward);
            Parent.find("#cate_answer").val(cate_answer)
            Parent.find("#imgPro").val(img);
            $(".box-img").css({ "background-image": "url(css/imgStore/" + img + ")" });

            if (statusTxt == "error")
                // alert("Error: " + xhr.status + ": " + xhr.statusText);
                alert("Page not fount! ")
        });

    }
    //upload img to folder 
    body.on("change", ".frm #txt-img", function () {
        var eThis = $(this);
        var Parent = eThis.parents(".upload");
        var BoxImg = Parent.find(".box-img");
        var ImgItem = Parent.find("#imgPro");
        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);

        $.ajax({
            url: 'css/imgControl.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                ImgItem.val(data['IMG']);
                BoxImg.css({ "background-image": "url(css/imgStore/" + data['IMG'] + ")" });
            }
        });
    });

    $(".i").click(function () {
        frmOpt = $(this).data("opt");
        if (frmOpt == 1) {
            body.append(popupForm);
            body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    getAutoid();
                $(".frm-boder").find("h1").html("Question");
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
        } else if (frmOpt == 2) {
            body.append(popupForm);
            body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    $(".frm-boder").find("h1").html("Answer");
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
        } else if (frmOpt == 3) {
            body.append(popupForm);
            body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    $(".frm-boder").find("h1").html("Reward");
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
        }
        else if (frmOpt == 4) {
            body.append(popupForm);
            body.find(".popupFrom").load("file/" + frm[frmOpt], function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    $(".frm-boder").find("h1").html("Create User");
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
        }

    });

    // delete item 
    var tbl = '';
    body.on("click", "#table #delete", function () {

        if (frmOpt == 1) {
            tbl = 'q_question'
        } else if (frmOpt == 2) {
            tbl = 'tb_answer'
        } else if (frmOpt == 3) {
            tbl = 'reward'
        }

        var eThis = $(this);
        var idedit = eThis.parents("tr").find("td:eq(0)").text();
        alert(idedit)
        $.ajax({
            url: 'Action/delete.php',
            type: 'POST',
            data: { iddel: parseInt(idedit), tbl: tbl },
            cache: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });
            },
            success: function (data) {
                if (data['msg'] == true) {
                    popup.css({ "display": "none" });
                }
                //work after success 


            }
        });

    })

    // get auto id question 
    function getAutoid() {
        $.ajax({
            url: 'Action/get_autoid.php',
            type: 'POST',
            data: {},
            cache: false,
            dataType: "json",
            beforeSend: function () {

            },
            success: function (data) {
                $("#od").val(parseInt(data['od']) + 1)
            }

        });

    }


    // login block

    body.on("click", ".frm #BtnLog", function () {
        var eThis = $(this)
        var Parent = eThis.parents(".frm")
        var Email = Parent.find("#Email").val()

        if (Email.indexOf("@") < 0 || Email.indexOf(".com") < 0) {
            alert("invalid Email ")
            return
        }

        var frm = eThis.closest('form.frm');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/Log_In.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                popup.css({ "display": "block" });

            },
            success: function (data) {

                if (data['msg'] == true) {
                    popup.css({ "display": "none" });
                    window.location.href = "admin.php"
                } else {
                    alert("Plz Login again")
                    popup.css({ "display": "none" });
                }

            }


        })


    });

    body.on("click","td .iconPermession",function(){
        alert("Running... ")
    })










});


