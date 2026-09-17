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


function resetValue(){
    img.style.filter='none';
    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    huerotate.value='0';

}

// awl lma y7ml kol 7aga t5tfy 3shan mfesh sora lsa
window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imgBox.style.display='none';
}
/*msh b3ml on click 3shan upload mn type file ely hwa array 
fa lma brf3 sora gdeda btt8ayar */
upload.onchange=function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    imgBox.style.display='block';
    let file= new FileReader(); //class beqr2 el malafat
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }
    
}
let filters=document.querySelectorAll('ul li input');
filters.forEach(filter=>{
    filter.addEventListener('input',function(){
        img.style.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        `

    });
});

download.onclick=function(){
    download.href= img.src;
    
}