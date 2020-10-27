//sec07 자동 슬라이드
$(function(){
    setInterval(function(){
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginLeft: "-309px"
        }, "500");
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginLeft: "-618px"
        }, "500");
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginLeft: "-927px"
        }, "500");
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginLeft: "-0"
        }, "500");
    })
})