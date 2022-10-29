
//pull items saved in local storage into array
var currentPageInfo = JSON.parse(localStorage.getItem("work-planner"))||[];

//root into DOM 
var inputEl = $("input");
var timeEl = $("#currentDay");

//call funtion to load array inputs into their respective input elements
renderSavedItems();

//display time first thing on page
var rightNow = moment();
var currentHour = rightNow.format("H");
var today = rightNow.format("[Today is: ]MMM Do, YYYY, H:mma");

//call function to update time every second while the page is loaded
setTime();

//call function to update color/class representing past/present/future every minute while the page is loaded
setColor();

//displays color representing past/present/future first thing when page is loaded
inputEl.each(function(){
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

//function that will change the color of timeblocks when hour changes.  runs every minute.
function setColor(){
    setInterval(function() {
    inputEl.each(function(){
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
    }, 60000)
};

//function that updates time displayed on page
function setTime(){
    setInterval(function() {
    timeEl.text(today);
    }, 1000)    
};


//function takes the input user entered, stores it as an object, pushes into an array, and stores in local storage
function storeInput(activity, activityTime){
    var storeTimeBlock= {
        eventTime: activityTime, 
        eventDesc: activity}
    
        currentPageInfo.push(storeTimeBlock)
        localStorage.setItem("work-planner",JSON.stringify(currentPageInfo));  
    }

//event listener.  whenever the save button is clicked, information is saved, and the store input function is called
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var input = $(this).siblings("input");
    var activity = input.val();
    var activityTime = input.attr("name");
    storeInput(activity, activityTime);   
})

//this function is called first thing when page is loaded.  Takes all saved information and loads it into correct input element.
function renderSavedItems(){
     inputEl.each(function(){
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


  

