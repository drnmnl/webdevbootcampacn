var p1btnsel = document.getElementById("p1btn");
var p2btnsel = document.querySelector("#p2btn");
var fieldsel = document.querySelector("#nfield");
var p1disp = document.querySelector("#p1");
var p2disp = document.querySelector("#p2");
var rst = document.querySelector("#reset");
var n=5; //document.querySelector("#maxwins");

var maxval = n;//n.innerText;

function incrementPlayer1() {
	console.log(p1disp.innerText, maxval);
	if (p1disp.innerText < maxval) {
		console.log("XXXXX");
		p1disp.innerText++; 

	}

	if (p1disp.innerText == maxval) {
		p1disp.style.color = "green"
	}
}


function incrementPlayer2() {
	if ((p2disp.innerText < maxval) && (p1disp !=maxval)) {
		p2disp.innerText++; }
	if (p2disp == maxval) {
		p2disp.style.color = "green"
	}
}

function resetAllCounters() {
	p1disp.innerText = 0;
	p2disp.innerText = 0;
}

function changeMaxValueDisplayed(){
	 n.innerText = fieldsel.value;
	}




p1btnsel.addEventListener("click", incrementPlayer1);
p2btnsel.addEventListener("click", incrementPlayer2);
rst.addEventListener("click", resetAllCounters);

fieldsel.addEventListener("onchange", changeMaxValueDisplayed);