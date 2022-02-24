// ==========Day & Date==========
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let date = d.getDate()
const da = new Date();
let day = days[da.getDay()];
const y = new Date();
let year = y.getFullYear();
const m = new Date();
let month = months[m.getMonth()];
document.getElementById("date").innerHTML = date + ' ' + month + ', ' + day + ', ' + year;