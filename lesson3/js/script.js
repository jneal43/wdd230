var space = new Date();
let year = space.getFullYear();
document.getElementById('year').textContent = year;

var date = new Date(document.lastModified).toLocaleDateString("en-US");
var time = new Date(document.lastModified).toLocaleTimeString('en-US', { hour12: false });
var dateTime = date +' '+time;
document.getElementById('updateDate').textContent = dateTime