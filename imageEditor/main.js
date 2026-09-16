// bsmk el 3naser kolaha
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("huerotate");


let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

// awl lma y7ml kol 7aga t5tfy 3shan mfesh sora lsa
window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imgBox.style.display='none';
}
/*msh b3ml on click 3shan upload mn type file ely hwa array 
fa lma brf3 sora gdeda btt8ayar */
upload.onchange=function(){
    download.style.display='block';
    reset.style.display='block';
    imgBox.style.display='block';
    let file= new FileReader(); //class beqr2 el malafat
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }
    
}
