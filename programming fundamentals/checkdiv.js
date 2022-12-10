function checkDiv(num){
let digits = [];  //array to store digits
let strNum = num.toString(); //convert num to string
for(let i in strNum){
digits.push(parseInt(strNum[i]));  //convert each digit string to int
}
for(let j = 0; j<digits.length; j++){
    if(num%digits[j]!=0){
        return console.log(num + " Divisibilty is FALSE");  //check if any is not divisible
    }
}
return console.log(num + " Divisibilty is TRUE"); //if all divisible return true
}

function test_case(){        //test cases
    checkDiv(12); //true
    checkDiv(13); //false
    checkDiv(128); //true
    checkDiv(10); //false
    checkDiv(1248); //true
    checkDiv(123567); //false
}

test_case();
