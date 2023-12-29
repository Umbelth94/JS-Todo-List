

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var scheduleContainer = $('#schedule-container');
  var currentHour = dayjs().hour();



  $('.saveBtn').on('click', ()=> {
    console.log('saved');
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  
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
