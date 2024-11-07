let sign_in=document.querySelector("#sign_in");

let login=document.querySelector("#login-form");
let rigister=document.querySelector("#rigster-form");

sign_in.addEventListener("click",function()
{
    rigister.style.right="-100%";
    login.style.right="0";
    // rigister.style.left="0";
});




let sign_up=document.querySelector("#sign_up");
sign_up.addEventListener("click",function()
{
   rigister.style.right="7%";
   login.style.right="-100%";
      
});





