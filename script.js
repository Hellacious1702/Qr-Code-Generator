let InputBox = document.getElementById('input-Box');
let GenerateBTN = document.getElementById('generate');
let GeneratedQR = document.getElementById('generatedQR');
let Card = document.querySelectorAll('.Card');
let Generated = document.getElementById('generated');
let DownloadBTN = document.getElementById('downloadBTN');
let Download = document.getElementById('download');


let qr = "";

let qrAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let downloadAPI = "&download=1";

let extension = ".png";

function Generate(){

    if(InputBox.value.length === 0){
        alert("Please enter the URL");
    }
    else{
        let qr = qrAPI + InputBox.value;
        GeneratedQR.src = qr;
        Generated.style.display = "block";
    }
}
   

GenerateBTN.addEventListener("click" , ()=>{
    Generate();
})

DownloadBTN.addEventListener("click" , ()=>{
    let qr = qrAPI + InputBox.value + downloadAPI;
    Download.href = qr;
})