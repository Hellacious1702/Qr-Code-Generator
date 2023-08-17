// Linking the HTML ID's with JS
let InputBox = document.getElementById('input-Box');
let GenerateBTN = document.getElementById('generate');
let GeneratedQR = document.getElementById('generatedQR');
let Card = document.querySelectorAll('.Card');
let Generated = document.getElementById('generated');
let DownloadBTN = document.getElementById('downloadBTN');
let Download = document.getElementById('download');
let Option = document.getElementById('option');

// Creating and Storing Variables
let qr = "";

// The API Key for QR
let qrAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

// The API Key for BarCode
let barAPI = "https://barcodeapi.org/api/39/";

// Storing the string that needs to be attached to API Key to make it downloadable
let downloadAPI = "&download=1";

// Creating Function To Generate QR Code using API as per User Input  
function Generate(){
    // If Block to check if user wants to generate QR Code
    if(Option.value === "QR"){
        // If block to check if the user has given some input or not
        if(InputBox.value.length === 0){
            alert("Please enter the URL");
        }
        // Else Block to Generate QR Code if input box is not empty
        else{
            let qr = qrAPI + InputBox.value;
            GeneratedQR.src = qr;
            // Making The Generated DIV Visible by Changing CSS Property
            Generated.style.display = "block";
        }
    }
    // Else If Block to check if user wants to generate BAR Code
    else if(Option.value === "BarCode"){
        // If block to check if the user has given some input or not
        if(InputBox.value.length === 0){
            alert("Please enter the URL");
        }
        // Else Block to Generate QR Code if input box is not empty
        else{
            let UpperInput = InputBox.value.toUpperCase();
            let qr = barAPI + UpperInput;
            GeneratedQR.src = qr;
            // Making The Generated DIV Visible by Changing CSS Property
            Generated.style.display = "block";
        }
    }
}
   
// Listener for the Generate Button That will call the Generate Function and Create QR
GenerateBTN.addEventListener("click" , ()=>{
    Generate();
})

// Listener for the Download Button that will push the download url to href of a in HTML
DownloadBTN.addEventListener("click" , ()=>{
    // If Block to check if user wants to Download QR Code
    if(Option.value === "QR"){
        let qr = qrAPI + InputBox.value + downloadAPI;
        Download.href = qr;
    }
    // Else If Block to check if user wants to Download BAR Code
    else if(Option.value === "BarCode"){
        let Bar = "https://barcodeapi.org/api/auto/varad" + ".png";
        Download.download = Bar;
    }
})