const windowsBtn=document.querySelector('.windows-icon');
const startMenu=document.querySelector('.startmenu');

let r=false;
windowsBtn.addEventListener('click',()=>{
    if(!r){
        startMenu.style.transform="translateY(0rem)";
        r=true;
    }
    else{
        startMenu.style.transform="translateY(38rem)";
        r=false;
    }

});


