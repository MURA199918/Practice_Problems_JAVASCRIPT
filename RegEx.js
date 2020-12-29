console.log("Welcome to validation using RegEx.");

let regEx_PINCODE = RegExp('^[1-9]{1}[0-9]{5}$');
var pincode1 = 400076;
if(regEx_PINCODE.test(pincode1)){
    console.log("Pincode validated successfully");
}else{
    console.log("Incorrect Validation");
}