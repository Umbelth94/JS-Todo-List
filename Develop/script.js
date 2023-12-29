

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var scheduleContainer = $('#schedule-container');
  var currentHour = dayjs().hour();


//Button event listener to save id/input value pairs locally
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    console.log(timeBlockId);
    var timeBlockInput = $(this).closest('.time-block').find('.description').val();
    console.log(timeBlockInput);

    localStorage.setItem(timeBlockId, timeBlockInput);
    console.log('storage saved');
  })

 //Give each hour div a color based on the current time of day
  scheduleContainer.children().each(function (){
    //Get just the number from each div by slicing off the "hour-" part of the string and converting to a NUM
    var hourNum = Number(this.id.slice(5));
    if (currentHour < hourNum){
      $(this).addClass('future');
    }
    if (currentHour === hourNum){
      $(this).addClass('present')
    }
    if (currentHour > hourNum){
      $(this).addClass('past')
    }
  })

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
