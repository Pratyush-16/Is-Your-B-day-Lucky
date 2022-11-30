const dateOfBirth = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const checkBtn = document.querySelector(".check-here");
const outputBox = document.querySelector(".output-box");

checkBtn.addEventListener('click',  checkBirthdateLuck );

function checkBirthdateLuck(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum,luckyNumber.value);
    }
     else{
        outputBox.innerText="Enter both fields"
    }
}

function compareValues(sum, luckyNumber){
    if (sum && luckyNumber){

    
    if(sum % luckyNumber ===0){
        outputBox.innerText="Your Birthdate is Lucky"
    } else{
        outputBox.innerText= "Your birthdate is not lucky"
    }
}else{
    outputBox.innerText ="Enter the  both fields"
}
}

function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum=0;
    for(let index=0; index<dob.length;index++){
        sum= sum + Number(dob.charAt(index));
    }
    return sum;
}




