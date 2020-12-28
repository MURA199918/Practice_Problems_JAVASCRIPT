console.log("welcome to practice problems of javascript!!!");
let id = Math.floor(Math.random() * 10);
console.log("id: "+id);

//1. MINIMUM AND MAXIMUM
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

//2. DATE CALCULATION
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

//3. LEAP YEAR
{
    let year = 2015;
    let check = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    console.log("Is "+year+" a leap year: "+check);
}

//4. TOSS
{
    let toss = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
    console.log("It is "+toss);
}

//5. NUMBER IN WORDS
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

//6. DAY IN WEEK
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

//7. UNITS AND HUNDREDS
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

//8. MIN AND MAX
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

//1. Case IN NUMBER
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

//2. Case IN WEEKDAY
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

//3. Case IN UNITS AND HUNDREDS
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

//4. Case IN FEET INCH CALCULATION
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

//1. FOR IN 2 POWER N
{
    let n = Math.floor(Math.random() * 10);

    let powerOfTwo = 1;      

   
    for(let i=0; i<=n; i++){
        console.log(i + " " + powerOfTwo);  
        powerOfTwo = 2 * powerOfTwo;                
    }
}

//2. FOR IN HARMONIC NUMBER
{
    let harmonic = 1; 
    let n = Math.floor(Math.random() * 10);

    for (let i = 2; i <= n; i++) { 
        harmonic += (1 / i); 
    } 
    console.log("Harmonic number "+harmonic);
}

//3. FOR IN PRIME NUMBERS
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

//4. FOR IN PRIME
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

//5. FOR IN FACTORIAL
{
    var ans=1; 
    let n= Math.floor(Math.random() * 10);
              
    for (var i = 2; i <= n; i++) {
        ans = ans * i; 
    }
    console.log("Factorial of number n is: "+ans);
}

//6. FOR IN FACTORS
{
    let num = Math.floor(Math.random() * 100);
    console.log("Factors of number "+num+" are: ");
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
}

//1. While IN 2 POWER N
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

//3. WHILE IN TOSS
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

//4. WHILE IN GAMBLING
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

//2. FUNCTION IN PALINDROME
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

//2. FUNCTION IN TEMPERATURE
{
    const FIND_degF = 1;
    const FIND_degC = 2;
    let min = 1;
    let max = 3;

    function temperatureCheck(){
        let userInput = Math.floor(Math.random() * (max - min + 1)) + min;
        switch(userInput){
            case 1:
                let degC = Math.floor(Math.random() * 100);
                var degF = (degC*(9/5)) + 32;
                console.log("Farenhiet temperature: "+degF);
                break;
            case 2:
                let maximum = 212;
                let minimum = 32;
                let deg1F = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                var deg1C = (degF-32)*(5/9);
                console.log("Celcius temperature: "+deg1C);
                break;
            default:
                console.log("Invalid input");
        }
    }
    console.log(temperatureCheck())
}

//3. FUNCTION IN 2 FUNCTIONS
/*{
    let n = Math.floor(Math.random() * 1000);
    let num1 = n;
    let num2 = n;
    function palindrome(num1){
        var remainder;
        var reverse = 0;
        while(num1!=0){
            remainder = num1%10;
            reverse = reverse*10 + remainder;
            num1 = num1/10;
        }
	    return reverse;
    }

    function prime(num2){
        let flag = true;
        for(let i=2; i<=num2-1; i++){
            if (num2 % i == 0) { 
                flag = false;
                break; 
           } 
        }
        if (flag == true) 
        console.log(num2 + " is prime"); 
        else
        console.log(num2 + " is not prime"); 
    }

    console.log(prime(n));
    let number = palindrome(n);
    console.log(prime(number));
}*/

//1. ARRAYS Find second Minimum and Maximum
{
    var arr = new Array();
    for(let i=0; i<10; i++){
        arr[i] = Math.floor(Math.random() * 999);
    }
    var newArray = arr;
    var max = Math.max.apply(null, newArray);
    newArray.splice(newArray.indexOf(max), 1);
    var secondMax = Math.max.apply(null, newArray);
    console.log("2nd Maximum: "+secondMax);

    var min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    var secondMin = Math.min.apply(null, arr);
    console.log("2nd Minimum: "+secondMin);
}

//2. ARRAYS Find second max and min by sorting
{
    var arr = new Array();
    for(let i=0; i<10; i++){
        arr[i] = Math.floor(Math.random() * 999);
    }
    var sortedArray = arr.sort();
    console.log("2nd Maximum: "+sortedArray[8]);
    console.log("2nd Minimum: "+sortedArray[1]);
}

//3. ARRAYS find factors and store in array
{
    let num = Math.floor(Math.random() * 100);
    let arr = new Array();
    let index = 0;
    console.log("Factors of number "+num+" are: ");
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            arr[index] = i;
            index++; 
        }
    }
    console.log(arr);
}

