document.write("*<b>Q:1 Write a program to check whether the given input number is divisible by 3 or else show a message “Number is not divisible by 3”.</b>"+"<br>");

var number= prompt("Enter the number:");
if(number/3){
    document.write("This number is divisible by 3 and the answer is:"+" "+ number/3+"<br>");
}
else{
    document.write("This number is not divisible by 3"+"<br>"+"<br>"+"<br>");
}
document.write("*<b> Q:2 Write a program that checks whether the given input is an even number or an odd number.</b>"+"<br>");
var number= prompt("Enter the number:");
if((number % 2) == 0){
    document.write("This number is EVEN Number"+"<br>"+"<br>"+"<br>");
    }
else
{
    document.write("This number is ODD Number"+"<br>"+"<br>"+"<br>");
}
document.write("* <b> Q:3 Write an if/else statement with the following condition: If the variable age is greater than 18, output Old enough, otherwise output Too young.</b>"+"<br>");
var age= prompt("Enter the age:");
if(age>18){
    document.write("Old Enough"+"<br>"+"<br>"+"<br>");
}
else{
    document.write("Too Young"+"<br>"+"<br>"+"<br>");
}
document.write("* <b> Q:4 Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output. <b>"+"<br>");
var n="Naz";
var name=prompt("Enter your name:");
if(name==n){
    document.write("Welcome To Our Land...."+"<br>"+"<br>"+"<br>");
}
else(
    document.write("Something Wrong!!!"+"<br>"+"<br>"+"<br>")
)
document.write("*<b> Q:5  Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message Number is not divisible by 3 or Number is divisible by 3.</b>"+"<br>");
var num = prompt("Please enter a number");
        switch(num%3)
        {
            case 0 : alert("Number is divisible by 3");
            document.write("Number is divisible by 3"+"<br>"+"<br>"+"<br>")
            break;
            case 1 : alert("Number is not divisible by 3");
            document.write("Number is not divisible by 3"+"<br>"+"<br>"+"<br>")
            break;
        }
        // document.write("* Q:6 Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.</b>"+"<br>");
        // var str1 = prompt("Enter any number or string");
    
        // if(String.fromCharCode(str1>=65 && str1<=90)||String.fromCharCode(str1>=97 && str1<=122))
        // {
        //     document.write("You have entered an Uppercase Alphabet."+"<br>");
        // }
        // else if(String.fromCharCode(str1<=65 && str1>=90)||String.fromCharCode(str1<=97 && str1>=122))
        // {
        //     document.write("You have entered a lowercase Alphabet. "+"<br>");
        // }
        // else
        // {
        //     document.write("You have entered a number."+"<br>");
        // }
          
document.write("<b>* Q:7 Write a program to create a calculator for +, -, *, /, % using switch case statements.</b>"+"<br>");
var number11 = prompt("Enter first number:");
var number1 = parseInt(number11);
var number12 = prompt("Enter second number:");
var number2 = parseInt(number12);
var operator = prompt("Enter an operator to perform operation on the given  numbers : + , - , * , /");
switch(operator)
{
    case '+': 
    alert(number1+number2);
    document.write(number1+number2+"<br>"+"<br>"+"<br>");
    break;
    case '-':
        if(number1 > number2)
        {
            alert(number1-number2);
            document.write(number1-number2+"<br>"+"<br>"+"<br>");
        }
        else
        {
            alert(number2-number1);
            document.write(number1-number2+"<br>"+"<br>"+"<br>");
        }
        break;
    case '*': 
    alert(number1*number2);
    document.write(number1*number2+"<br>"+"<br>"+"<br>");
    break;
    case '/' : if(number1>number2)
        {
            alert(number1/number2); 
            document.write(number1/number2+"<br>"+"<br>"+"<br>");        
        }
        else
        {
            alert(number2/number1);
            document.write(number1/number2+"<br>"+"<br>"+"<br>");
        }
        break;
    case '%': 
    alert(number1%number2);
    document.write(number1%number2+"<br>"+"<br>"+"<br>");
    break;
}
             
document.write("<b>*Q:8  Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.</b>"+"</br>");
var time=1900;
 var input=prompt("Enter a time:");
if(time>=0000 && time<1200){
    document.write("Good Morning"+"<br>"+"<br>"+"<br>");
}
else if(time>=122 && time<1700){
    document.write("Good afternoon"+"<br>"+"<br>"+"<br>");
}
else if(time>=1700 && time<2100){
    document.write("Good Evening"+"<br>"+"<br>"+"<br>");
}
else if (time>=2100 && time<=2359){
    document.write("Good Night"+"<br>"+"<br>"+"<br>");
}
document.write("<b>* Q:10 Write a program that:</b>"+"<br>");
var password1="JavaScript";
var password=prompt("Enter Your Password:");
if (password == '') {
    document.write("Please enter password"+"<br>"+"<br>"+"<br>");
}
else if(password1===password){
    document.write("Correct! The password you entered matches the original password."+"<br>"+"<br>"+"<br>");
}
else{
    document.write("Incorrect password"+"<br>"+"<br>"+"<br>");

}
document.write("<b> * Q:11 Write a program that adds an else statement to the following script to display You are not Fahad </b>"+"<br>");
var firstName = "Ali";
 if (firstName === "Fahad") {        
    document.write("Hello Fahad!"+"<br>"+"<br>"+"<br>"); 
} 
else
{
    document.write("You are not Fahad"+"<br>"+"<br>"+"<br>");
}
document.write("<b>* Q: 12 This if/else statement does not work. Try to fix it: </b>"+"<br>"+"<br>"+"<br>");
// var greeting;
var hour = 13;
    if (hour<18) {            
        document.write("Good day"+"<br>"+"<br>"+"<br>") 
    }       
    else
    {           
        document.write("Good evening"+"<br>"+"<br>"+"<br>");         
    }
