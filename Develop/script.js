// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var saveButton = document.querySelectorAll("button")

// addEventListener.saveButton('click', {
//   var buttonId = $(this).attr("id");
//   console.log("Button with ID " + buttonId + " was clicked.");
// });

console.log(saveButton)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var currentHour = parseInt(dayjs().format('H'));
  console.log(currentHour)


  $(".time-block").each(
    function() {
      var blockHour = parseInt(
        $(this).attr("id")
      )
      console.log(blockHour)

      if (blockHour < currentHour) {
        $(this).addClass("past")
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present")
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }

    }
    
  )
  

  // var divTags = document.querySelectorAll(".row time-block future")
  // console.log(divTags)

  // for ( var i = 0; i < divTags.id; i++ ){
  //   if (divTags.id([i]) == stringify.hour){
  //     divTags.appendClass(".present");
  //   } else if (divTags.id([i]) < hour){
  //     divTags.appendClass(".past");
  // }}

  // const hourElements = document.getElementsByClassName("col-2 col-md-1 hour text-center py-3").innerText
  
  // var hourArray = Array.from(hourElements)

  // console.log(hourElements)

  // hourArray.forEach(function(hourElement) {
  //   var selectedHour = hourElement.textContent;

  //   // Perform your desired action for each hour
  //   console.log("Selected hour:", selectedHour);
  // });

  // Console.log Button ID

  // Get the Hour out of the string

  // Log the hour

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Get the current Time (console.log)

  // Compare to Button Clicked

  //  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  



  //
  // TODO: Add code to display the current date in the header of the page.

