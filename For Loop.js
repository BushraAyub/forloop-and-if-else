
       
// for (var count = 1; count <= 5; count++) {
//             document.write("Hello World<br>");
//     }
//         for (var num = 0; num <= 10; num++) {
//             document.write(num + "<br>");
//     }
//         for (var num = 1; num <= 10; num++) {
//             document.write("2 x " + num + " = " + 2 * num + "<br>");
//     }
//         var names = ["Majid", "Ashraf", "Haider", "Ali"]
//         names[2]

//         var cleanestCities = ["Jelly", "Santa Fe", "Tucson", "Honolulu"];
//         document.write("<h4>Cleanest Cities List</h4>");
//             for (var i = 0; i < cleanestCities.length; i++) {
//             document.write(cleanestCities[i] + " at index " + i);
//             document.write("<br>");
//             }
    
//         var num = 0;
//              for (; num <= 10; num++) {
//              document.write(num + "<br>");
//     }


//     //     /** for loop - optional statements **/

//     for (var num = 0; ; num++) {
//         if (num <=  10) {
//         document.write(num + "<br>");
//         }
//             else {
//                 break;
//             }
//   }
//         /** for loop - optional statements **/

//     for (var num = 0; num <= 10;) {
//         document.write(num + "<br>");
//         num++;
    
//         /** Example - without for loop **/
    // var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];
    // var cityToCheck = prompt("Enter city name");
    //     if (cityToCheck === cleanestCities[0]) {
    //         alert("It's one of the cleanest cities");
    //     }
    //     else if (cityToCheck === cleanestCities[1]) {
    //         alert("It's one of the cleanest cities");
    //     }
    //     else if (cityToCheck === cleanestCities[2]) {
    //         alert("It's one of the cleanest cities");
    //     }
    //     else if (cityToCheck === cleanestCities[3]) {
    //         alert("It's one of the cleanest cities");
    //     }
    //     else if (cityToCheck === cleanestCities[3]) {
    //        alert("It's one of the cleanest cities");
    //     }
    
//             /** Example - with for loop **/
        // var cleanestCities = ["Jelly", "Santa Fe", "Great Falls", "Honolulu"];
        // var cityToCheck = prompt("Enter city name");
        //     for (var i = 0; i < cleanestCities.length; i++) {
        //         if (cityToCheck === cleanestCities[i]) {
        //         alert("It's one of the cleanest cities");
        //     }
        // }
//         // /** nested for loops **/
//     var firstNames = ["Ali", "Sami", "Bilal"];
//     var lastNames = ["Khan", "Baig"];

//         for (var i = 0; i < firstNames.length; i++) {
//         for (var j = 0; j < lastNames.length; j++) {
//            document.write("<br>" + firstNames[i] + " " + lastNames[j])
//         }
//     }
//     }
// //     document.write("<h1>abdul-majid-ashrafi</h1>");
// //     for (var i = 0; i < 4; i++) {
// //     for (var t = 1; t <= 3; t++){
// //        alert("child Loop " + t)
// //     }
// // }

//         /** when no curly braces are used, first immediate statement is considered as it's in the body of the statement **/
//     var myArray = [2, 5, 2, 4];
//     for (var i = 0; i < myArray.length; i++)
//     console.log(myArray[i]);
//     alert("done!");

document.write("<b>*Print hello world 5 times using for loop</b><br>")
for(var count=1; count<=5; count++){
    document.write("Hello World..<br>");
}
document.write("<b>*Print numeric computing 1to10 using for loop</b><br>")
for(var num=0; num<=10; num++){
    document.write(num+ "<br>");
}
document.write("<b>*Print Nokia,Samsung,Apple,Sony,Huawei using for loop</b><br>")
var model = ["Nokia", "Samsung", "Apple", "Sony","Huawei"];
    for (var i = 0; i < model.length; i++) {
    document.write(model[i]);
    document.write("<br>");
}
document.write("<b>Print following item with index number using for loop</b><br>")
var item = ["apple", "banana", "mango", "orange", "strawberry"];
    for (var i = 0; i < item.length; i++) {
    document.write("element at index"+" "  + i +" "+ item[i]  );
    document.write("<br>")
}
document.write("<b>*Generate the following series in your browser using for loop</b><br>")
for(var num=0; num<=15; num++){
    document.write(num+ "<br>");
}
for(var num=10; num<=1; num++){
    document.write(num+"<br>")
}

document.write("Even number:"+"<br>")
var i;
for (i = 0; i <= 12; i++)
if ((i % 2) == 0)
  document.writeln(i+"<br>");

document.write("Odd number:"+"<br>")
var i;
for (var i = 0; i < 12; i++){
    if ((i % 2) !== 0)
        document.write(i +"<br>");
}
document.write("Reverse number:"+"<br>")
var i = 0;
for (i = 10; i > 0; i--){
     document.write(i+"<br>");
}
document.write("Series:"+"<br>")
var i;
for (i = 2; i <= 20; i++)
if ((i % 2) == 0)
document.writeln(i+"k"+"<br>");


