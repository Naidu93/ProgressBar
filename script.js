const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");




let currentActive =1;



next.addEventListener("click",()=>{
    currentActive++;

    if(currentActive> circles.length){
        currentActive=circles.length;
    }

    updateUI();
})


prev.addEventListener("click",()=>{
    currentActive--;

    if(currentActive<1){
        currentActive=1;
    }

    updateUI();


})


function updateUI(){
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add("active");
        
        }else{
            circle.classList.remove("active");
        }
    })


    const currentActives = document.querySelectorAll(".active");


    progress.style.width = (currentActives.length-1)/(circles.length-1)*100 +'%';




    if(currentActive ==1){
        prev.disabled =true;
    }else if(currentActive == circles.length){
        next.disabled =true;
    }else{
        prev.disabled =false;
        next.disabled=false;
    }


}
