$(document).ready(function(){

    init();

    //make it so that when the "meat" div is clicked
    // it opens.
    var isOpen = false;

    var finalHeight = $("#wrapper").attr("openHeight"); // YEAH EPIC
    // var initialHeight = 30; // not used see div#meat{height} in style.css
    var openDuration = 600; //ms
    setTimeout(function(){
        openDiv("meat", finalHeight, openDuration);
    }, 200);
    // makeOpenClose("meat", finalHeight, initialHeight, openDuration);

    // ==================== Helpers ==================== //

    function init() {
        $("#meat").children().hide();
    }

    function openDiv(id, finalHeight, duration){
        $("#" + id).animate({
            height: finalHeight + "px"
        }, duration);
        $("#" + id).children().show(duration);
    }

    /**
    * Not used, still handy tho
    */
    function makeOpenClose(id, openHeight, closeHeight, duration) {
        $("#" + id).click(function(e){
            if(!isOpen) {
                isOpen = true;

                $("#" +id).animate({
                    height: openHeight + "px"
                }, duration);

                $("#" + id).children().show(duration);
            }
            else {
                isOpen = false;

                $("#" + id).children().hide(duration);

                $("#" + id).animate({
                    height: closeHeight + "px"
                }, duration);
            }
        });
    }
});