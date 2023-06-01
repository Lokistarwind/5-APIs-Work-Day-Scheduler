// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //var test2 = $('.saveBtn');
  //console.log(test2);

  //test2.on('click', function(){
   // var test = this.parentElement.id;
   // console.log(test);
  //})

  //var hour9Text = localStorage.getItem("hour9Text");

  $('.btn.saveBtn.col-2.col-md-1').on('click',function(){
   var test = this.parentElement.id;
   var test2 = "#"+test;
   var test3 = $(test2);
   var test4 = test3.children().eq(1);
   var test5 = $(test4);
   //document.getElementById(test5).innerHTML = "New text!";
   //var test5 = document.getElementById(test4);
   //var test6 = document.querySelector(test4.class);


   //if(test5.textContent)


   console.log(test2);
   console.log(test3);
   console.log(test4);
   console.log(test5);
   //console.log(test6);

  });
 




//same as element selector like getlelemnt by id
//var example = $('#htmlTag');
//create element and set text
//var create = $('<h1>') ;
//create.text('hello world');
//designate it as class of name
//create.attr('class', 'class name')
//add class
//create.addClass('another class');
//css
//create.css('border', 'rgb etc')
//append object to html
//example.append(create);
//or example.append('<h2> stuff </h2>')




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

  //Note: its asking how to handle a user changing the input on a time block
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // TODO: Add code to display the current date in the header of the page.
  //set date on start up
  //function and call so it updates the date.
  $('#currentDay').text(curentTime.format('dddd, MMMM D, YYYY '));
  var updateTime = function()
  {
      var curentTime = dayjs();
      $('#currentDay').text(curentTime.format('dddd, MMMM D, YYYY '));
  }
  setInterval(updateTime, 1000);

});
