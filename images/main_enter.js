/*function initRandImg(){
	_list = document.getElementById("mainCont");
	if (_list){
		_img = _list.getElementsByTagName("img");
		for (i = 0; i<_img.length; i++){
			z = Math.floor(Math.random() * 32) + 1;
			if (z < 10){
				z = "0" + z;
			}
			_img[i].src = siteAdr + "../home1/img-" + z + ".jpg";
		}
	}
} */
if (!Array.prototype.indexOf)
  {

       Array.prototype.indexOf = function(searchElement /*, fromIndex */)

    {


    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (len === 0)
      return -1;

    var n = 0;
    if (arguments.length > 0)
    {
      n = Number(arguments[1]);
      if (n !== n)
        n = 0;
      else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }

    if (n >= len)
      return -1;

    var k = n >= 0
          ? n
          : Math.max(len - Math.abs(n), 0);

    for (; k < len; k++)
    {
      if (k in t && t[k] === searchElement)
        return k;
    }
    return -1;
  };

}
function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

function initRandImg(){
var numbers= ["dizi"];
    _list = document.getElementById("mainCont");
    if (_list){
        _img = _list.getElementsByTagName("img");
        for (i = 0; i < _img.length; i++){
            if ((i > 9 && i < 14) || (i > 30 && i < 35) || (i > 45 && i < 50)){
                _img[i].src = "/home/guest/Desktop/siteee/Scribblesite_files/none.gif";
            }
            else{
                z = Math.floor(Math.random() * 62) + 1;
		while(include(numbers,z)) {
			z = Math.floor(Math.random() * 62) + 1;
		}
		numbers.push(z);
		if (z < 10){
                    z = "0" + z;
                }
                _img[i].src = "/home/guest/Desktop/siteee/Scribblesite_files/img-" + z + ".jpg";
            }
        }
    }
}
//if (window.addEventListener) window.addEventListener("load", initRandImg, false);
//else if (window.attachEvent) window.attachEvent("onload", initRandImg);

function initToggle(){
    $('#contact-email').val('');
    $('#describe').html('');
    $('#name-position').val('');
    $('#company-address').val('');

    //                $('.let-me-in-popup').css('display','none');

    $(".messages").hide();
    $(".forgot-pass").hide();
    $(".lnk-forgot-pass").click(function(){
        $(".login").hide();
        $(".forgot-pass").fadeIn();
        return false;
    });
    $(".lnk-login").click(function(){
        $(".forgot-pass").hide();
        $(".login").fadeIn();
        return false;
    });
    $(".btn-let-me-in").click(function(){
        if ($(".let-me-in").css('display')=='none')
            $(".let-me-in").css('display','block')
        else{
            $(".let-me-in").css('display','none');
            $('#email-info').val('');
            $('#describe').html('');
            $('#name-position').val('');
            $('#company-address').val('');
        }
        return false;
    });
//        $("#describe").keyup(function(){
//            vs = document.getElementById('describe');
//            if ((50-vs.value.length)<0){
//                vs.value = vs.value.slice(0,50);
//                $('#span-describe').text(0);
//            }else{
//                $('#span-describe').text(50-vs.value.length);
//            }
//        });
}
$(document).ready(function(){
    initRandImg();
    initToggle();
});

function check_request(){
    var options = {
        dataType: 'json',
        method: 'post',
        success: function(res_data) {
            if ('ok' == res_data){
                document.location = siteAdr+"security/users/login?req_good=1";
            }else{
                if (res_data[0]==1)
                    $('#name-position').css('border-color','red');
                else
                    $('#name-position').css('border-color','#C8E8FF');
                if (res_data[1]==1)
                    $('#contact-email').css('border-color','red');
                else
                    $('#contact-email').css('border-color','#C8E8FF');
                if (res_data[2]==1)
                    $('#company-address').css('border-color','red');
                else
                    $('#company-address').css('border-color','#C8E8FF');
                if (res_data[3]==1)
                    $('#describe').css('border-color','red');
                else
                    $('#describe').css('border-color','#C8E8FF');
            }

        }
    };
    $("#RequestForm").ajaxSubmit(options);
}
function send_password(){
    var options = {
        method: 'post',
        success: function(res_data) {
            eval(res_data);

        }
    };
    $("#ForgotForm").ajaxSubmit(options);
}

function show_ok_pass(str){
    $(".messages-inner").children("p").html(str);
    $(".messages").fadeIn();
    setTimeout("$('.messages').hide()",3000);
}

function changePassword(){
     var options = {
        method: 'post',
        success: function(res_data) {
            eval(res_data);

        }
    };
    $("#PassForm").ajaxSubmit(options);
}
