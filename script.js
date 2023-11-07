window.addEventListener("scroll",reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    var aside_reveals = document.querySelectorAll('.aside-container');
    for(var i=0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoints = 150;
        if(revealtop < windowHeight){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}




document.addEventListener("DOMContentLoaded", function() {
let container_scroll = document.querySelector('.contianer-picture');
let bckbtn = document.getElementById("backbtn");
let nxtbtn = document.getElementById("nextbtn");

container_scroll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    container_scroll.scrollLeft += evt.deltaY;
});

nxtbtn.addEventListener("click",()=>{
    container_scroll.style.scrollBehavior = "smooth";
    container_scroll.scrollLeft += 1100;
});

bckbtn.addEventListener("click",()=>{
    container_scroll.style.scrollBehavior = "smooth";
    container_scroll.scrollLeft -= 1100;
});
});