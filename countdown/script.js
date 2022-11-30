const daysE1=document.getElementById("days")
const hourE1=document.getElementById("hours")
const minsE1=document.getElementById("mins")
const secondsE1=document.getElementById("seconds")

const newYear="1 jan 2023";
function countdown(){
  const newYearDate=new Date(newYear);
  const currentDate=new Date();
  const second=(newYearDate-currentDate)/1000;
  const days=Math.floor(second/3600/24);
  const hours=Math.floor(second/3600)%24;
  const mins=Math.floor((second/3600)%24)%60;
  const sec=Math.floor(second%60);
  daysE1.innerHTML=days;
  hourE1.innerHTML=formatTime(hours);
  minsE1.innerHTML=formatTime(mins);
  secondsE1.innerHTML=formatTime(sec);
}
function formatTime(time){
  return time<10?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);