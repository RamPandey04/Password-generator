let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("pass-box");
let LowerCase = document.getElementById("lowercase");
let UpperCase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon= document.getElementById("copyIcon")


//showing input slider value

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value= generatePassword();
})

let lowerChars ="abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

//Function to generate Password

function generatePassword(){
    let genPassword ="";
    let allChars= "";

    allChars += LowerCase.checked ? lowerChars: "";
    allChars += UpperCase.checked ? upperChars: "";
    allChars += number.checked ? allnumbers: "";
    allChars += symbols.checked ? allSymbols: "";


    if(allChars == "" || allChars.length == 0 ){
        return genPassword;
    }
    
   let i =1;

   while(i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random() *allChars.length));
    i++;
   }
    
    
    
    return genPassword;
    
}

copyIcon.addEventListener('click',() =>{
    if(passBox.value !="" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText ="check";
        copyIcon.title = "Password Copied";
        setTimeout(()=> {
            copyIcon.innerHTML="content_copy";
            copyIcon.title = "";

        }, 3000)


        

    }
    //else{

    //}
    
});
