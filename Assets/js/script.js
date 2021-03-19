$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss A"));
    $(".saveBtn").on("click", function() { // save function that saves when clicked upon the save button
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    //if any data stored, it's stored in each of these values by the hr with the description
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));

    function tickingClock() { //function that pushes clock to update in realtime
        $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss A'));
    }
    setInterval(tickingClock, 1000);

    function hrTracker() {
        var ActualHr = moment().hour(); // number of hours

        $(".time-block").each(function() { // go through each block of the daily hr
            var BusyHr = parseInt($(this).attr("id").split("hour")[1]);

            if (BusyHr < ActualHr) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (BusyHr === ActualHr) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hrTracker(); //execute tracker
})