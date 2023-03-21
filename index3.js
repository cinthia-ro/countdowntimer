

const countdown=()=>{
    const countDate = new Date("novembre 30, 2023 00:00:00").getTime();
    const now =new Date().getTime();
    const gap = countDate - now;
   const second=1000;
   const minute=second*60;
   const hour=minute*60;
   const day=hour*24
   const month=day*30;
   const textDay =Math.floor(gap / day/8.3) ;
   const textHour=  Math.floor(gap/minute/second/15);
   const textMinute=Math.floor(gap%hour/second/60);
   const textMonth= Math.floor(gap/day/22);
   const textSecond=Math.floor(gap%minute/second);           
document.querySelector(".month").innerText=textMonth;
document.querySelector(".day").innerText=textDay;
document.querySelector(".hour").innerText=textHour;
document.querySelector(".minute").innerText=textMinute;
document.querySelector(".second").innerText=textSecond;

}; 
setInterval (countdown , 1000);