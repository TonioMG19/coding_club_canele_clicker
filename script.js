nbreClique = 0;
bonus = 1;
bonus2 = 1;
prix=25;
prix2=150;
isAutoOn = false;
alreadyOn= false;
levelAuto = 0;
prixF=5


function clicktest() {
	nbreClique= nbreClique + bonus;
	modification();
	recharger();
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

function assezCanelé2(){
	if(nbreClique>=prix2){
		return true
	}
	if(nbreClique<prix2){
		return false
	}
}

function modification(){
	if(assezCanelé()){
		document.getElementById("four").innerHTML = '<button id="four" onclick="achatfour()" class="btn btn-info btn-lg">Acheter un four ('+prix+' canelés)</button>';
	}
	if(!assezCanelé()){
		document.getElementById("four").innerHTML = '<button disabled="on "id="four" onclick="achatfour()" class="btn btn-info btn-lg">Acheter un four ('+prix+' canelés)</button>';
	}
	if(assezCanelé2() && bonus>=prixF){
		document.getElementById("auto").innerHTML='<button onclick="autoclick()" class="btn btn-info btn-lg">Engager un patissier ('+prixF+' fours minimum et '+prix2+' canelés)</button>';
	}
	if(!assezCanelé2()){
		document.getElementById("auto").innerHTML='<button onclick="autoclick()" disabled="on" class="btn btn-info btn-lg">Engager un patissier ('+prixF+' fours minimum et '+prix2+' canelés)</button>';
	}
}

function recharger(){
	document.getElementById("nbreCanelés").innerHTML = nbreClique;
	document.getElementById("levelFour").innerHTML = bonus;
}

function autoclick(){
	if(levelAuto==0){
		nbreClique = nbreClique - prix2;
			recharger();
		setInterval(function(){ nbreClique=nbreClique+bonus2;recharger();modification() }, 1000);
		document.getElementById("auto").innerHTML='<button onclick="autoclick()" disabled="on" class="btn btn-info btn-lg">Engager un patissier ('+prixF+' fours minimum et '+prix2+' canelés)</button>';
		alreadyOn = true;
		levelAuto++;
		prix2=Math.round(prix2*1.2);
		prixF=Math.round(prixF*1.4);
		document.getElementById("cuistot").innerHTML='Vous avez engagez <span id="levelPati">'+bonus2+'</span> patissier !';
	}
	else{
		document.getElementById("auto").innerHTML='<button onclick="autoclick()" disabled="on" class="btn btn-info btn-lg">Engager un patissier ('+prixF+' fours minimum et '+bonus2+' canelés)</button>';
		nbreClique = nbreClique - prix2;
		prix2=Math.round(prix2*1.2);
		prixF=Math.round(prixF*1.2);
		bonus2++;
		document.getElementById("cuistot").innerHTML='Vous avez engagez <span id="levelPati">'+bonus2+'</span> patissier !';
	}
}

