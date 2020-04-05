const folder = document.getElementById('folder')

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
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();