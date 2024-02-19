$(document).ready(function(){

    let ButtomStart = $(".btnPlay")
    let popUpFirst = $(".popup")
    let DataOption = 0;
    let body = $("body");
    let popup = `<div class="popupQuiz"> </div>`;
    let frm = {"1": "box.php" }
    let spinner = $(".Loading")
    let Heart_loading =$(".Load")
    // get langauge
    let langauge=1
    $("#lang").change(function(){
        langauge=$(this).val()
        $(this).find(".option1").html(ConvertNumToStr(langauge, "ភាសាខ្មែរ", "Khmer"))
        $(this).find(".option2").html(ConvertNumToStr(langauge, "ភាសាអងគ្លេស", "English "))
        body.find(".item .btn").html(ConvertNumToStr(langauge, "ចាប់ផ្ដើម​ លេង", "Start Game"))
        body.find(".title h1").html(ConvertNumToStr(langauge, "សូមស្វាគមន៏ មកកាន់ ការសាកល្បងឆ្លើយសំណួរ", "Welcome to Quiz web"))


        
    })
    function ConvertNumToStr(status, StrOne, StrTwo) {
        if (status == 1) {
            return StrOne
        } else if (status == 2) {
            return StrTwo
        }
    }

    
    // Start game 
    ButtomStart.click(function(){
        popUpFirst.remove()
    })

    // hide laoding 
    setTimeout(() => {
        spinner.remove()
        
      }, 3000); 
// show quiz box
      body.on("click",".item .btn",function(){
        DataOption = $(this).data("option")

        if(DataOption==1){
            body.prepend(popup)
            body.find(".popupQuiz").load(frm[DataOption], function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                        getQuestion()     

                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText)
            })
        }
        // alert(DataOption)
    })
    
    
    //get question
    let Category=0;
    function getQuestion() {

        $.ajax({
            url: 'action/getData.php',
            type: 'POST',
            data: {langauge:langauge},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                body.find(".main-1 .Load").css({"display":"flex"})
                
            },
            success: function (data) {
                
               
                data.forEach(function (e) {
                    $(".h1").html(e.Q_question)
                    $("#box-img").append(`<img src="../admin/css/imgStore/${e.img}" alt="" srcset="">`)
                    Category=e.id
                    getAnswer(Category)
                })
                body.find(".main-1 .Load").css({"display":"none"})
                body.find(".main-1").css({"height":"auto"})
           
            }

        });

    }

    function getAnswer() {
    var answer_block ='';

        $.ajax({
            url: 'action/getAnswer.php',
            type: 'POST',
            data: {Category:Category},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                body.find(".main-1 .Load").css({"display":"flex"})

                
            },
            success: function (data) {
                data.forEach(function (e) {
                    // alert(e.status)
                
                    answer_block=`
                    <div class="col-sm-6 answer"> 
                            <i class="fa-regular fa-circle i_answer" data-id="${e.id}" data-status="${e.status}"></i>
                            ${e.an}
                    </div>
                    `
                $("#answer_block").append(answer_block)

                });
                body.find(".main-1 .Load").css({"display":"none"})


            }

        });

    }
    let id=''
    body.on("click",".answer .i_answer",function(){
        let status = $(this).data("status")
        id = $(this).data("id")
        body.find(".main-1 .Reward").css({"display":"flex"})

        if(status==1){
            getReward()  
            body.find(".Reward .Reward_p").html(ConvertNumToStr(langauge,"អ្នកទទួលបាន","You get"))
        // body.find(".Reward .Reward_btn").html(ConvertNumToStr(langauge,"ចុចដើម្បីទទួល","Click to get"))


        }else{
            getReward()
            body.find(".Reward .Reward_p").html(ConvertNumToStr(langauge,"អ្នកទទួលបាន","You get"))
        // body.find(".Reward .Reward_btn").html(ConvertNumToStr(langauge,"ចុចដើម្បីទទួល","Click to get"))

 
        }
    })


    function getReward() {

        $.ajax({
            url: 'action/getReward.php',
            type: 'POST',
            data: {id:id},
            cache: false,
            dataType: "json",
            beforeSend: function () {
                body.find(".main-1 .Load").css({"display":"flex"})

                
            },
            success: function (data) {
                
                data.forEach(function (e) {
                    $(".Reard_h1").html(e.name)
                    $("#Reward").html(`<img src="../admin/css/imgStore/${e.img}" alt="" srcset="">`)

                })
                body.find(".main-1 .Load").css({"display":"none"})

           
            }

        });

    }
    body.on("click",".Reward .Reward_btn",function(){
        body.find(".main-1 .Reward").css({"display":"none"})
    })



    body.on("click",".question .btnBack",function(){
            $(".popupQuiz").remove()
    })
       
        





})