document.write("<b>*Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not</b>"+"<br>")
  var item = ["cake", "apple pie", "cookie", "chips", "patties"];
  var itemToCheck = prompt("Welcome sir,What do you want to order?");
      for (var i = 0; i < item.length; i++) {
          if (itemToCheck === item[i]) {
        document.write("Cookie is available at index number"+" "+[i]+" " +"in our bakery"+"<br>");
    }
}
    // else if(itemToCheck!==item){
    //     document.write("Sorry this is item is not available"+"<br>");
    // }
    // }
document.write("<b>*Write a program to identify the largest number.</b>"+"<br>")
var array = [24, 53, 78, 91, 12];
var largest = 0;

for( var i = 0; i < array.length; i++){
if(largest < array[i]) {
largest = array[i];
}
}
document.write("<b>Array Items:24, 53, 78, 91, 12</b>"+"<br>");
document.write(largest+"<br>");

document.write("<b>*Write a program to identify the smallest number.</b>"+"<br>")
var array = [24, 53, 78, 91, 12];
var smallest = 100;

for( var i = 0; i < array.length; i++){
if(smallest > array[i]) {
smallest = array[i];
}
}
document.write("<b>Array Items:24, 53, 78, 91, 12</b>"+"<br>");
document.write(smallest+"<br>");

document.write("<b>*Write a program to identify the largest & the smallest number</b>"+"<br>");
array = [24, 53, 78, 91, 12]
var largest =array[0];
var smallest = array[0];
for (var i = 0; i < array.length; i++){
    var temp = array[i];
    if (temp > largest)
    {
        largest = array[i];
    }
    if (temp < smallest)
    {
        smallest = array[i];

    }
}
document.write("Array items 24,53,78,91,12"+"<br>");
document.write("largest number is:"+largest+"<br>");
document.write("Smallest number is:"+smallest+"<br>");

document.write("<b>*Write a program to print multiples of 5 ranging 1 to 100</b>"+"<br>");
function findIntegers() {
for (var i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        var p = document.createElement('p')
			p.innerHTML = i
			document.body.appendChild(p)
    }
}
}
findIntegers();"<br>"

document.write("<b> *Write a program to create the following patterns in your browser. Take number of lines as an input<b>"+"<br>");

document.write("B:"+"<br>");
var s1="*";
var i, j;
var size=prompt("Enter the size of the pyramid" );
for(i=1; i <= size; i++)
 {
  for(j=1; j<=i; j++)
 {
   document.write('*');
  }
   document.write('<br/>');
 }
 document.write("C:"+"<br>");
     var s1="*";
     var i, j;
     var size=prompt("Enter the size of the pyramid" );
     for(i=size;i>=1;i--){
        for(j=1;j<=i;j++){
            document.write('*');
        }
        document.write('<br/>');
     }
     document.write("A:"+"<br>");
     var s1="*";
     var i, j;
     var size=prompt("Enter the size of the pyramid" );
     for(i=size;i>=1;i--){
        for(j=1;j<=size;j++){
            document.write('*');
        }
        document.write('<br/>');
     }
    
document.write("D:"+"<br>");
     var i, j;
     var size=prompt("Enter the size");
        for(i=1; i<=size; i++){
            for(j=1; j<=i;j++){
                document.write(i);  
            }
            document.write('<br/>');
        }
        



        
        
     

     

 // var s1="*";
// var size = prompt("Enter the size of the pyramid");
//     for(var i=1;i<=size;i++)
//     {
//         console.log(s1);
//         s1+="*";"<br>"
        
//     }

    // var s1="*";
    // var size = prompt("Enter the size of the pyramid");
    //     for(var i=0;i>=size;i++)
    //     {
    //         console.log(s1);
    //         s1+="*";
    //     }



document.write("<b>*Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.</b>"+"<br>");
var number= prompt("Enter the number of table");
var length = prompt("Enter the length of multiplication of table ");   
    for( var num=1; num<=length; num++){
        document.write(number+ " x " +num+ " = " + number*num +"<br>");
    }        
 document.write("<b>*Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user. </b>"+"<br>");
 var number= prompt("Enter the number of Items");
document.write("Number of Items"+" "+ number+"<br>");
document.write("items:"+" " + "<br>");
var hardware1= prompt("Enter the hardware name:");
var hardware2= prompt("Enter the hardware name:");
var hardware3= prompt("Enter the hardware name:");
var hardware4= prompt("Enter the hardware name:");
document.write(hardware1+ "<br>");
document.write(hardware2+ "<br>");
document.write(hardware3+ "<br>");
document.write(hardware4+ "<br>"+"<br>");