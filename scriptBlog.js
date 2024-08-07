//Blog Dialog box funtion
function blogBoxClick(n){
    let targetid = "BlogAfterClick".concat(n);
    console.log(targetid);
    let y = document.getElementById(targetid);
    y.removeAttribute("hidden");
    
    let x = document.getElementById(n).parentElement;
    x.setAttribute("hidden","true")
}

function crossBtn(){
    let x = document.getElementById(n).parentElement;
    x.removeAttribute("hidden")

    let targetid = "BlogAfterClick".concat(n);
    console.log(targetid);
    let y = document.getElementById(targetid);
    y.setAttribute("hidden","true");

}