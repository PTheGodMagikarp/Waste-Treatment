//SKIFT IMELLEM TEKSTEN I DROP DOWN MENUEN

function openprogram(evt, programName) {
	
  //Vi deklarerer 3 var variabler; i, menuIndhold og tablinks
  var i, menuIndhold, tablinks;
	
  //Her indsætter vi variablen menuIndholds værdi som værene document.getElementsByClassName("menuIndhold")
  menuIndhold = document.getElementsByClassName("menuIndhold");
	
  //Sørger for at teksten i tekstboksen bliver erstattet af den nye tekst når en knap bliver trykket, i steddet for at blive skrevet under, hvilket resulterer i en større og større tekstboks
  //For loopet sørger for at koden indenfor dets curly brackets kun kører en gang
  for (i = 0; i < menuIndhold.length; i++) {
  menuIndhold[i].style.display = "none";
  }

  //Sørger for at teksten dukker op i tekstboksen når funktionen bliver kaldt, når man trykker på en knap
  document.getElementById(programName).style.display = "block";
  evt.currentTarget.className += " active";
}