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


var today = moment().format("[Today is: ]MMM Do, YYYY, h:mma");
$("#currentDay").text(today);

