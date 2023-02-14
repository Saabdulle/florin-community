//Automatic update on current date
document.getElementById('start-date').value = new Date().toISOString().slice(0, 10);

//Automatic update of current time.
let time = new Date();
time.setUTCHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
document.getElementById("start-time").valueAsDate = time;
