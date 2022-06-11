// JavaScript Document




//--------------------------------------------------------------------------- Skrald  -----------------------------------------------------------------------//

// Skifter til Skrald siden når brugeren trykker på skrald ikonet //
function skiftTilSkrald() {
	
	// Finder hvilket billede af skrald der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementsByClassName("skraldOverTid");
	if (billedeAfSkrald[1].src.match("Billeder/Xd-billeder/Forbrugs-produkter.png") || billedeAfSkrald[1].src.match("Billeder/Skrald-over-tid/Skrald.png") ){
			
		
			
			
			
			
		//                                    **Langsom skifter billede**                                 //	
		
		//*Skrald*//
			if (billedeAfSkrald[1].src.match("Billeder/Xd-billeder/Forbrugs-produkter.png")){
			
				// Skifter det bargereste billede, til det nye billede  //
				billedeAfSkrald[0].src = "Billeder/Skrald-over-tid/Skrald.png"
		
				// Laver et interval der køre indtil billederne er færdig med at skifte plads. Det bargeste billede starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tidSkraldOpacity = setInterval(OpacitySkrald, 100);
				let opacitySkrald = 1;
				let opacitySkrald2 = 0;
		
					function OpacitySkrald() {
						if (opacitySkrald <= 0 || opacitySkrald2 >= 1) 
						{
							clearInterval(tidSkraldOpacity);
						}
						else {
							opacitySkrald-= 0.1;
							opacitySkrald2 += 0.1;
							billedeAfSkrald[1].style.opacity = opacitySkrald;
							billedeAfSkrald[0].style.opacity = opacitySkrald2;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilBilledeAfSkrald, 1000)
					function nulstilBilledeAfSkrald() {
						billedeAfSkrald[1].src = "Billeder/Skrald-over-tid/Skrald.png"
						billedeAfSkrald[1].style.opacity = 1;
				}
			}
			
			
				// Tekst i faktabox: Skifter den bargereste tekst, til at være den nye tekst  //
				// Laver et interval der køre indtil teksterne er færdig med at skifte plads. Den bargeste tekst starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tekst = document.getElementsByClassName("faktaboxIndhold");		
				let tidNyTekst = setInterval(NyTekst, 100);
				let tekst0 = 1;
				let tekst1 = 0;
		
					tekst[1].innerHTML =  "Den gennemsnitlige dansker smider i gennemsnit 845 kg husholdningsaffald ud om året. Derudover bliver omkring 40.000 tons dansk husholdningsaffald deponeret årligt, da ingen ved hvad man skal gøre ved det."
		
					function NyTekst() {
						if (tekst0 <= 0 || tekst1 >= 1) 
						{
							clearInterval(tidNyTekst);
						}
						else {
							tekst0-= 0.1;
							tekst1 += 0.1;
							tekst[0].style.opacity = tekst0;
							tekst[1].style.opacity = tekst1;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilTekst, 1000)
					function nulstilTekst() {
						tekst[0].innerHTML = "Den gennemsnitlige dansker smider i gennemsnit 845 kg husholdningsaffald ud om året. Derudover bliver omkring 40.000 tons dansk husholdningsaffald deponeret årligt, da ingen ved hvad man skal gøre ved det."
				}
		
		
			//  Tjekker hvilken side brugeren kommer fra. Hvis brugeren kommer fra skrald, så betyder det soterings ikonerne og pile var gemt, og de skal derfor vises (langsomt): Viser ikoner fra Soterings siden: Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og viser dem på skærmen  //
			var sideOverskrift = document.getElementById("overskrift");
			if (sideOverskrift.innerHTML.match("Sotering") ){
				
				let tidSoteringsElementer = setInterval(fjernSoteringsElementer, 50);
				let soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				let opacitySoteringsElementer = 1;
			
				
			
				function fjernSoteringsElementer() {
					if (opacitySoteringsElementer <= 0) 
						{
							clearInterval(tidSoteringsElementer);
							
							soteringsElementer[0].style.display = "none";
							soteringsElementer[1].style.display = "none";
							soteringsElementer[2].style.display = "none";
							soteringsElementer[3].style.display = "none";
							soteringsElementer[4].style.display = "none";
							soteringsElementer[5].style.display = "none";
						}
					else {
						opacitySoteringsElementer-= 0.1;

						soteringsElementer[0].style.opacity = opacitySoteringsElementer;
						soteringsElementer[1].style.opacity = opacitySoteringsElementer;
						soteringsElementer[2].style.opacity = opacitySoteringsElementer;
						soteringsElementer[3].style.opacity = opacitySoteringsElementer;
						soteringsElementer[4].style.opacity = opacitySoteringsElementer;
						soteringsElementer[5].style.opacity = opacitySoteringsElementer;
					
					}
				}
			}
		
			
			//  Skifter overskriften til at passe hvilken side brugeren er på. Dette sker efter 2. if statement, da den afhænger af overskriften fra forige side, hvilket koden her overskriver  //
			sideOverskrift.innerHTML = "Skrald";	
	
		
	}
}

//--------------------------------------------------------------------------- Sotering  -----------------------------------------------------------------------//

// Skifter til Soterings siden når brugeren trykker på soterings ikonet  //
function skiftTilSotering() {
	
	
	
	// Finder hvilket billede af skrald der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementsByClassName("skraldOverTid");
		if (billedeAfSkrald[1].src.match("Billeder/Skrald-over-tid/Skrald.png") ){
			
			
			
			
			
			
			// Tekst i faktabox: Skifter den bargereste tekst, til at være den nye tekst  //
				// Laver et interval der køre indtil teksterne er færdig med at skifte plads. Den bargeste tekst starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tekst = document.getElementsByClassName("faktaboxIndhold");		
				let tidNyTekst = setInterval(NyTekst, 100);
				let tekst0 = 1;
				let tekst1 = 0;
		
					tekst[1].innerHTML = "På genbrugsstationerne kan man aflevere fire forskellige plasttyper: Hård PVC, havemøbler, plastfolie og hård plast. Plasten sorteres og pakkes. Hver af plasttyperne sendes videre til forskellige anlæg, alt efter hvilken plasttype det anlæg specialiserer sig i. Plasten vaskes, tørres og findeles til granulat, som man kan lave nyt plast af."
		
					function NyTekst() {
						if (tekst0 <= 0 || tekst1 >= 1) 
						{
							clearInterval(tidNyTekst);
						}
						else {
							tekst0-= 0.1;
							tekst1 += 0.1;
							tekst[0].style.opacity = tekst0;
							tekst[1].style.opacity = tekst1;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilTekst, 1000)
					function nulstilTekst() {
						tekst[0].innerHTML = "På genbrugsstationerne kan man aflevere fire forskellige plasttyper: Hård PVC, havemøbler, plastfolie og hård plast. Plasten sorteres og pakkes. Hver af plasttyperne sendes videre til forskellige anlæg, alt efter hvilken plasttype det anlæg specialiserer sig i. Plasten vaskes, tørres og findeles til granulat, som man kan lave nyt plast af."
				}	
			
			
			
			
			
			
			
			
			
				
			//  Tjekker hvilken side brugeren kommer fra. Hvis brugeren kommer fra skrald, så betyder det soterings ikonerne og pile var gemt, og de skal derfor vises (langsomt): Viser ikoner fra Soterings siden: Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og viser dem på skærmen  //
			var sideOverskrift = document.getElementById("overskrift");
			if (sideOverskrift.innerHTML.match("Skrald") ){
				
				let tidSoteringsElementer = setInterval(visSoteringsElementer, 50);
				let soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				let opacitySoteringsElementer = 0;
			
				soteringsElementer[0].style.display = "block";
				soteringsElementer[1].style.display = "block";
				soteringsElementer[2].style.display = "block";
				soteringsElementer[3].style.display = "block";
				soteringsElementer[4].style.display = "block";
				soteringsElementer[5].style.display = "block";
			
				function visSoteringsElementer() {
					if (opacitySoteringsElementer >= 1) 
						{clearInterval(tidSoteringsElementer);}
					else {
						opacitySoteringsElementer+= 0.1;

						soteringsElementer[0].style.opacity = opacitySoteringsElementer;
						soteringsElementer[1].style.opacity = opacitySoteringsElementer;
						soteringsElementer[2].style.opacity = opacitySoteringsElementer;
						soteringsElementer[3].style.opacity = opacitySoteringsElementer;
						soteringsElementer[4].style.opacity = opacitySoteringsElementer;
						soteringsElementer[5].style.opacity = opacitySoteringsElementer;
					
					}
				}
			}
		
			
			//  Skifter overskriften til at passe hvilken side brugeren er på. Dette sker efter 2. if statement, da den afhænger af overskriften fra forige side, hvilket koden her overskriver  //
			sideOverskrift.innerHTML = "Sotering"		
	}			
}

//--------------------------------------------------------------------------- Sotering uden plast  -----------------------------------------------------------------------//

// Skifter til Soterings siden uden plast i affaldet, når brugeren trykker på plasr ikonet  //
function skiftTilIngenPlast() {
	
	// Finder hvilket billede af skrald der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementsByClassName("skraldOverTid");
	if (billedeAfSkrald[1].src.match("Billeder/Skrald-over-tid/Skrald.png") ){
		
		

	//                                    **Skift billeder**                                 //
	
	
		
				// Skrald: Skifter det bargereste billede, til det nye billede  //
				// Laver et interval der køre indtil billederne er færdig med at skifte plads. Det bargeste billede starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tidSkraldOpacity = setInterval(OpacitySkrald, 100);
				let opacitySkrald = 1;
				let opacitySkrald2 = 0;
		
					billedeAfSkrald[1].src = "Billeder/Skrald-over-tid/Skrald-uden-plast.png"
					function OpacitySkrald() {
						if (opacitySkrald <= 0 || opacitySkrald2 >= 1) 
						{
							clearInterval(tidSkraldOpacity);
						}
						else {
							opacitySkrald-= 0.1;
							opacitySkrald2 += 0.1;
							billedeAfSkrald[0].style.opacity = opacitySkrald;
							billedeAfSkrald[1].style.opacity = opacitySkrald2;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilBilledeAfSkrald, 1000)
					function nulstilBilledeAfSkrald() {
						billedeAfSkrald[0].src = "Billeder/Skrald-over-tid/Skrald.png"
						billedeAfSkrald[0].style.opacity = 1;
				}
					
			
				// Plast:  det bargereste billede, til det nye billede  //
				// Laver et interval der køre indtil billederne er færdig med at skifte plads. Det bargeste billede starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let billedeAfPlast = document.getElementsByClassName("plastOverTid")
					billedeAfPlast[0].style.display = "block";
					billedeAfPlast[1].style.display = "block";
				let tidPlastOpacity = setInterval(OpacityPlast, 100);
				let opacityPlast = 0;
		
					
					function OpacityPlast() {
						if (opacityPlast >= 1) 
						{
							clearInterval(tidPlastOpacity);
						}
						else {
							opacityPlast+= 0.1;
							billedeAfPlast[1].style.opacity = opacityPlast;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilBilledeAfPlast, 1000)
					function nulstilBilledeAfPlast() {
						billedeAfPlast[0].style.opacity = 1;
				}
	
	
				// Tekst i faktabox: Skifter den bargereste tekst, til at være den nye tekst  //
				// Laver et interval der køre indtil teksterne er færdig med at skifte plads. Den bargeste tekst starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tekst = document.getElementsByClassName("faktaboxIndhold");		
				let tidNyTekst = setInterval(NyTekst, 100);
				let tekst0 = 1;
				let tekst1 = 0;
		
					tekst[1].innerHTML = "På genbrugsstationerne kan man aflevere fire forskellige plasttyper: Hård PVC, havemøbler, plastfolie og hård plast. Plasten sorteres og pakkes. Hver af plasttyperne sendes videre til forskellige anlæg, alt efter hvilken plasttype det anlæg specialiserer sig i. Plasten vaskes, tørres og findeles til granulat, som man kan lave nyt plast af. "
		
					function NyTekst() {
						if (tekst0 <= 0 || tekst1 >= 1) 
						{
							clearInterval(tidNyTekst);
						}
						else {
							tekst0-= 0.1;
							tekst1 += 0.1;
							tekst[0].style.opacity = tekst0;
							tekst[1].style.opacity = tekst1;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilTekst, 1000)
					function nulstilTekst() {
						tekst[0].innerHTML = "På genbrugsstationerne kan man aflevere fire forskellige plasttyper: Hård PVC, havemøbler, plastfolie og hård plast. Plasten sorteres og pakkes. Hver af plasttyperne sendes videre til forskellige anlæg, alt efter hvilken plasttype det anlæg specialiserer sig i. Plasten vaskes, tørres og findeles til granulat, som man kan lave nyt plast af."
				}
	
	
	
	//                                    **Flytter**                                 //
	
	//*Skrald*//
		// Flytter skrald billedet(/billederne). //
		let tidSkrald = setInterval(flytSkrald, 15);
		let xVærdiSkrald = billedeAfSkrald[1].offsetLeft;
		
	
			function flytSkrald() {
				if (xVærdiSkrald == 155) 
				{
					clearInterval(tidSkrald);
					
				}
				else {
							xVærdiSkrald-= 5;
							billedeAfSkrald[0].style.left = xVærdiSkrald + "px";
							billedeAfSkrald[1].style.left = xVærdiSkrald + "px";
				}
			}
	
	//*Plast*//
		// Flytter plast ikonet på y-aksen//
		let yTidPlastIkon = setInterval(yFlytPlastIkon, 17);
		let yVærdiPlastIkon = document.getElementById("plastIkon").offsetTop;
	
			function yFlytPlastIkon() {
				if (yVærdiPlastIkon == 415) 
				{clearInterval(yTidPlastIkon);}
				else {
					yVærdiPlastIkon-= 5;
					document.getElementById("plastIkon").style.top = yVærdiPlastIkon + "px";
				}
			}
	
		// Flytter plast ikonet på x-aksen//
		let xTidPlastIkon = setInterval(xFlytPlastIkon, 17);
		let xVærdiPlastIkon = document.getElementById("plastIkon").offsetLeft;
	
			function xFlytPlastIkon() {
				if (xVærdiPlastIkon == 700) 
				{clearInterval(xTidPlastIkon);}
				else {
					xVærdiPlastIkon-= 5;
					document.getElementById("plastIkon").style.left = xVærdiPlastIkon + "px";
				}
			}
	
		// Skjuler plast pilen. //
		document.getElementById("plastPil").style.display = "none";
	
	
	//*Metal*//
		// Flytter metal ikonet på x-aksen//
		let xTidMetalIkon = setInterval(xFlytMetalIkon, 15);
		let xVærdiMetalIkon = document.getElementById("metalIkon").offsetLeft;
	
			function xFlytMetalIkon() {
				if (xVærdiMetalIkon == 425) 
				{clearInterval(xTidMetalIkon);}
				else {
					xVærdiMetalIkon-= 5;
					document.getElementById("metalIkon").style.left = xVærdiMetalIkon + "px";
				}
			}
	
		// Flytter metal pilen på x-aksen//
		let xTidMetalPil = setInterval(xFlytMetalPil, 15);
		let xVærdiMetalPil = document.getElementById("metalPil").offsetLeft;
	
			function xFlytMetalPil() {
				if (xVærdiMetalPil == 425) 
				{clearInterval(xTidMetalPil);}
				else {
					xVærdiMetalPil-= 5;
					document.getElementById("metalPil").style.left = xVærdiMetalPil + "px";
				}
			}
	
	
	//*Pap*//
		// Flytter pap ikonet på x-aksen//
		let xTidPapIkon = setInterval(xFlytPapIkon, 15);
		let xVærdiPapIkon = document.getElementById("papIkon").offsetLeft;
	
			function xFlytPapIkon() {
				if (xVærdiPapIkon == 335) 
				{clearInterval(xTidPapIkon);}
				else {
					xVærdiPapIkon-= 5;
					document.getElementById("papIkon").style.left = xVærdiPapIkon + "px";
				}
			}
	
		// Flytter pap pilen på x-aksen//
		let xTidPapPil = setInterval(xFlytPapPil, 15);
		let xVærdiPapPil = document.getElementById("papPil").offsetLeft;
	
			function xFlytPapPil() {
				if (xVærdiPapPil == 380) 
				{clearInterval(xTidPapPil);}
				else {
					xVærdiPapPil-= 5;
					document.getElementById("papPil").style.left = xVærdiPapPil + "px";
				}
			}
	
	
	//*Fakta box*//
		// Flytter Fakta boxen på x-aksen//
		let xTidFakta = setInterval(xFlytFakta, 10);
		let xVærdiFakta = document.getElementById("faktabox").offsetLeft;
	
			function xFlytFakta() {
				if (xVærdiFakta == 1400) 
				{clearInterval(xTidFakta);}
				else {
					xVærdiFakta+= 5;
					document.getElementById("faktabox").style.left = xVærdiFakta + "px";
				}
			}
		
		
		
		
			
			//*Tekst*//
			// Flytter Teksten(erne). //
			let leftTidTekstFlyt = setInterval(leftFlytTekst, 37);
			var leftTekst = 49;

				function leftFlytTekst() {
					if (leftTekst == 70) 
					{
						clearInterval(leftTidTekstFlyt);
					}
					else {
							leftTekst += 1;
							tekst[0].style.marginLeft = leftTekst + "%";
							tekst[1].style.marginLeft = leftTekst + "%";
					}
				}
		
			//*Tekst*//
			// Flytter Teksten(erne). //
			let rightTidTekstFlyt = setInterval(rightFlytTekst, 37);
			var rightTekst = 22;

				function rightFlytTekst() {
					if (rightTekst == 1) 
					{
						clearInterval(rightTidTekstFlyt);
					}
					else {
							rightTekst -= 1;
							tekst[0].style.marginRight = rightTekst + "%";
							tekst[1].style.marginRight = rightTekst + "%";
					}
				}
		
			
	
		
		
		
	}

}
		
		
	
	
//--------------------------------------------------------------------------- Omdanelse  -----------------------------------------------------------------------//

// Skifter til Omdanelse siden når brugeren trykker på Omdanelse ikonet //
function skiftTilOmdannelse() {

	
	// Finder hvilket billede af skrald og plast, der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementsByClassName("skraldOverTid");
	let billedeAfPlast  = document.getElementsByClassName("plastOverTid");
	if (billedeAfSkrald[1].src.match("Billeder/Skrald-over-tid/Skrald-uden-plast.png") && billedeAfPlast[1].src.match("Billeder/Xd-billeder/Soteret-Plast.png") ) {
		
		
		
		// Skifter overskriften til at være Omdannelse. //
		document.getElementById("overskrift").innerHTML = "Omdannelse"
		
		
		// Gemmer ikoner fra Soterings siden: Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og gemmer dem. //
			var soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				for (var i=1 ; i<soteringsElementer.length; i++){
  					soteringsElementer[i].style.display = "none";
				}
		
	// Plast:  det bargereste billede, til det nye billede  //
				// Laver et interval der køre indtil billederne er færdig med at skifte plads. Det bargeste billede starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tidPlastOpacity = setInterval(OpacityPlast, 100);
				let opacityPlast = 1;
				let opacityPlast2 = 0;
		
					billedeAfPlast[0].src = "Billeder/Xd-billeder/Plast-klar-til-genbrug.png";
					function OpacityPlast() {
						if (opacityPlast <= 0 || opacityPlast2 >= 1) 
						{
							clearInterval(tidPlastOpacity);
						}
						else {
							opacityPlast-= 0.1;
							opacityPlast2 += 0.1;
							billedeAfPlast[1].style.opacity = opacityPlast;
							billedeAfPlast[0].style.opacity = opacityPlast2;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilBilledeAfPlast, 1000)
					function nulstilBilledeAfPlast() {
						billedeAfPlast[1].src = "Billeder/Xd-billeder/Plast-klar-til-genbrug.png";
						billedeAfPlast[1].style.opacity = 1;
				}
		
		
		
		
				// Tekst i faktabox: Skifter den bargereste tekst, til at være den nye tekst  //
				// Laver et interval der køre indtil teksterne er færdig med at skifte plads. Den bargeste tekst starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tekst = document.getElementsByClassName("faktaboxIndhold");		
				let tidNyTekst = setInterval(NyTekst, 100);
				let tekst0 = 1;
				let tekst1 = 0;
		
					tekst[1].innerHTML = "Godt 30 % af plastaffaldet indsamles til genanvendelse, heraf skønnes mindre end 50 % reelt genanvendt. En del af plastaffaldet, ca 1,5-4 % af verdens plastproduktion, havner i vores have. I havet ender plastaffaldet på verdens strande, nedbrydes til mikroplast eller danner store 'øer' af plast."
		
					function NyTekst() {
						if (tekst0 <= 0 || tekst1 >= 1) 
						{
							clearInterval(tidNyTekst);
						}
						else {
							tekst0-= 0.1;
							tekst1 += 0.1;
							tekst[0].style.opacity = tekst0;
							tekst[1].style.opacity = tekst1;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilTekst, 1000)
					function nulstilTekst() {
						tekst[0].innerHTML = "Godt 30 % af plastaffaldet indsamles til genanvendelse, heraf skønnes mindre end 50 % reelt genanvendt. En del af plastaffaldet, ca 1,5-4 % af verdens plastproduktion, havner i vores have. I havet ender plastaffaldet på verdens strande, nedbrydes til mikroplast eller danner store 'øer' af plast."
				}
		
		
		
		
		
		
		
		
	}
}
	


//--------------------------------------------------------------------------- Genadvendelse  -----------------------------------------------------------------------//

// Skifter til Genadvendelse siden når brugeren trykker på Genadvendelse ikonet //
function skiftTilGenadvendelse() {

	
	// Finder hvilket billede af skrald og plast, der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementsByClassName("skraldOverTid");
	let billedeAfPlast  = document.getElementsByClassName("plastOverTid");
	if (billedeAfSkrald[1].src.match("Billeder/Skrald-over-tid/Skrald-uden-plast.png") && billedeAfPlast[1].src.match("Billeder/Xd-billeder/Plast-klar-til-genbrug.png") ) {
		
		// Skifter billedet af soteret plast til et plastikflaske, tilpasser billedets størelse, og skifter også overskriften til at være Genadvendelse. //
		
		
		document.getElementById("overskrift").innerHTML = "Genadvendelse"
		
		
		
		//                                    **Skift billeder**                                 //
		
		
		
		// Plast:  det bargereste billede, til det nye billede  //
				// Laver et interval der køre indtil billederne er færdig med at skifte plads. Det bargeste billede starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tidPlastOpacity = setInterval(OpacityPlast, 100);
				let opacityPlast = 1;
				let opacityPlast2 = 0;
		
					billedeAfPlast[1].src = "Billeder/Xd-billeder/Plastik-flaske.png";
					billedeAfPlast[1].width = "127"
					billedeAfPlast[1].height = "439"
					
		
					function OpacityPlast() {
						if (opacityPlast <= 0 || opacityPlast2 >= 1) 
						{
							clearInterval(tidPlastOpacity);
						}
						else {
							opacityPlast-= 0.1;
							opacityPlast2 += 0.1;
							billedeAfPlast[0].style.opacity = opacityPlast;
							billedeAfPlast[1].style.opacity = opacityPlast2;
						}
					}
		
				// Nustile billedet så det ligner billedet foran. setTimeout venter 200 ms længere, fordi det bagereste billede først skal nå at gemme sig bag det foreste  //
				setTimeout(nulstilBilledeAfPlast, 1200)
					function nulstilBilledeAfPlast() {
						billedeAfPlast[0].width = "127"
						billedeAfPlast[0].height = "439"
						billedeAfPlast[0].src = "Billeder/Xd-billeder/Plastik-flaske.png";
						billedeAfPlast[0].style.opacity = 1;
				}
		
		
		
		
				// Tekst i faktabox: Skifter den bargereste tekst, til at være den nye tekst  //
				// Laver et interval der køre indtil teksterne er færdig med at skifte plads. Den bargeste tekst starter med at have 0 i opacity og det forreste har 1. Bargeste går op og forest ned  //
				let tekst = document.getElementsByClassName("faktaboxIndhold");		
				let tidNyTekst = setInterval(NyTekst, 100);
				let tekst0 = 1;
				let tekst1 = 0;
		
					tekst[1].innerHTML = "8,3 mio. tons plast er der ialt produceret på verdensplan. Kun 1 procent af plasten skønnes at være blevet genanvendt mere end 1 gang. Derfor er det meget vigtigt at sorterer plasten, og derfor bliver plast en af de typer affald Waste Treatment vil arbejde med."
		
					function NyTekst() {
						if (tekst0 <= 0 || tekst1 >= 1) 
						{
							clearInterval(tidNyTekst);
						}
						else {
							tekst0-= 0.1;
							tekst1 += 0.1;
							tekst[0].style.opacity = tekst0;
							tekst[1].style.opacity = tekst1;
						}
					}
		
				// Nustile billedet så det ligner billedet foran  //
				setTimeout(nulstilTekst, 1000)
					function nulstilTekst() {
						tekst[0].innerHTML = "8,3 mio. tons plast er der ialt produceret på verdensplan. Kun 1 procent af plasten skønnes at være blevet genanvendt mere end 1 gang. Derfor er det meget vigtigt at sorterer plasten, og derfor bliver plast en af de typer affald Waste Treatment vil arbejde med."
				}
		
		
		
		//                                    **Flytter**                                 //
	
		//*Skrald*//
			// Flytter skrald billedet. Heri gemmer den det bagereste billede imens de flyttes. Ellers//
			let tidSkrald = setInterval(flytSkrald, 15);
			let xVærdiSkrald = billedeAfSkrald[1].offsetLeft;
			billedeAfSkrald[0].style.opacity=0;
			billedeAfSkrald[1].style.opacity=1;
	
				function flytSkrald() {
					if (xVærdiSkrald == 250) 
					{
						clearInterval(tidSkrald);
						billedeAfSkrald[0].style.opacity=1;
					}
					else {
						xVærdiSkrald+= 5;
						billedeAfSkrald[0].style.left = xVærdiSkrald + "px";
						billedeAfSkrald[1].style.left = xVærdiSkrald + "px";
					}
				}
		
		
		//*Plast*//
			// Flytter plast billedet på y-aksen//
			let yTidPlastBilledet = setInterval(yFlytPlastBilledet, 20);
			let yVærdiPlastBilledet = billedeAfPlast[1].offsetTop;
	
				function yFlytPlastBilledet() {
					if (yVærdiPlastBilledet == 375) 
					{
						clearInterval(yTidPlastBilledet);
						
						// Venter med at flytte det bagereste billede. Vanflasken og plast forbrikken er 2 vit forskelige størelse, derfor bliver frabriken nød til at forsvine helt inden man kan flytte på den//
						setTimeout(yflytBageresteBillede, 1000)
						function yflytBageresteBillede(){
							billedeAfPlast[0].style.top = yVærdiPlastBilledet + "px"
						}
					}
					else {
						yVærdiPlastBilledet-= 5;
						billedeAfPlast[1].style.top = yVærdiPlastBilledet + "px";
					}
				}
		
		
		
		
		
		
		
			// Flytter plast billedet på x-aksen//
			let xTidPlastBilledet = setInterval(xFlytPlastBilledet, 15);
			let xVærdiPlastBilledet = billedeAfPlast[1].offsetLeft;
	
				function xFlytPlastBilledet() {
					if (xVærdiPlastBilledet == 895) 
					{
						clearInterval(xTidPlastBilledet);
						
						// Venter med at flytte det bagereste billede. Vanflasken og plast forbrikken er 2 vit forskelige størelse, derfor bliver frabriken nød til at forsvine helt inden man kan flytte på den//
						setTimeout(xflytBageresteBillede, 500)
						function xflytBageresteBillede(){
							billedeAfPlast[0].style.left = xVærdiPlastBilledet + "px"
						}
											
					}
					else {
						xVærdiPlastBilledet+= 5;
						billedeAfPlast[1].style.left = xVærdiPlastBilledet + "px";
					}
				}
		
			// Flytter plast ikonet på y-aksen//
			let yTidPlastIkon = setInterval(yFlytPlastIkon, 25);
			let yVærdiPlastIkon = document.getElementById("plastIkon").offsetTop;
	
				function yFlytPlastIkon() {
					if (yVærdiPlastIkon == 380) 
					{clearInterval(yTidPlastIkon);}
					else {
						yVærdiPlastIkon-= 5;
						document.getElementById("plastIkon").style.top = yVærdiPlastIkon + "px";
					}
				}
	
			// Flytter plast ikonet på x-aksen//
			let xTidPlastIkon = setInterval(xFlytPlastIkon, 17);
			let xVærdiPlastIkon = document.getElementById("plastIkon").offsetLeft;
	
				function xFlytPlastIkon() {
					if (xVærdiPlastIkon == 870) 
					{clearInterval(xTidPlastIkon);}
					else {
						xVærdiPlastIkon+= 5;
						document.getElementById("plastIkon").style.left = xVærdiPlastIkon + "px";
					}
				}
		
		
		
		//*Fakta box*//
			// Flytter Fakta boxen på x-aksen//
			let xTidFakta = setInterval(xFlytFakta, 10);
			let xVærdiFakta = document.getElementById("faktabox").offsetLeft;
	
				function xFlytFakta() {
					if (xVærdiFakta == 1160) 
					{clearInterval(xTidFakta);}
					else {
						xVærdiFakta-= 5;
						document.getElementById("faktabox").style.left = xVærdiFakta + "px";
					}
				}
		
		
		
		
			
			//*Tekst*//
			// Flytter Teksten(erne). //
			let leftTidTekstFlyt = setInterval(leftFlytTekst, 37);
			var leftTekst = 70;

				function leftFlytTekst() {
					if (leftTekst == 57) 
					{
						clearInterval(leftTidTekstFlyt);
					}
					else {
							leftTekst -= 1;
							tekst[0].style.marginLeft = leftTekst + "%";
							tekst[1].style.marginLeft = leftTekst + "%";
					}
				}
		
			//*Tekst*//
			// Flytter Teksten(erne). //
			let rightTidTekstFlyt = setInterval(rightFlytTekst, 37);
			var rightTekst = 1;

				function rightFlytTekst() {
					if (rightTekst == 13) 
					{
						clearInterval(rightTidTekstFlyt);
					}
					else {
							rightTekst += 1;
							tekst[0].style.marginRight = rightTekst + "%";
							tekst[1].style.marginRight = rightTekst + "%";
					}
				}
		
			
		
		
		
		
		
	}
}













//--------------------------------------------------------------------------- Tekst delen  -----------------------------------------------------------------------//


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