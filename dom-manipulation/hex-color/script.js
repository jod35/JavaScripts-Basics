const hex_numbers=[0,1,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex_btn=document.querySelector('.hex-btn');
const bodybcd=document.querySelector('body');
const hex=document.querySelector('.hex');

const getHex=()=>{
let hex_color='#';
for(i=0;i<6;i++){
    let random= Math.floor(Math.random()*hex_numbers.length);
    hex_color+=hex_numbers[random];
    console.log(hex_color);
}
bodybcd.style.backgroundColor=hex_color;
hex.innerHTML=hex_color;
}
hex_btn.addEventListener('click',getHex);