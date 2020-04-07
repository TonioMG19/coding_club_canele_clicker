nbreClique = 0;
bonus = 1;
bonus2 = 1;
prix=25;
isAutoOn = false;


function clicktest() {
	nbreClique= nbreClique + bonus;
	recharger();
	modification();
}

function achatfour() {
	nbreClique=nbreClique-prix;
	bonus++;
	prix = Math.round(prix*1.2);
	modification();
	recharger();
}


function assezCanelé(){
	if(nbreClique>=prix){
		return true
	}
	if(nbreClique<prix){
		return false
	}
}

function modification(){
	if(assezCanelé()){
		document.getElementById("four").innerHTML = '<button id="four" onclick="achatfour()" >Acheter un four ('+prix+' canelés)</button>';
	}
	if(!assezCanelé()){
		document.getElementById("four").innerHTML = '<button disabled="on "id="four" onclick="achatfour()" >Acheter un four ('+prix+' canelés)</button>';
	}
}

function recharger(){
	document.getElementById("nbreCanelés").innerHTML = nbreClique;
	document.getElementById("levelFour").innerHTML = bonus - 1;
}

function autoclick(){
	setInterval(function(){ nbreClique=nbreClique+bonus2;recharger() }, 1000);
}

