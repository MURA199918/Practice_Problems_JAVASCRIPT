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

//1. Case
{
    let number = Math.floor(Math.random() * 10);
    switch(number)
    {
         case 0:
              console.log("ZERO");
              break;
         case 1:
              console.log("ONE");
              break;
         case 2:
              console.log("TWO");
              break;
         case 3:
              console.log("THREE");
              break;
         case 4:
              console.log("FOUR");
              break;
         case 5:
              console.log("FIVE");
              break;
         case 6:
              console.log("SIX");
              break;
         case 7:
              console.log("SEVEN");
              break;
         case 8:
              console.log("EIGHT");
              break;
         case 9:
              console.log("NINE");
              break;
         default:
              console.log("Not a Single Digit Number");
    }
}

//2. Case
{
    let min = 0;
    let max = 7;
    var dayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(dayNumber)
    {
         case 0:
              console.log("Sunday");
              break;
         case 1:
              console.log("Monday");
              break;
         case 2:
              console.log("Tuesday");
              break;
         case 3:
              console.log("Wednesday");
              break;
         case 4:
              console.log("Thursday");
              break;
         case 5:
              console.log("Friday");
              break;
         case 6:
              console.log("Saturday");
              break;
         default:
            console.log("Invalid day number");
    }
}

//3. Case
{
    let num = Math.floor(Math.random() * 9999);
    let variable = null;
    if(num < 10){
        variable = 0;
    }else if(num >=10 && num < 100){
        variable = 1;
    }else if(num >=100 && num < 1000){
        variable = 2;
    }else{
        variable = 3;
    }
    switch(variable)
    {
         case 0:
              console.log("unit");
              break;
         case 1:
              console.log("tens");
              break;
         case 2:
              console.log("hundreds");
              break;
         case 3:
              console.log("thousands");
              break;
         default:
             console.log("Invalid input");
    }
}

//4. Case
{
    const FEET_TO_INCH = 1;
    const INCH_TO_FEET = 2;
    const FEET_TO_METER = 3;
    const METER_TO_FEET = 4;
    let min = 1;
    let max = 5;
    var userInput = Math.floor(Math.random() * (max - min + 1)) + min;
    let userValue = Math.floor(Math.random() * 10);
    switch(userInput)
    {
         case 1:
              console.log("Feet to inch value is: "+userValue*12);
              break;
         case 1:
              console.log("Inch to  Feet value is: "+userValue*0.0833);
              break;
         case 2:
              console.log("Feet to meter value is: "+userValue/3.2808);
              break;
         case 3:
              console.log("Meter to feet value is: "+userValue*3.2808);
              break;
         default:
             console.log("Invalid input");
    }
}

//1. FOR
{
    let n = Math.floor(Math.random() * 10);

    let powerOfTwo = 1;      

   
    for(let i=0; i<=n; i++){
        console.log(i + " " + powerOfTwo);  
        powerOfTwo = 2 * powerOfTwo;                
    }
}

//2. FOR
{
    let harmonic = 1; 
    let n = Math.floor(Math.random() * 10);

    for (let i = 2; i <= n; i++) { 
        harmonic += (1 / i); 
    } 
    console.log("Harmonic number "+harmonic);
}

//3. FOR
{
    var i, flag = true; 
    let n = Math.floor(Math.random() * 100);
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
          
    if (flag == true) 
        console.log(n + " is prime"); 
    else
        console.log(n + " is not prime"); 
}

//4. FOR
{
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);
    let n3 = Math.floor(Math.random() * 100);
    let n4 = Math.floor(Math.random() * 100);
    let arr = [n1, n2, n3, n4];
    var numbers2 = arr.map(myFunction);

    function myFunction(value) {
        var flag = true;
        for(i = 2; i <= value - 1; i++){ 
           if (value % i == 0) { 
                flag = false;
                break; 
           } 
        }
               
        if (flag == true) 
             console.log(value + " is prime"); 
        else
             console.log(value + " is not prime"); 
    }
}

//5. FOR
{
    var ans=1; 
    let n= Math.floor(Math.random() * 10);
              
    for (var i = 2; i <= n; i++) {
        ans = ans * i; 
    }
    console.log("Factorial of number n is: "+ans);
}

//6. FOR
{
    let num = Math.floor(Math.random() * 100);
    console.log("Factors of number "+num+" are: ");
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
}

//1. While
{
    let n = Math.floor(Math.random() * 10);

    let powerOfTwo = 1;      
    let i = 0;
   
    while(i<=n){
        console.log(i + " " + powerOfTwo);  
        powerOfTwo = 2 * powerOfTwo;    
        i = i+1;            
    } 
}

//3. WHILE
{
    let headsCount = 0;
    let tailsCount = 0;
    while( (headsCount == 11) || (tailsCount == 11)){
        let toss = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
        if(toss == 'heads'){
            headsCount++;
        }else{
            tailsCount++;
        }
    }
    console.log("count reached");  
}

//4. WHILE
{
    let sum = 100;
    let toss = (Math.floor(Math.random() * 2) == 0) ? 'win' : 'loss';
    while(sum<=0 || sum>=200){
        if(toss == 'win'){
            sum = sum+5;
        }
        else{
            sum = sum-5;
        }
    }
    if(sum<=0){
        console.log("Lost");
    }else{
        console.log("Won");
    }
}

//2. FUNCTION
{
    function isPalindrome(n) {    
      let divisor = 1; 
      while (n / divisor >= 10) 
         divisor *= 10; 
  
      while (n != 0) { 
        let leading = n / divisor;  
        let trailing = n % 10; 
  
        if (leading != trailing)   
            return false; 
  
        n = (n % divisor) / 10; 
  
        divisor = divisor / 100; 
      } 
     return true; 
    } 
    let n = Math.floor(Math.random() * 1000000);
    let check = isPalindrome(n);
    if(check == 'true'){
        console.log(n+" is a palindrome");
    }else{
        console.log(n+" is not a palindrome");
    }
}

//3. FUNCTION
{
    let n = Math.floor(Math.random() * 1000000);
    let reverse = 0;
    function palindrome(n){
        while(n!=0){
            let remainder = n%10;
            reverse = reverse*10 + remainder;
            n = n/10;
        }
	    return reverse;
    }

    function prime(n){
        let flag = true;
        for(let i=2; i<=n-1; i++){
            if (n % i == 0) { 
                flag = false;
                break; 
           } 
        }
        if (flag == true) 
        console.log(n + " is prime"); 
        else
        console.log(n + " is not prime"); 
    }
    console.log(prime(n));
    var number = palindrome(n);
    console.log(prime(number));
}