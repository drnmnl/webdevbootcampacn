
var x = document.querySelector("#bttn");

setInterval(function() {
    if (x.style.backgroundColor === "blue") {
        x.style.backgroundColor = "red"; }
        else { 
            x.style.backgroundColor = "blue"; 
        }
    }, 200);

var i = 5;
function zzz (){
	setInterval(function() {
	//set textContent to i;
	x.textContent = i;
	if (i>0) {
		i--;}
	else
		x.textContent = "OPEN LINK";
		x.style.textDecoration = null;
}, 1000 ); }

//x.addEventListener("click", zzz);