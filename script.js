nbreClique = 0;
bonus = 1;

function clicktest() {
	nbreClique= nbreClique + bonus;
	document.getElementById("nbreCanelés").innerHTML = nbreClique;
	document.getElementById("levelFour").innerHTML = bonus - 1;
	if(nbreClique>=25){
		document.getElementById("four").innerHTML = '<button id="four" onclick="achatfour()">Acheter un four (25 canelés)</button>'
	}
	if(nbreClique<25){
		document.getElementById("four").innerHTML = '<button disabled="on "id="four" onclick="achatfour()">Acheter un four (25 canelés)</button>'
	}
}

function achatfour() {
	nbreClique=nbreClique-25;
	bonus++;
	if(nbreClique>=25){
		document.getElementById("four").innerHTML = '<button id="four" onclick="achatfour()" >Acheter un four (25 canelés)</button>'
	}
	if(nbreClique<25){
		document.getElementById("four").innerHTML = '<button disabled="on "id="four" onclick="achatfour()" >Acheter un four (25 canelés)</button>'
	}
	document.getElementById("nbreCanelés").innerHTML = nbreClique;
	document.getElementById("levelFour").innerHTML = bonus - 1;
}

