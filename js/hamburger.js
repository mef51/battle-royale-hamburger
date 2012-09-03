$(document).ready(function(){

    init();

    //make it so that when the "meat" div is clicked
    // it opens.
    var isOpen = false;

    var finalHeight = 500;
    var initialHeight = 30;
    var openDuration = 300; //ms
    makeOpenClose("meat", finalHeight, initialHeight, openDuration);



    // ==================== Helpers ==================== //

    function init() {
        $("#meat").children().hide();
    }

    function makeOpenClose(id, openHeight, closeHeight, duration) {
        $("#" + id).click(function(e){
            if(!isOpen) {
                isOpen = true;

                $("#" +id).animate({
                    height: openHeight + "px"
                }, duration);

                $("#meat").children().show(400);
            }
            else {
                isOpen = false;

                $("#meat").children().hide(400);

                $("#" + id).animate({
                    height: closeHeight + "px"
                }, duration);
            }
        });
    }
});