document.write("<b> * Q:13  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal<b>"+"<br>");
var num1=10;
 num2=12;
 num3=1;
 num4=1;

		if(num1>num2 && num1>num3)
		{
			document.write(num1+"-is greatest"+"<br>"+"<br>"+"<br>");
		}
		else if(num2>num1 && num2>num3)
		{
			document.write(num2+" is greatst"+"<br>"+"<br>"+"<br>");
		}
		else if(num3>num1 && num3>num1)
		{
			document.write(num3+" is greatest"+"<br>"+"<br>"+"<br>");
        }
        if(num3==num4 && num4==num3)
        {
            document.write(num4+" and "+ " "+num3+"is equal"+" " +"<br>"+"<br>"+"<br>");
        }
        document.write("<b>* Q:14 Write a program that takes input a number from user & state whether the number is positive, negative or zero.</b>"+"<br>");
        var check_number;
            var check_number=prompt("Enter any number");
            if (check_number >=0 ) {
                document.write(check_number + "is a Positive Number."+"<br>"+"<br>"+"<br>");
                 }
            else if (!check_number>=0){
                document.write(check_number +" "+ "is a Negative Number."+"<br>"+"<br>"+"<br>");
                 }
            else if(check_number==0)
            {
                document.write(check_number+" "+ "is zero."+"<br>"+"<br>"+"<br>");
            }
    
        document.write("<b>* Q:16 Write a program that stores value in a variable & tell whether the type of that variable is a number, string, boolean or undefined.</b> "+"<br>");
        var none=prompt("Enter anything:");
        // var string;
        // var number;
        // var boolean;
        function doSomething(none){
        if(typeof(output)===string)
        {    
            console.log("This is string"+"<br>");
            document.write("This is string"+"<br>"+"<br>"+"<br>");
        }
        else if(typeof(none)==='number')
        {
            console.log("This is a numebr"+"<br>");
            document.write("This is a numebr"+"<br>"+"<br>"+"<br>");

        }
    }
        if(typeof(none)=='boolean'){
            console.log("This is boolean"+"<br>");
            document.write("This is boolean"+"<br>"+"<br>"+"<br>");
        }
        else{
            console.log("Undefined"+"<br>");
            document.write("Undefined"+"<br>"+"<br>"+"<br>");
        }
        document.write("* Q:17 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise. </b>"+"<br>");
        var none = prompt("Enter an alphabet.");
        if(none.length == 1 && none =='a' || none == 'e' || none =='i' || none == 'o' || none == 'u')
        {
            alert("This alphabeet is vowel."+"<br>");
            document.write("This alphabeet is vowel."+"<br>"+"<br>"+"<br>");
        }
        else
        {
            alert("This alphabet is not vowel."+"<br>");
            document.write("This alphabeet is not vowel."+"<br>"+"<br>"+"<br>");
        }
        document.write("<b>* Q:18 Choose the correct comparison operator to display true, when: 10 is NOT equal to 8.<b>"+"<br>");
        var num1=10;
        var num2=8;
        if(num1!=num2){
            document.write(num1 +"is not equal to"+ " "+num2+"<br>"+"<br>"+"<br>");
        }
        else{
            document.write("Both are equal"+"<br>");
        }
document.write("<b>*Q:19 Use a switch statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8:</b>"+"<br>");
var month=prompt("Enter a number of Month:");
if(month==1){
    alert("January");
    document.write("January"+"<br>"+"<br>"+"<br>");
}
else if(month==2){
    alert("February");
    document.write("February"+"<br>"+"<br>"+"<br>");
}
else if(month==3){
    alert("March");
    document.write("March"+"<br>"+"<br>"+"<br>");
}
else if(month==4){
    alert("April");
    document.write("April"+"<br>"+"<br>"+"<br>");
}
else if(month==5){
    alert("May");
    document.write("May"+"<br>"+"<br>"+"<br>");
}
else if(month==6){
    alert("June");
    document.write("June"+"<br>"+"<br>"+"<br>");
}
else if(month==7){
    alert("July");
    document.write("July"+"<br>"+"<br>"+"<br>");
}
else if(month==8){
    alert("August");
    document.write("August"+"<br>"+"<br>"+"<br>");
}
else if(month==9){
    alert("September");
    document.write("September"+"<br>"+"<br>"+"<br>");
}
else if(month==10){
    alert("October");
    document.write("October"+"<br>"+"<br>"+"<br>");
}
else if(month==11){
    alert("November");
    document.write("November"+"<br>"+"<br>"+"<br>");
}
else if(month==12){
    alert("December");
    document.write("December"+"<br>"+"<br>"+"<br>");
}
else{
    alert("Invalid Month");
    document.write("Invalid Month"+"<br>"+"<br>"+"<br>");
}

// 6,9,16
document.write("<b>* Q:21 Use a conditional (ternary) operator for this exercise: If the variable age is a value below 18, the value of the variable voteable should be Too young, otherwise the value of voteable should be Old enough.</b>"+"<br>");
var age = prompt("Enter your Age:");
var age1 = age > 18 ? 'Old Enough' : 'Too Young';
document.write(age1);
alert(age1);