//Part 1: Display Date

var date = new Date();

var month;
var day;
var year;

//get month
month = date.getMonth(); //value is 0-11
month = month + 1; //value is now 1-12
month =  String(month) //ensure it is String to be able to use padStart
month = month.padStart(2,'0'); //makes so strings are of length 2 by concatenating with '0' in front of string
console.log("this is the month: "+month); //check output

//get day
day = date.getDate(); //value is 1-31
day =  String(day) //ensure it is String to be able to use padStart
day = day.padStart(2,'0'); //makes so strings are of length 2 by concatenating with '0' in front of string
console.log("this is the day: "+day); //check output

//get year
year = date.getFullYear(); //value is 4 digits
console.log("this is the year: "+year); //check output

//display to page
var dateOutput = document.getElementById("dateOutput"); //get the element in index.html
dateOutput.textContent = "Today is "+month+"/"+day+"/"+year; //change element text to "Today is MM/DD/YYYY"
console.log(dateOutput.textContent); //check output, without .textContent it gives the element tag as well



//Part 2: Number Conversion
var numeric1 = "44";
var numeric2 = "123";
var decimal = "19.97";
var nonNumeric = "Not";

//convert & check - numeric1
console.log("Checking numeric1: "+numeric1);
console.log("is NaN: " + Number.isNaN(Number(numeric1))); //checks if NaN
console.log("is int: " + Number.isInteger(Number(numeric1))); //checks if int

//convert & check - numeric2
console.log("Checking numeric2: "+numeric2);
console.log("is NaN: " + Number.isNaN(Number(numeric2))); //checks if NaN
console.log("is int: " + Number.isInteger(Number(numeric2))); //checks if int

//convert & check - decimal
console.log("Checking decimal: "+decimal);
console.log("is NaN: " + Number.isNaN(Number(decimal))); //checks if NaN
console.log("is int: " + Number.isInteger(Number(decimal))); //checks if int

//convert & check - nonNumeric
console.log("Checking nonNumeric: "+nonNumeric);
console.log("is NaN: " + Number.isNaN(Number(nonNumeric))); //checks if NaN
console.log("is int: " + Number.isInteger(Number(nonNumeric))); //checks if int

//create sentence - numeric1
var numeric1String = "Original: '"+numeric1+"' Converted: "+Number(numeric1)+" isNaN: "+Number.isNaN(Number(numeric1))+" isInteger: "+Number.isInteger(Number(numeric1));
console.log(numeric1String); //check output

//create sentence - numeric2
var numeric2String = "Original: '"+numeric2+"' Converted: "+Number(numeric2)+" isNaN: "+Number.isNaN(Number(numeric2))+" isInteger: "+Number.isInteger(Number(numeric2));
console.log(numeric2String); //check output

//create sentence - decimal
var decimalString = "Original: '"+decimal+"' Converted: "+Number(decimal)+" isNaN: "+Number.isNaN(Number(decimal))+" isInteger: "+Number.isInteger(Number(decimal));
console.log(decimalString); //check output

//create sentence - decimal
var nonNumericString = "Original: '"+nonNumeric+"' Converted: "+Number(nonNumeric)+" isNaN: "+Number.isNaN(Number(nonNumeric))+" isInteger: "+Number.isInteger(Number(nonNumeric));
console.log(nonNumericString); //check output

//combine to one string
var combinedString = numeric1String+"<br>"+numeric2String+"</br>"+decimalString+"<br>"+nonNumericString; //need line breaks
//display to page
var conversionOutput = document.getElementById("numberConversionOutput");// get element in index.html
conversionOutput.innerHTML = combinedString; //display content in this element, using innerHTMl to have lines breaks with <br>
console.log(conversionOutput);



//Part 3: Math & Formatting
//Chose to do the grade scores
var score1 = 67.4675;
var score2 = 54.5454;
var score3 = 0.000323;


//calculate total score
var totalScore = score1+score2+score3;
console.log("Total Score: "+totalScore);

//calculate average score
var averageScore = totalScore / 3;
console.log("Average Score: "+averageScore);

//which letter grade is average (if/else case)
var averageLetter;
if(averageScore >= 90){
    averageLetter = "A";
}
else if(averageScore >= 80 && averageScore < 90){
    averageLetter = "B";
}
else if(averageScore >= 70 && averageScore < 80){
    averageLetter = "C";
}
else if(averageScore >= 60 && averageScore < 70){
    averageLetter = "D";
}
else{
    averageLetter ="F";
}

//check if message should be displayed
var gradeMessage;
if(averageScore < 60){//class is failing
    gradeMessage = "This class is failing...";
}
else{
    gradeMessage = "";//empty, dont display anything
}

//display average
var mathOutput = document.getElementById("mathOutput");// get element in index.html
mathOutput.innerHTML =
    "Scores: "+score1+", "+score2+", "+score3 +"<br>"+
    "Average Score: "+averageScore.toFixed(2) +"<br>"+
    "Average Letter Grade: "+averageLetter +"<br>"+
    gradeMessage;
    

//using innerHTML to use <br> for line break, toFixed limits decimal positions


//Part 4: Conditionals
//if else's found in Part 3