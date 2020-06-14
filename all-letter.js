
               
               
function chap_1_to_11(){
    chap 1
      alert("Hello World","hello");
    
      document.write("Error! Please Enter a valid password<br>");
      document.write("Welcome to JS Land... <br>Happy Coding!");
      alert("Welcome to JS Land.");
      window.alert("Happy Coding!");
                  chap 2
      var username;
      var myname="Mian Muhammad Jawad";
    
      var message="Hello World";
      alert(message);
    
      var name="Jawad";
      var age="24";
      var job="Database Administrator";
    
      alert(name);
      alert(age);
      alert(job);
      var temp="PIZZA";
      for(var j=4;j>=0;j--){
      for(var i=0;i<=j;i++)
      {
                document.write(temp[i]);
      }
            document.write("<br>");
      }
    
      var email="aveed59@gmail.com";
      alert("My email address is "+email);
    
      var book="A smarter way to learn JavaScript";
      alert("I am trying to lean from the book "+book);
    
      document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");
    
      var temp2="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";
      alert(temp2);
    
      chapter 3
    
                         task 1
    
           
      var age="24";
      alert(age)
                         task 2
    
      var counter=9;
      alert("You have visited this site" +counter+"times");
    
    
                        task 3
    
      var birth=1999;
      document.write("My birth year is "+birth);
      document.write("Data Type of my decleared variable is number");
    
                        task 4
    
      var visit=prompt("Enter your Name");
      var prdt=prompt("Enter product title");
      var qnty=prompt("Enter many produc you want to order");
      document.write(visit+" ordered "+qnty+" "+prdt+" on XYZ Clothing store");
    
                        chapter 4
                   task 1
    
      var temp1,temp2,temp3;
                   task 2
    
      var true,false,Boolean,String,function;
      var temp1,temp2,temp3,temp4,temp5;
    
                   task 3
    
      document.write("<h1>Rules for naming JS variables</h1>");
      document.write("Variables name can only contain numbers,$ and _. For example: temp_$1");
      document.write("Variables must begin with a $,string and _. For examples: $name,$name and _name");
      document.write("Variable names are case sensitive");
      document.write("Variable names should not be JS Keyword");
    
                   Chapter 5
                   Task 1
      var num1=5;
      var num2=5;
      var sum=num1+num2;
      document.write("Sum of "+num1+" and " +num2+" is "+sum);
    
                     Task 2
      var sub=num1-num2;
      document.write("Subtraction of "+num1+" and " +num2+" is "+sub);
    
                     Task 2
      var divisn=num1/num2;
      document.write("Sum of "+num1+" and " +num2+" is "+divsn);
    
                     Task 2
      var moduls=num1%num2;
      document.write("Sum of "+num1+" and " +num2+" is "+moduls);
    
                       Task 3 a
      var nmbr;
      document.writeln("Value after variable declaration is:"+nmbr+"<br>");
    
      nmbr=5;
      document.writeln("Initial Value :"+nmbr+"<br>");
    
      nmbr+=1;
      document.writeln("Value after increment is:"+nmbr+"<br>");
    
      nmbr+=7;
      document.writeln("Value after addition is:"+nmbr+"<br>");
      nmbr--;
      document.writeln("Value after decrement is:"+nmbr+"<br>");
    
      nmbr=nmbr%3;
      document.writeln("The reminder  is:"+nmbr+"<br>");
    
                   Task 4
      var movie_price=600;
      var ticketQuantity=5;
      var total=movie_price*ticketQuantity;
      document.writeln("Total Cost of buying"+ticketQuantity+" ticket is "+total);
    
                   Task 5
      var number=prompt("Enter a Number");
      document.writeln("Table of "+number+"<br><br>");
      var temp=number;
      for(var i=0;i<=10;i++){
          document.writeln(temp+" X "+i+" = "+number*i+"<br>");
      }
    
    
                   Task 6
      var Celsius=25;
      var fahrnheit=(Celsius*9/5)+32;
      document.writeln(Celsius+" C is"+fahrnheit+" F <br>");
    
      var fahrnheit=70;
      var Celsius=(fahrnheit-32)*5/9;
      document.writeln(fahrnheit+" F is"+Celsius+" C");
    
                   Task 7
      var prdt1=650;
      var quantity=3;
      var prdt2=100;
      var quantity2=7;
    
      var tempp=prdt1*quantity;
      var tempp2=prdt2*quantity2;
      var ttl=tempp+tempp2+100;
      document.writeln("<h1>Shopping Cart</h1>");
      document.writeln("Price of item 1 is "+prdt1+"<br>");
      document.writeln("Quantity of item 1 is "+quantity+"<br>");
      document.writeln("Price of item 2 is "+prdt2+"<br>");
      document.writeln("quantity of item 2 is "+quantity2+"<br>");
      document.writeln("Shipping Charges 100"+"<br>");
      document.writeln("Total Cost of your order is "+ttl)+"<br>";
    
                      Task 8
      var ttl_marks=980;
      var marks_obtn=804;
      var percentage=(marks_obtn/ttl_marks)*100;
      document.writeln("Total Marks: "+ttl_marks+"<br>");
      document.writeln("Marks Obtained: "+marks_obtn+"<br>");
      document.writeln("Percentage: "+percentage+"%<br>");
    
                       Task 9
      var dollar=10;
      var riyal=25;
      var total=(dollar*104.80)+(riyal*28);
      document.writeln("Total Currency in PKR:"+total);
    
                       Task 10
      var number=5;
      number=(number+5*10)/2;
      document.writeln("Total is "+number);
    
                       Task 11
      var crnt_year=2020;
      var brth_year=1996;
      var age=crnt_year-brth_year;
      document.writeln("Current Year: "+crnt_year+"<br>");
      document.writeln("Birth Year: "+brth_year+"<br>");
      document.writeln("Your Age is:"+age);
    
                       Task 12
      var radius=20;
      document.writeln("The Radius of Circle is: "+radius +"<br>");
      document.writeln("The circumference is:"+2*3.147*radius+"<br>");
      document.writeln("The Area is: "+ 3.147*radius*radius+"<br>");
    
                       Task 13
      var chips="Chocolate Chip";
      var age=15;
      var max_age=65;
      var snacksPerDay=3;
    
      var temp=max_age-age;
      var temp2=temp*365;
      var total_snacks=temp2*snacksPerDay;
    
      document.writeln("Favourite Snack:"+ chips+"<br>");
      document.writeln("Current Age:"+age+"<br>");
      document.writeln("Estimated Maximum Age"+max_age+"<br>");
      document.writeln("Amount of Snacks per day "+snacksPerDay+"<br>");
      document.writeln("you will need "+total_snacks+" "+chips+" to last you until the ripe old age of "+max_age+"<br>");
    
                       Chapter 6-9
                       Task 1
    
      var a=10;
      document.write("Result<br>");
      ++a;
      document.write("The value of ++a is: "+a+"<br>");
      document.write("Now the value of a is: "+a+"<br>");
    
      document.write("The value of a++ is "+a++ +"<br>") ;
      document.write("Now the value of a is: "+a+"<br>");
    
      document.write("The value of --a "+ --a+"<br>");
      document.write("Now the value of a is: "+a+"<br>");
    
      document.write("The value of a-- is "+a-- +"<br>") ;
      document.write("Now the value of a is: "+a+"<br>");
    
                          Task 2
      var a=2,b=1;
      var result=--a - --b + ++b + b--;
      document.write("a is "+a+"<br>");
      document.write("b is "+b+"<br>");
      document.write("--b"+"<br>");
      document.write("--b + ++b"+"<br>");
      document.write("--b + ++b + b--"+"<br>");
      document.write("--a - --b + ++b + b--"+"<br>");
      document.write("Result is: "+result);
    
                           Task 3
    
      var name=prompt("Enter you name");
      document.write("Hello "+name+" have a good day");
    
                           Task 5
      var number = prompt("Enter a Number");
      if (number != " ") {
          document.writeln("Table of " + number + "<br><br>");
          var temp = number;
          for (var i = 0; i <= 10; i++) {
              document.writeln(temp + " X " + i + " = " + number * i + "<br>");
          }
      }
      else{
          document.writeln("Table of " + 5 + "<br><br>");
          var temp = number;
          for (var i = 0; i <= 10; i++) {
              document.writeln("5 X " + i + " = " + 5 * i + "<br>");
          }
      }
    
                       Task 6
    
      var subj=prompt("Enter subject 1 name");
      var subj2=prompt("Enter subject 2 name");
      var subj3=prompt("Enter subject 3 name");
      var total=100;
    
      var obtain=prompt("Enter obtain marks in subject "+subj);
      var obtain2=prompt("Enter obtain marks in subject "+subj2);
      var obtain3=prompt("Enter obtain marks in subject "+subj3);
    
      document.write("Subject Total marks Obtained Marks Percentage"+"<br>");
      document.write(subj+" \xa0\xa0\xa0\xa0\xa0\xa0   100 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+ obtain+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (obtain/100)*100+"%<br>" );
      document.write(subj2+" \xa0\xa0\xa0\xa0   100 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+ obtain2+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (obtain/100)*100+"%<br>" );
      document.write(subj3+" \xa0\xa0\xa0   100 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+ obtain3+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (obtain/100)*100+"%<br>" );
    
    
                       Chapter 9-11
                       Task 1
      var city=prompt("Enter a city name");
      if(city=="karachi"){
      document.write("Welcome to the city of lights");
      }
      else{
          document.write("Welcome to "+city);
      }
                       Task 2
      var gndr=prompt("enter you Gender");
      if(gndr=="male"){
      document.write(" Good Morning Sir");
      }
      else if(gndr=="female")
      {
          document.write(" Good Morning Ma'am");
      }
                       Task 3
      var signal=prompt("Enter signal color");
      if(signal=="red")
      {
      document.write("Must Stop");
      }
      else if(signal=="green"){
          document.write("Ready to Move");
      }
      else{
          document.write("Move Now");
      }
    
                       Task 4
      var fuel=prompt("Enter remaining Fuel");
      if(fuel<0.25){
          document.write("Please refill the fuel in your car");
      }
      else{
          document.write("you are good to go");
      }
    
                       Task 5
      var a = 4;
      if (++a === 5) {
          alert("given condition for variable a is true");
      }
    
      var b = 82;
      if (b++ === 83) {
          alert("given condition for variable b is true");
      }
      var c = 12;
      if (c++ === 13) {
          alert("condition 1 is true");
      }
      if (c === 13) {
          alert("condition 2 is true");
      }
      if (++c < 14) {
          alert("condition 3 is true");
      }
      if (c === 14) {
          alert("condition 4 is true");
      }
      var materialCost = 20000;
      var laborCost = 2000;
      var totalCost = materialCost + laborCost;
      if (totalCost === laborCost + materialCost) 
      {
          alert("The cost equals");
      }
    
      if (true){ 
          alert("True"); 
      } 
      if (false){ 
          alert("False"); 
      }
    
      if("car" < "cat"){ 
          alert("car is smaller than cat");
       }
    
                   Task 6
      var obtain=parseInt(prompt("Enter obtain marks in subject 1"));
      var obtain2=parseInt(prompt("Enter obtain marks in subject 2"));
      var obtain3=parseInt(prompt("Enter obtain marks in subject 3"));
      var total=obtain+obtain2+obtain3;
      var prcntgae=(total/300)*100;
      var grade=" ";
      var remarks="";
      if(prcntgae>=80)
      {
      grade="A";
      remarks="Excellent";
      }
      else if(prcntgae>=70 && prcntgae<80)
      {
          grade="B";
          remarks="Good";
        
      }
      else if(prcntgae>=60 && prcntgae<70){
          grade="C";
          remarks="Need Improvement";
        
      }
      else{
          grade="Fail";
          remarks="Sorry";
      }
      document.write("<h1>MarkSheet</h1>");
      document.write("Total Marks: 300"+"<br>");
      document.write("Marks Obtain: "+total+"<br>");
      document.write("Percentage:"+prcntgae+"%<br>");
      document.write("Grade: "+grade+"<br>");
      document.write("Remarks: "+remarks+"<br>");
    
    
    
    }


function check(inputtxt) {
    var capital = /^[A-Z]+$/;
    var small = /^[a-z]+$/;
    var number = /^[0-9]+$/;
    if (inputtxt.value.match(capital)) {
        alert('you enetred capital letter');
        return true;
    }
    else if (inputtxt.value.match(small)) {
        alert('you entered small letter');
        return true;
    }
    else if (inputtxt.value.match(number)) {
        alert('you entered number');
        return true;
    }
    else {
        alert('you did not enter valid input');
        return false;
    }
}

function twointegers(inputtxt) {
    var num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");

    if (parseInt(num1, 10) > parseInt(num2, 10)) {
        alert("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    }

    else if (parseInt(num2, 10) > parseInt(num1, 10)) {
        alert("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
        alert("The values " + num1 + " and " + num2 + " are equal.");
    }
}

function check_number() {
    var num = window.prompt("input the number")
    if (num > 0) {
        alert(" Positive Number");
    }
    if (num < 0) {
        alert(" Negative Number");
    }
    if (num = '0') {
        alert("input is zero");
    }

}


function isVowel() {

    var argument = window.prompt("input any alphabet")
    argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
            alert("char " + argument + " is not a vowel");

        }

        else if (argument = vowels[i]) {
            alert("char " + argument + " is a vowel");
            break;

        }


    }

}

function password() {

    var cpass = "a"
    var my = ""
    var upass = window.prompt("enter a password")

    if (upass == my) {
        alert("enter a password")
    }
    else if (cpass == upass) {
        alert("Correct! The password you entered matches the original password");
    }
    else if (cpass != upass) {
        alert("incorrect password");
    }

}

// TASK 6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


function hours() {
    var input = window.prompt("enter hour in 24 hour system like 1900")

    if (input >= 0000 && input < 1200) {
        alert("god morning");
    }
    else if (input >= 1200 && input < 1700) {
        alert("good afternoon");
    }
    else if (input >= 1700 && input < 2100) {
        alert("good evening");
    }
    else if (input >= 2100 && input < 2359) {
        alert("good night");
    }
}


function quali() {
    var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
    alert(qualification);
}

function marks() {
    var sname = ['a', 'b', 'c']
    var score = [10, 8, 7]
    alert("score of " + sname[0] + " is " + score[0] + " .");
    alert("score of " + sname[1] + " is " + score[1] + " .");
    alert("score of " + sname[2] + " is " + score[2] + " .");
}

function arraymethods() {
    var arr1 = ["yellow", "white", "blue"]
    alert(arr1)
    var endcolor = window.prompt("color u want to enter at the end of array")
    arr1.push(endcolor)
    alert(arr1)
    var scolor = window.prompt("color u want to enter at the beginning of array")
    arr1[0] = (scolor);
    //arr1[0]="voilet";
    //arr1[1]="green";
    arr1.push("voilet,green")
    alert(arr1)
    arr1.pop()
    arr1.shift()
    alert(arr1)
    delete arr1[2]

}

function rever() {

    var arr = [34, 234, 567, 4];
    print(arr);
    var new_arr = arr.reverse();
    print(new_arr);
}

function simple() {
    let fruits = ["Apple", "Orange", "Plum"];

    alert(fruits[0]);
    alert(fruits[1]);
    alert(fruits[2]);
}

function join() {
    var elements = ['Fire', 'Air', 'Water'];
    alert(elements.join(''));


}

function printTable() {
    var num;
    num = window.prompt("insert a no for your table")
    var len = window.prompt("lenght")
    for (var i = 1; i <= len; i++) {

        console.log += (num * i) + "<br/>"
    }
}


function loop() {
    var a = ["apple", "banana", "mango"]

    for (var i in a) {
        console.log("row " + i);

    }
}


function largest(arr) {
    var aarr = [2, 4, 5, 89, 4, 32]
    alert(Math.max(aarr))

}


//Task 1 2 3 4 5 6 
function task123456(){

var myarray1 = []
var myarray2 = {}
var arr1 = ['i', 'me', 'u']
var arr2 = [1, 2, 3, 4]
var arr3 = [true, false]
var mixed = [1, 2, 3, "string"]

}


//chap 17-20

//TASK 1,2,3
function task123(){

var my = [[], []]

var temps = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var input = 1; input <= 10; input++) {
    alert(input);
}

}

