// When the document is ready
$(document).ready(function() {

  //Display the current day at the top of the calendar 
  function displayCurrentDay() {
    var today = dayjs().format('dddd. MMMM D');
    $('#currentDay').text(today);
  }

  //Function to create and display time blocks
  function createTimeBlocks() {
    //Define work hours
    var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var currentHour = dayjs().hour(); //Get current house using dayjs
    var container = $('.container-fluid'); // Get the container

    //Clear any existing time blocks 
    container.empty();

    //Loop over each work hour and create time blocks
    $.each(workHours, function(index, hour)) {
      var hourLabel = formatHour(hour); //Get the formatted hour
      var timeBlock = $('<div>').addClass('row time-block'); //Create a div for the time block
      var hourCol = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hourLabel); //Create the hour column
      var textArea = $('<textarea>').addClass('col-8 col-md-10 description'); //Create the text area
      var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save').html('<i class="fas fa-save"></i>'); //Create the save button
    
      //Set the ID for the block to the hour
      timeBlock.attr('id', 'hour-' + hour);

      //Check if the time block is in the past, present or future
      if (hour < currentHour) {
        timeBlock.addClass('past');
      } else if (hour === currentHour) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }

      



  : Add code to display the current date in the header of the page.
});
console.log($(this))
$( document ).ready(function(){
  console.log($(this)) 
})
$(".saveBtn").on("click", function(){
  console.log($(this).siblings(".description").val())
    localStorage.setItem("blocktext", $(this).siblings(".description").val()) 
})
var currentTime = parseInt(dayjs().format("HH"))
console.log(currentTime)
$(".time-block").each(function(){
  
})