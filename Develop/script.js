
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

$(".saveBtn").on('click', function() {
   var userInput = $(this).siblings(".description").val();
    console.log(userInput)
   var time = $(this).parent().attr("id");
    console.log(time)
   localStorage.setItem(time, userInput);
})

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
