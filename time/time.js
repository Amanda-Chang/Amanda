const daysE1=document.getElementById("days")
const hoursE1=document.getElementById("hours")
const minsE1=document.getElementById("mins")
const secondsE1=document.getElementById("seconds")

const newyear="1 jan 2023";
function countdown(){
const newyeardata=new Date(newyear);
const currentdata=new Date();
const second=(newyeardata-currentdata)/1000;
const days=Math.floor(second/3600/24);
const hours=Math.floor(second/3600)%24;
const mins=Math.floor((second/60)%24)%60;
const sec=Math.floor(second%60);
daysE1.innerHTML=days;
hoursE1.innerHTML=formatTime(hours)
minsE1.innerHTML=formatTime(mins)
secondsE1.innerHTML=formatTime(sec);

}
function formatTime(time){
return time<10?`0${time}` : time;
}


countdown()
setInterval(countdown,1000);