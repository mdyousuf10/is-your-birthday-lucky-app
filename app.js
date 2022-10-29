let date = document.querySelector(".user-date");
let number = document.querySelector(".lucky-no");
let buttonClick = document.querySelector(".click");
let output = document.querySelector(".output")

buttonClick.addEventListener("click", function clickHandler(){

   if(number.value){
    let newDate = GetDate(date);
    let sum = calculateSum(newDate);
    checkIfLucky(sum)
   }else{

    output.innerText="get lost"
   }
    
})

function GetDate(dob){
    let newDate2= date.value.replaceAll("-","")
    return newDate2;
}

function calculateSum(newDate){
    let sum=0
    for (let index = 0; index < newDate.length; index++) {
        sum=sum+Number(newDate.charAt(index));
    }
    return sum;
}
function checkIfLucky(sum){
    
    if(sum%number.value==0){
   
        output.innerText = "Your BirthDate is lucky"
    }else{

        output.innerText="Your birthday is not lucky"
    }
}