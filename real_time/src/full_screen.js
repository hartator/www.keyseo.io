function goFullScreen(){
    var canvas = document.getElementById("viewport");
    $("#halfviz").css("left:0px; right:0px;");
    
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();

}