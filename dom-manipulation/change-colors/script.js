const colorbtn=document.querySelector('.color-btn');
const bodybgd=document.querySelector('body');

const colors =["Yellow","red","green","pink","coral","blue","magenta","orange","maroon","aqua"];

const changeColor=()=>{
    // bodybgd.style.backgroundColor=colors[3];
    let random =Math.floor(Math.random()*colors.length);
    bodybgd.style.backgroundColor=colors[random];
}

colorbtn.addEventListener('click',changeColor);