$(document).ready(function(){

    //make it so that when the "meat" div is clicked
    // it opens.
    makeOpenClose("meat", 500, 30, 400);



    // ==================== Helpers ==================== //

    function makeOpenClose(id, openHeight, closeHeight, duration) {
        var isOpen = false;
        $("#" + id).click(function(e){
            if(!isOpen) {
                $("#meat").animate({
                    height: openHeight + "px"
                }, duration, "swing");
                isOpen = true;
            }
            else {
                $("#meat").animate({
                    height: closeHeight + "px"
                }, duration, "swing");
                isOpen = false;
            }
        });
    }

});