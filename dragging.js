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
  alert( "Access Denied" );
}
function terminate() {
  console.log('working')
  document.write('<script type="text/undefined">')
}
function openvid(){
  open('trips.html');
}
function openinsta(){
  window.open('https://instagram.com/internetfile');
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
