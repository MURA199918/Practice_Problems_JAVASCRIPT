console.log("welcome to practice problems of javascript!!!");
let id = Math.floor(Math.random() * 10);
console.log("id: "+id);

//1.
{
    let num1 = Math.floor(Math.random() * 999);
    let num2 = Math.floor(Math.random() * 999);
    let num3 = Math.floor(Math.random() * 999);
    let num4 = Math.floor(Math.random() * 999);
    let num5 = Math.floor(Math.random() * 999);
    var arr = [num1, num2, num3, num4, num5];
    let MAX = Math.max.apply(Math, arr);
    let MIN = Math.min.apply(Math, arr);
    console.log("Minimum: "+MIN+" Maximum: "+MAX);
}

//2.
{
    var startDate = "03/20/2020";
    var endDate = "06/20/2020";
    var dateCheck = "07/02/2020";

    var d1 = startDate.split("/");
    var d2 = endDate.split("/");
    var c = dateCheck.split("/");

            var fromDate = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); 
            var toDate = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]); 
            var check = new Date(c[2], parseInt(c[1]) - 1, c[0]); 

    if(check>fromDate && check<toDate){
        console.log("Date lies in between.");
    }
    else{
        console.log("Dates doesnt lie in between");
    }
}

//3.
{
    let year = 2015;
    let check = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    console.log("Is "+year+" a leap year: "+check);
}

//4.
{
    let toss = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
    console.log("It is "+toss);
}

//5.
{
    let number = Math.floor(Math.random() * 10);
    if(number == 1){
        console.log("One");
    }else if(number == 2){
        console.log("Two");
    }else if(number == 3){
        console.log("Three");
    }else if(number == 4){
        console.log("Four");
    }else if(number == 5){
        console.log("Five");
    }else if(number == 6){
        console.log("Six");
    }else if(number == 7){
        console.log("Seven");
    }else if(number == 8){
        console.log("Eight");
    }else if(number == 9){
        console.log("Nine");
    }else {
        console.log("Invalid number");
    }
}

//6.
{
    let min = 0;
    let max = 7;
    var dayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(dayNumber == 0){
        console.log("It is Sunday");
    }else if(dayNumber == 1){
        console.log("It is Monday");
    }else if(dayNumber == 2){
        console.log("It is Tuesday");
    }else if(dayNumber == 3){
        console.log("It is Wednesday");
    }else if(dayNumber == 4){
        console.log("It is Friday");
    }else if(dayNumber == 5){
        console.log("It is Saturday");
    }else{
        console.log("Invalid");
    }
}

//7.
{
    let num = Math.floor(Math.random() * 9999);
    if(num < 10){
        console.log("Unit");
    }else if(num >=10 && num < 100){
        console.log("tens");
    }else if(num>=100 && num <1000){
        console.log("hundred");
    }else{
        console.log("thousand");
    }
}

//8.
{
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);
    let operation1 = a + b * c;
    let operation2 = a % b + c;
    let operation3 = c + a / b;
    let operation4 = a * b + c; 
    var arr = [operation1, operation2, operation3, operation4];
    let MAX = Math.max.apply(Math, arr);
    let MIN = Math.min.apply(Math, arr);
    console.log("Minimum: "+MIN+" Maximum: "+MAX);
}