/*observations from CSS

- We'll need:

4) WHEN I click into a timeblock, THEN I can enter an event

form.

5) WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage

json connect


6) WHEN I refresh the page THEN the saved events persist
*/





var rightNow = moment(); //does time update?
var today = rightNow.format("[Today is: ]MMM Do, YYYY, H:mma");
$("#currentDay").text(today);

var currentHour = rightNow.format("H");


$("input").each(function(index){
var attribute = $(this).attr("name");
var integer = parseInt(attribute);
if (currentHour > integer){
$(this).addClass("past")
}
else if (currentHour == integer)
{
    $(this).addClass("present");
}
else{
    $(this).addClass("future");
}})

// function localStorage() {
// //when click happens take input in.  
// //with input, convert to string and store in string array locally.  





//FIGURE OUT HOW TO STORE IN JSON?



//LOAD JSON STORED DATA ON PAGELOAD

// function renderLastStored() {

// //localStorage.getItem("arrayname");
// //JSON.parse??? ^^^
// //.textContent??? OR whatever equivalent is in jQuery.

// }

// renderLastStored();




function storeInput(activity, activityTime){

    var storeTimeBlock= {
        eventTime: activityTime, 
        eventDesc: activity} 
    jqueryArray.push(storeTimeBlock)
    console.log(jqueryArray);
    localStorage.setItem("work-planner",JSON.stringify(jqueryArray));  
}


var jqueryArray = [];


$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var input = $(this).siblings("input");
    var activity = input.val();
    var activityTime = $(input).attr("name");
    storeInput(activity, activityTime);   
})


// function reloadPage(){
//     var currentPage = JSON.parse(localStorage.getItem("work-planner"));
//     //curent page.  Do we have to match again?? Do we need names in there? Does that mean we need an object instead of an array??
// }