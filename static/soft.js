const music = new Audio('Pal_Pal_Dil_Ke_Paas_-_Title_Track.mp3');
const music1 = new Audio('kali.mp3')
const music2 = new Audio('gav sutena.mp3');
const music3 = new Audio('kali.mp3');
const music4 = new Audio('kali.mp3');
const music5 = new Audio('kali.mp3');
const music6 = new Audio('kali.mp3');
const music7 = new Audio('kali.mp3');
let firstsong =document.getElementById('one')
let secondsong = document.getElementById('two')
let thirdsong = document.getElementById('three')
let foursong = document.getElementById('four')
let fivesong = document.getElementById('five')
let sixsong = document.getElementById('six')
let sevensong = document.getElementById('seven')
let eightsong = document.getElementById('eight')


firstsong.addEventListener('click' , ()=>{
   if(music.paused ||music.currentTime==0){
      music.play();
   }else{
      music.pause();
   }
   

  
 
})
secondsong.addEventListener('click' , ()=>{
   if(music1.paused ||music1.currentTime==0){
      music1.play();
   }else{
      music1.pause();
   }
   
})
thirdsong.addEventListener('click' , ()=>{
   if(music2.paused ||music2.currentTime==0){
      music2.play();
   }else{
      music2.pause();
   }
   
})
foursong.addEventListener('click' , ()=>{
   if(music3.paused ||music3.currentTime==0){
      music3.play();
   }else{
      music3.pause();
   }
   
})
fivesong.addEventListener('click' , ()=>{
   if(music4.paused ||music4.currentTime==0){
      music4.play();
   }else{
      music4.pause();
   }
   
})
sixsong.addEventListener('click' , ()=>{
   if(music5.paused ||music5.currentTime==0){
      music5.play();
   }else{
      music5.pause();
   }
   
})
sevensong.addEventListener('click' , ()=>{
   if(music6.paused ||music6.currentTime==0){
      music6.play();
   }else{
      music6.pause();
   }
   
})
eightsong.addEventListener('click' , ()=>{
   if(music7.paused ||music7.currentTime==0){
      music7.play();
   }else{
      music7.pause();
   }
   
})
