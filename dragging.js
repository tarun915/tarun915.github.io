const folder = document.getElementById('folder')
$(document).ready(function() {
  var a = 3;
  $('#note,#drgfolder,#drghtml,#drghtml2,#drginternal,#insta').draggable({
 start: function(event, ui) { $(this).css("z-index", a++); }
});
});

function opengithub() {
  console.log('clicked');
  window.open("https://github.com/tarun915/tarun915.github.io");
}
function openoldsite() {
  open('indexold.html');
}
function denied() {
  open('Movie Reviews.html');
}
function terminate() {
  console.log('working')
  document.write('<script type="text/undefined">')
}
function openvid(){
  open('videopage2.html');
}
function openinsta(){
  window.open('https://instagram.com/internetfile');
}

window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     
  document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
    setTimeout(clock, 1000);
    }
}
