function goCV(){
    let a = document.getElementById("Container-Home");
    a.setAttribute("hidden", "true");
   
    let b = document.getElementById("Container-CV");
    b.removeAttribute("hidden");
   
    let c = document.getElementById("Blog-Body");
    c.setAttribute("hidden", "true");
    
    let d = document.getElementById("Container-Album");
    d.setAttribute("hidden", "true");
}

function goHome(){
    let a = document.getElementById("Container-Home");
    a.removeAttribute("hidden");
   
    let b = document.getElementById("Container-CV");
    b.setAttribute("hidden", "true");
   
    let c = document.getElementById("Blog-Body");
    c.setAttribute("hidden", "true");
    
    let d = document.getElementById("Container-Album");
    d.setAttribute("hidden", "true");
}

function goBlog(){
    let a = document.getElementById("Container-Home");
    a.setAttribute("hidden", "true");
   
    let b = document.getElementById("Container-CV");
    b.setAttribute("hidden", "true");
   
    let c = document.getElementById("Blog-Body");
    c.removeAttribute("hidden");
    
    let d = document.getElementById("Container-Album");
    d.setAttribute("hidden", "true");
}

function goAlbum(){
    let a = document.getElementById("Container-Home");
    a.setAttribute("hidden", "true");
   
    let b = document.getElementById("Container-CV");
    b.setAttribute("hidden", "true");
   
    let c = document.getElementById("Blog-Body");
    c.setAttribute("hidden", "true");
    
    let d = document.getElementById("Container-Album");
    d.removeAttribute("hidden");
}