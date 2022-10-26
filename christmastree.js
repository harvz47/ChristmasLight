

function sparkling2(){
    let text = document.getElementById("rgb1");
    let text1 = document.getElementById("logo");
    let cs = Math.floor(Math.random()* 255);
    let cg = Math.floor(Math.random()* 255);
    let cy = Math.floor(Math.random()* 255);
    let combine = "rgb("+ cs + " , " + cg + " , " + cy +")";
    text1.style.color = combine;
    text.style.color = combine;
    document.getElementById("rgb1").innerHTML = combine;
}
function sparkling(){
    let text = document.getElementById("rgb");
    let text1 = document.getElementById("christmastree");
    let text2 = document.getElementById("christmastree1");
    let cd = Math.floor(Math.random()* 255);
    let ce = Math.floor(Math.random()* 255);
    let cf = Math.floor(Math.random()* 255);
    let combine = "rgb("+ cd + " , " + ce + " , " + cf +")";
    text2.style.color = combine;
    text1.style.color = combine;
    text.style.color = combine;
    document.getElementById("rgb").innerHTML = combine;
    d

}
function start(){
    start_color = setInterval(sparkling, 100);
    start_color2 = setInterval(sparkling2, 100);
}
function stop(){
    clearInterval(start_color);
    clearInterval(start_color2);
}

function reset(){
    location.reload(sparkling,sparkling2);
   
}