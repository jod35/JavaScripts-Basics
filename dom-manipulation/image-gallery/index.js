const showPic=(whichPic)=>{
    let source =whichPic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');

    placeholder.setAttribute('src',source);
};

const changeToDark=(e)=>{
  document.querySelector('body').style.cssText="background-color:black; color:white;";

}

const changeToLight= ()=>{
    document.querySelector('body').style.backgroundColor="white";
}