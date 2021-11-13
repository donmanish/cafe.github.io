let imggall = document.querySelectorAll(".gall");
let open = document.querySelector(".menu");
   let nav = document.querySelector("nav");
  let close = document.querySelector(".close");

function opennav()
{
        open.style.display="none";
        nav.style.display ="block";
        nav.style.textAlign ="center";
        close.style.display="block";
    
}
function closenav()
{
        open.style.display="block";
        nav.style.display ="none";
        nav.style.transition ="2s";
        close.style.display="none";
}
