window.onload = function() {
    var canvas  = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = "media/gtav.jpg";
    img.onload = function (e)
    {
        context.drawImage(img, 0,0,300,150);
    }
};