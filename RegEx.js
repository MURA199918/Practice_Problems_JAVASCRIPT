console.log("Welcome to validation using RegEx.");

//UC1 - PINCODE
{
        let regEx_PINCODE = RegExp('^[1-9]{1}[0-9]{5}$');
        var pincode1 = 400076;
        if(regEx_PINCODE.test(pincode1)){
            console.log("UC1 - Pincode validated successfully");
        }else{
            console.log("UC1 - Incorrect Validation");
        }
}

//UC2 - PINCODE
{
    let regEx_PINCODE = RegExp('^[1-9]{1}[0-9]{6}$');
    var pincode1 = 'A400076';
    if(regEx_PINCODE.test(pincode1)){
        console.log("UC2 - Pincode validated successfully");
    }else{
        console.log("UC2 - Incorrect Validation");
    }
}

//UC3 - PINCODE
{
    let regEx_PINCODE = RegExp('^[1-9]{1}[0-9]{5}[0-9]{1}$');
    var pincode1 = '400076B';
    if(regEx_PINCODE.test(pincode1)){
        console.log("UC3 - Pincode validated successfully");
    }else{
        console.log("UC3 - Incorrect Validation");
    }
}

//UC4 - PINCODE
{
    let regEx_PINCODE = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        var pincode1 = '400 076';
        if(regEx_PINCODE.test(pincode1)){
            console.log("UC4 - Pincode validated successfully");
        }else{
            console.log("UC4 - Incorrect Validation");
        }
}