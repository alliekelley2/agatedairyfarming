$(document).ready(function() {
});

$( "#tutorialBack" ).click(function(event) {
    event.preventDefault();
    var ids = ["#basics", "#html", "#css", "#exampleCode"];
    var done = false;
    for (i = 0; i < ids.length && !done; i++){
        var isHidden = $(ids[i]).css("display") === "none";

        if (isHidden === false) {
            if (i !== 0) {
                $("#tutorialBack").attr("href", "/codingTutorial");
                $(ids[i]).css("display", "none");
                $(ids[i - 1]).css("display", "block");
                done = true;
            }
              else {
                $("#tutorialBack").css("a:visited", "grey");
            }
        }

    }

});

$("#tutorialNext" ).click(function(event) {
    /*
        Prevent the link for firing and allow JS to handle it
     */
    event.preventDefault();
    var ids = ["#basics", "#html", "#css", "#exampleCode"]; // array with ids of section tags
    var done = false;
    for (i = 0; i < ids.length && !done; i++){ //iterates over array of section tag ids
        var isHidden = $(ids[i]).css("display") === "none"; //stores whether it is hidden or not in variable

        if (isHidden === false) { // if the element is displaying on the page
            if (i !== ids.length - 1) { // if it is not the last element in the array, can link to another page. cannot click next if there are no more elements in array
                $("#tutorialNext").attr("href", "/codingTutorial"); //add link to next button in case it was deleted
                $(ids[i]).css("display", "none"); //change current element that is displayed to hidden
                $(ids[i + 1]).css("display", "block"); //change next element to being displayed
                done = true; //exit the loop and do not continue to check for an element that is not hidden
            }
        }

    }
});

