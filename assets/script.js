/*observations from CSS

- We'll need:



3) Code Timeblocks so that they indicate whether it is in the past, present, or future

class = ".past" ".present"  ".future"

probably have to find current time and compare it to the time for each form.  

4) WHEN I click into a timeblock, THEN I can enter an event

form.

5) WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage

json connect


6) WHEN I refresh the page THEN the saved events persist
*/


var rightNow = moment();
var today = rightNow.format("[Today is: ]MMM Do, YYYY, H:mma");
$("#currentDay").text(today);

var currentHour = rightNow.format("H");

//how to retrieve number from class in javascript


var nineEl = $(".description"); //but that's still an element???
var attribute = nineEl.attr("name")
var integer = parseInt(attribute);
//console.log(nineEl);

if (currentHour > integer){
    console.log("check");
}






//code in timeblock time. 

/*

How to Convert Time to number? Or number to time? 
Looks like it's just a number already?


var timeSlots = 

if(today > "9am"){


}

*/