var ww=$(window).width();
var hh=window.innerHeight;
$(function(){
    window.onload = function () {
        $(".line1").animate({"height":202/640*ww+"px"},1000);
        $(".line2").animate({"height":250/640*ww+"px"},1000);
        $(".logo").delay(300).animate({"opacity":"1"},500);
        $(".slogan").addClass("slogan1");
        $(".head").delay(1500).animate({"left":"27%"},300);
        $(".up_pic").delay(1800).animate({"opacity":"1","margin-top":"26%"},500);
        $(".jump").delay(2000).animate({"opacity":"1","margin-top":"38%"},500);
    }
    $(".up_pic").click(function(){
        $(".page2").removeClass("hide").siblings().addClass("hide");
        $(".page2").show();
        $('#file').click();
    });
    $(".fa").css({"top":197/640*ww+"px"});
    $("#clipBtn").click(function(){
        if($("#hit").attr("src").length<=0){
            return;
        }
        $(".page3").removeClass("hide").siblings().addClass("hide");
    });
    $(".change").click(function(){
        $('#file').click();
    });
    $(".jump").click(function(){
        $(".card").attr("src","img/card"+(parseInt(Math.random()*3) + 1)+".jpg");
        $(".page3").removeClass("hide").siblings().addClass("hide");
    })
    document.addEventListener("touchmove",function(e){
        e.preventDefault();
    });
});
