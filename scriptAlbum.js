function goAcademicBlock(){
    let x = document.getElementById("A-page-01");
    x.setAttribute("hidden", "true");

    let y = document.getElementById("A-page-02");
    y.removeAttribute("hidden")
}

function goBackAlbum(){
    let x = document.getElementById("A-page-02");
    x.setAttribute("hidden" , "true");
    console.log(x)

    let y = document.getElementById("A-page-01");
    y.removeAttribute("hidden");
}

function goProjectBlock(){
    let x = document.getElementById("A-page-01");
    x.setAttribute("hidden", "true");

    let y = document.getElementById("A-Project");
    console.log(y);
    y.removeAttribute("hidden");
}

function goBackFromProject(){
    let x = document.getElementById("A-Project");
    x.setAttribute("hidden" , "true");
    console.log(x)

    let y = document.getElementById("A-page-01");
    y.removeAttribute("hidden");
}


function goBandBlock(){
    let x = document.getElementById("A-page-01");
    x.setAttribute("hidden", "true");

    let y = document.getElementById("A-Band");
    y.removeAttribute("hidden");
}

function goBackFromBand(){
    let x = document.getElementById("A-Band");
    x.setAttribute("hidden" , "true");
    console.log(x)

    let y = document.getElementById("A-page-01");
    y.removeAttribute("hidden");
}

function goIn_A(name){
    let y = document.getElementById("A-page-02");
    y.setAttribute("hidden", "true");

    let targetId = "A-A-02-".concat(name);
    let z = document.getElementById(targetId);
    z.removeAttribute("hidden");
}

function go_A_page_02(name){
    let a = document.getElementById("A-page-02");
    a.removeAttribute("hidden");


    let targetId = "A-A-02-".concat(name);
    let z = document.getElementById(targetId);
    z.setAttribute("hidden" , "true");
}

function goMrityunjaya(){
    let y = document.getElementById("A-Band");
    y.setAttribute("hidden" , "true");

    let x = document.getElementById("Band-In-Mrityunjaya");
    x.removeAttribute("hidden");
}

function goSmriti(){
    let y = document.getElementById("A-Band");
    y.setAttribute("hidden" , "true");

    let a = document.getElementById("Band-In-Smriti");
    a.removeAttribute("hidden");
}


function bandCross(){
    let y = document.getElementById("Band-In-Mrityunjaya");
    y.setAttribute("hidden" , "true");

    let x = document.getElementById("A-Band");
    x.removeAttribute("hidden");
}

//Photo Block
function goPhotoBlock(){
    let y = document.getElementById("A-page-01");
    y.setAttribute("hidden" , "true");
    
    let x = document.getElementById("A-Photos");
    x.removeAttribute("hidden");
}

function goBackFromPhoto(){
    let x = document.getElementById("A-Photos");
    x.setAttribute("hidden" , "true");
    console.log(x)

    let y = document.getElementById("A-page-01");
    y.removeAttribute("hidden");
}


function goInP_(name = 'Academics') {
    let x = document.getElementById("A-Photos");
    x.setAttribute("hidden" , "true");

    let targetId = "InPhotos".concat(name);
    console.log(targetId);
    let z = document.getElementById(targetId);
    console.log(z);
    z.removeAttribute("hidden");
}

function crossPhotos(){
    let targetId = "InPhotos".concat(name);
    console.log(targetId);
    let z = document.getElementById(targetId);
    console.log(z);
    z.setAttribute("hidden" , "true");

    let x = document.getElementById("A-Photos");
    x.removeAttribute("hidden");
}

