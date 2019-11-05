window.onload = function () {
    var btns = document.getElementsByTagName('button');
    var divs = document.getElementsByClassName('tab-dis');

    for (var i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function () {
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor = "ghostwhite";
                divs[i].style.display = 'none';
            }
            this.style.backgroundColor = "#e4b9c0";
            divs[this.index].style.display = 'block';
        }
    }
    //选项卡
    var Text = document.getElementById("text");
    var Email = document.getElementById("email");
    var Textp = document.getElementById("text-p");
    var Emailp = document.getElementById("email-p");
    var Submit = document.getElementById("submit");
    var Submitp = document.getElementById("submit-p");
    var Send = document.getElementById("send");
    var Textreg = /^[\u4e00-\u9fa5]{2,8}$/;
    var Emailreg = /^[A-Za-z0-9]{4,16}@[A-Za-z0-9]{2,8}.com|cn$/;
    Text.onblur = function () {
        if (Textreg.test(this.value)){
            Textp.style.display = "none";
        }else {
            Textp.style.display = "block";
        }
    }
    Email.onblur = function () {
        if (Emailreg.test(this.value)){
            Emailp.style.display = "none";
        }else {
            Emailp.style.display = "block";
        }
    }
    Submit.onclick = function () {
        if (Text.value|| Email.value){
            Submitp.style.display = "none";
            Text.value = "";
            Email.value="";
            Send.style.display = "block";
        }else{
            Submitp.style.display = "block";
            Send.style.display = "none";

        }
        return false;
    }
    //表单验证
}
