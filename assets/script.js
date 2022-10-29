
var currentPageInfo = JSON.parse(localStorage.getItem("work-planner"))||[];
////realize that we don't need to pull all stored information.  If we enter new information on a certain time block, it should override information last saved there.

renderSavedItems();
var rightNow = moment();
var today = rightNow.format("[Today is: ]MMM Do, YYYY, H:mma");
$("#currentDay").text(today);
setTime();

var currentHour = rightNow.format("H");
$("input").each(function(){
var attribute = $(this).attr("name");
var index = parseInt(attribute)
    if (currentHour > index){
        $(this).addClass("past")
    }
    else if (currentHour == index){
        $(this).addClass("present");
    }
    else{
        $(this).addClass("future");
    }
})

//refreshColor();


function setTime(){
    setInterval(function() {
    rightNow = moment();
    today = rightNow.format("[Today is: ]MMM Do, YYYY, H:mma");
    $("#currentDay").text(today);
    }, 1000)    
};

// function refreshColor(){
//     setInterval(function() {
//     currentHour = rightNow.format("H");
//     $("").each(function(index){
//         var attribute = $(this).attr("name");
//         var integer = parseInt(attribute);
//             if (currentHour > integer){
//                 $(this).addClass("past")
//                 console.log(currentHour) 
//             }
//             else if (currentHour == integer){
//                  $(this).addClass("present");
//                  console.log(currentHour) 
//             }
//             else{
//                 $(this).addClass("future");
//                 console.log(currentHour) 
//             }
//     })
//    console.log(currentHour) 
//     }, 3600000) //not sure if this refreshes every hour or not   
// };


function storeInput(activity, activityTime){
    var storeTimeBlock= {
        eventTime: activityTime, 
        eventDesc: activity}
    
        currentPageInfo.push(storeTimeBlock)
        localStorage.setItem("work-planner",JSON.stringify(currentPageInfo));  
    }


$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var input = $(this).siblings("input");
    var activity = input.val();
    var activityTime = input.attr("name");
    storeInput(activity, activityTime);   
})

function renderSavedItems(){
        $(".description").each(function(){
            if (currentPageInfo !== null) {
            var nameHour = $(this).attr('name');
                for (var i = 0; i < currentPageInfo.length; i++) {
                    if (nameHour == currentPageInfo[i].eventTime){
                        $(this).val(currentPageInfo[i].eventDesc)
                        
                    }
                    else if (currentPageInfo === null) {
                        return
                    }
                }
            }
        }) 
    }


  

