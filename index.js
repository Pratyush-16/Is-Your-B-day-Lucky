const dateOfBirth = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const checkBtn = document.querySelector(".check-here");
const outputBox = document.querySelector(".output-box");

function compareValues(sum, luckyNumber){
    //console.log(sum,luckyNumber);
    if(sum % luckyNumber ===0){
        outputBox.value="Your Birthdate is Lucky";
    } else{
        outputBox.value= "Your birthdate is not lucky";
    }
}

function checkBirthdateLuck(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum,luckyNumber.value);
    }
    //console.log(sum);
    
    else{
        outputBox.value ="Enter both fields";
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


checkBtn.addEventListener('click',  checkBirthdateLuck );

