// When the document is ready
$(document).ready(function() {
  
  // Display the current day at the top of the calendar
  function displayCurrentDay() {
    var today = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(today);
  }

  // Function to create and display time blocks
  function createTimeBlocks() {
    // Define work hours
    var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 
    var currentHour = dayjs().hour(); // Get current hour using dayjs
    var container = $('.container-fluid'); // Get the container

    // Clear any existing time blocks
    container.empty(); 

    // Loop over each work hour and create time blocks
    $.each(workHours, function(index, hour) {
      var hourLabel = formatHour(hour); // Get the formatted hour
      var timeBlock = $('<div>').addClass('row time-block'); // Create a div for the time block
      var hourCol = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hourLabel); // Create the hour column
      var textArea = $('<textarea>').addClass('col-8 col-md-10 description'); // Create the text area
      var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save').html('<i class="fas fa-save"></i>'); // Create the save button

      // Set the ID for the block to the hour
      timeBlock.attr('id', 'hour-' + hour);

      // Check if the time block is in the past, present, or future
      if (hour < currentHour) {
        timeBlock.addClass('past');
      } else if (hour === currentHour) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }

      // Load saved data from localStorage
      textArea.val(localStorage.getItem('hour-' + hour) || '');

      // Append the hour column, text area, and save button to the time block
      timeBlock.append(hourCol, textArea, saveBtn);

      // Append the time block to the container
      container.append(timeBlock);

      // Save button click event
      saveBtn.click(function() {
        // Save the text area value to localStorage
        var eventText = textArea.val();
        localStorage.setItem('hour-' + hour, eventText);
      });
    });
  }

  // Function to format the hour for display
  function formatHour(hour) {
    if(hour > 12) {
      return (hour - 12) + 'PM';
    } else {
      return hour + 'AM';
    }
  }

  // Call the displayCurrentDay and createTimeBlocks functions
  displayCurrentDay();
  createTimeBlocks();

  // Update the time blocks every minute to check for past, present, or future
  setInterval(function() {
    createTimeBlocks();
  }, 60000);
});