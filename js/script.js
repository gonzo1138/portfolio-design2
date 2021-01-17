window.onload = function(){

    var allLines = document.querySelectorAll('.lines');
    var allDotLines = document.querySelectorAll('.dotlines');
    var allDots = document.querySelectorAll('.dots');
    var showcase = document.getElementById('showcase');

    showcase.addEventListener("click",function(event){
        showcase.style.display = "none";
    });

    allDots.forEach((item)=>{
        item.addEventListener("click",function(event){
            show(event);
        });
    });

    allDotLines.forEach((item)=>{
        item.addEventListener("click",function(event){
            show(event);
        });
    });

    function show(clicked){
        showcase.innerText = clicked.target.id;
        console.log(clicked.target);
        showcase.innerHTML.fontcolor(clicked.target.style.fill);
        showcase.style.display = "block";

    }
}