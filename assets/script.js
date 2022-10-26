/*observations from CSS

- We'll need:



3) Figure out Time Blocks.

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
console.log(currentHour)



$("input").each(function(index){
var attribute = $(this).attr("name");
var integer = parseInt(attribute);


if (currentHour > integer){
$(this).addClass("past")
}
else if (currentHour == integer)//rounding??
{
    $(this).addClass("present")
}
else{
    $(this).addClass("future")
}})








//code in timeblock time. 

/*

How to Convert Time to number? Or number to time? 
Looks like it's just a number already?


var timeSlots = 

if(today > "9am"){


}

*/