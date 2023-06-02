// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

//Passes the hour block name and displays the text box information from local storage
function setUpPlanner(hour)
{
  var hourxLocal = localStorage.getItem(hour);
  var hourxLocalName = "#" + hour;
  var hourTextLocal = $(hourxLocalName).children().eq(1);
  var hourTextBlockLocal = $(hourTextLocal);  
  $(hourTextBlockLocal).text(hourxLocal);
}
//Sets up all the time blocks from local storage
setUpPlanner("hour-9");
setUpPlanner("hour-10");
setUpPlanner("hour-11");
setUpPlanner("hour-12");
setUpPlanner("hour-13");
setUpPlanner("hour-14");
setUpPlanner("hour-15");
setUpPlanner("hour-16");
setUpPlanner("hour-17");

//Stores text inputed in time block and saves it to local memory
  $('.btn.saveBtn.col-2.col-md-1').on('click',function(){
  //Gets hour-x-id
   var hour = this.parentElement.id;
   var hourID = "#"+hour;
  //DOM traverses to the hour block that save button was clicked on
   var hourBlock = $(hourID);
  //DOM traverses to the hour block text area that save button was clicked on
   var hourText = hourBlock.children().eq(1);
   
   //Gets textarea class of hour-x-id
   var hourTextBlock = $(hourText);

   //Sets and stores value of textarea unputed by user
   localStorage.setItem(hour,hourTextBlock.val());
   $(hourTextBlock).text(hourTextBlock.val());
   
  });
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //create time object
  var curentTime = dayjs();

  //getting the curent hour in 0-23 format for comparison.
  //all time blocks are set to future by default
  var currentHour = curentTime.format('H');


//function that passes through the hour of the block and the block itself
//adds and removes classes based on currentHour
  function checkTimeBlock(index, timeBlock){
    if(currentHour == index)
    {
      timeBlock.removeClass('future');
      timeBlock.addClass('present');
    }
    else if(currentHour > index)
    {
      timeBlock.removeClass('future');
      timeBlock.addClass('past');
    }
  }

  //calls the checkTimeBlock function through all the time blocks on the page
  checkTimeBlock(9, $('#hour-9'));
  checkTimeBlock(10, $('#hour-10'));
  checkTimeBlock(11, $('#hour-11'));
  checkTimeBlock(12, $('#hour-12'));
  checkTimeBlock(13, $('#hour-13'));
  checkTimeBlock(14, $('#hour-14'));
  checkTimeBlock(15, $('#hour-15'));
  checkTimeBlock(16, $('#hour-16'));
  checkTimeBlock(17, $('#hour-17'));

  // TODO: Add code to display the current date in the header of the page.
  //set date on start up

  //function and call so it updates the date.
  $('#currentDay').text(curentTime.format('dddd, MMMM D, YYYY '));
  var updateTime = function()
  {
      var curentTime = dayjs();
      //Displays the time on the HTML page.
      $('#currentDay').text(curentTime.format('dddd, MMMM D, YYYY '));
  }
  setInterval(updateTime, 1000);

});