//4. ARRAYS Find zero sum
{
    var arr = new Array();
    let max = 10;
    let min = -10;
    for(let i=0; i<10; i++){
        arr[i] = Math.floor(Math.random() * (max-min+1))+min;
    }
    let found = true;
    for (let j=0; j<10-2; j++) 
    { 
        for (let k=j+1; k<10-1; k++) 
        { 
            for (let l=k+1; l<10; l++) 
            { 
                if (arr[j]+arr[k]+arr[l] == 0) 
                { 
                    console.log(arr[j]+" "+arr[k]+" "+arr[l]);
                    console.log("Zero sum found"); 
                    found = true; 
                } 
            } 
        } 
    }
    if(found == 'false'){
        console.log("Zero sum Doesnt exist");
    } 
}

//5. ARRAYS Numbers with repeated digits
{
    var arr = new Array();
    var newArray = new Array();
    let index = 0;
    for(let i=0; i<10; i++){
        arr[i] = Math.floor(Math.random() * 100);
        if(arr[i]%11 == 0){
            newArray[index] = arr[i];
            index++;
        }
    }
    if(newArray.length != 0){
        console.log("Numbers with repeated digits are: "+newArray);
    }
    else{
        console.log("No such numbers");
    }
}

//1. MAPS Roll Dice
{
    let mapDice = new Map();
    for(let i=0; i<6; i++){
        let dice = Math.floor(Math.random() * 6);
        mapDice.set(i+1, dice);
    }
    console.log(mapDice);
}

//2. MAPS Roll dice and count
{
    let mapDice = new Map();
    let diceNumberCount = new Map();
    let count1 =0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let MapValues = new Array();
    for(let i=0; i<30; i++){
        let dice = Math.floor(Math.random() * 6)+1;
        mapDice.set(i+1, dice);
        if(dice==1){
            count1++;
            diceNumberCount.set(dice, count1);
        }else if(dice==2){
            count2++;
            diceNumberCount.set(dice, count2);
        }else if(dice==3){
            count3++;
            diceNumberCount.set(dice, count3);
        }else if(dice==4){
            count4++;
            diceNumberCount.set(dice, count4);
        }else if(dice==5){
            count5++;
            diceNumberCount.set(dice, count5);
        }else{
            count6++;
            diceNumberCount.set(dice, count6);
        }
    }
    console.log(diceNumberCount);
    for(let i=1; i<=6; i++){
        MapValues[i] = diceNumberCount.get(i);
    }
    var max = Math.max.apply(null, MapValues);
    var min = Math.min.apply(null, MapValues);
    for(let i=1; i<=6; i++){
        if(max == diceNumberCount.get(i)){
            console.log("Dice roll with maximum count: "+i);
        }
        if(min == diceNumberCount.get(i)){
            console.log("Dice roll with minimum count: "+i);
        }
    }
}

//2. MAPS Birthday count
{
    let birthCountMap = new Map();
    let sameBirthDay = new Map();
    let JanCount = 0;
    let FebCount = 0;
    let MarchCount = 0;
    let AprilCount = 0;
    let MayCount = 0;
    let JuneCount = 0;
    let JulyCount = 0;
    let AugCount = 0;
    let SpetCount = 0;
    let OctCount = 0;
    let NovCount = 0;
    let DecCount = 0;
    for(let i=1; i<=50; i++){
        let birthMonth = Math.floor(Math.random() * 12)+1;
        birthCountMap.set(i, birthMonth);
    }
    for(let j=1; j<=50; j++){
        if(birthCountMap.get(j) == 1){
            JanCount++;
        }else if(birthCountMap.get(j) == 2){
            FebCount++;
        }else if(birthCountMap.get(j) == 3){
            MarchCount++;
        }else if(birthCountMap.get(j) == 4){
            AprilCount++;
        }else if(birthCountMap.get(j) == 5){
            MayCount++;
        }else if(birthCountMap.get(j) == 6){
            JuneCount++;
        }else if(birthCountMap.get(j) == 7){
            JulyCount++;
        }else if(birthCountMap.get(j) == 8){
            AugCount++;
        }else if(birthCountMap.get(j) == 9){
            SpetCount++;
        }else if(birthCountMap.get(j) == 10){
            OctCount++;
        }else if(birthCountMap.get(j) == 11){
            NovCount++;
        }else{
            DecCount++;
        }
    }
    sameBirthDay.set("Jan", JanCount);
    sameBirthDay.set("Feb", FebCount);
    sameBirthDay.set("March", MarchCount);
    sameBirthDay.set("April", AprilCount);
    sameBirthDay.set("May", MayCount);
    sameBirthDay.set("June", JuneCount);
    sameBirthDay.set("July", JulyCount);
    sameBirthDay.set("August", AugCount);
    sameBirthDay.set("September", SpetCount);
    sameBirthDay.set("Oct", OctCount);
    sameBirthDay.set("Nov", NovCount);
    sameBirthDay.set("Dec", DecCount);

    console.log("Number of People with same birth month: ");
    console.log(sameBirthDay);
}
