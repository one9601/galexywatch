
function printTime() {

              var clock = document.getElementById("clock");            // 출력할 장소 선택

              var now = new Date();                                                  // 현재시간

              var nowTime = now.getHours() + ": " + now.getMinutes() + ": " + now.getSeconds();

              clock.innerHTML = nowTime;           // 현재시간을 출력


              var clock2 = document.getElementById("clock2");

              var nowTime2 = now.getFullYear() + "년 " + (now.getMonth()+1) + "월 " + now.getDate() + " 일";
          
              clock2.innerHTML = nowTime2;


              setTimeout("printTime()",1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000

};



window.onload = function() {                         // 페이지가 로딩되면 실행

              printTime();

}

