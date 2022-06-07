//SKIFT IMELLEM TEKSTEN I DROP DOWN MENUEN

function openprogram(evt, programName) {
	
  //Vi deklarerer 3 var variabler; i, tabcontent og tablinks
  var i, tabcontent, tablinks;
	
  //Her indsætter vi variablen tabcontents værdi som værene document.getElementsByClassName("tabcontent")
  tabcontent = document.getElementsByClassName("tabcontent");
	
  //Sørger for at teksten i tekstboksen bliver erstattet af den nye tekst når en knap bliver trykket, i steddet for at blive skrevet under, hvilket resulterer i en større og større tekstboks
  //For loopet sørger for at koden indenfor dets curly brackets kun kører en gang
  for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
  }

  //Sørger for at teksten dukker op i tekstboksen når funktionen bliver kaldt, når man trykker på en knap
  document.getElementById(programName).style.display = "block";
  evt.currentTarget.className += " active";
}