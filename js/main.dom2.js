display=()=>{
    var elemento= document.getElementsByTagName("span");  
    elemento[0].classList.remove("hidden");
   
}
//3rd code
    
add=()=>{
    var get=document.getElementsByTagName("ul");
    var adde=document.createElement("li");
    get[0].appendChild(adde);
    var contenadd=document.createTextNode("Hola");
    adde.appendChild(contenadd);
}

