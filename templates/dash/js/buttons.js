var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];

function reset_layout(){
left.style.display = "inline-block";
right.style.display = "inline-block";
left.className = " left col-lg-6 col-md-6 col-sm-6 col-xs-12";
right.className = " right col-lg-6 col-md-6 col-sm-6 col-xs-12";
}

function leftFull(){
    right.style.display="none";
    left.style.display="inline-block";
    left.className = " left col-lg-12 col-md-12 col-sm-12 col-xs-12";

}
function rightFull(){
    left.style.display="none";
    right.style.display="inline-block";
    right.className = " right col-lg-12 col-md-12 col-sm-12 col-xs-12";

}