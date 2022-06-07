// JavaScript Document



//---------------------------------------------------------------------------   -----------------------------------------------------------------------//


// Skifter til Skrald siden når brugeren trykker på skrald ikonet //
function skiftTilSkrald() {
	
	// Finder hvilket billede af skrald der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementById("skraldOverTid");
	if (billedeAfSkrald.src.match("Billeder/Xd-billeder/Forbrugs-produkter.png") || billedeAfSkrald.src.match("Billeder/Xd-billeder/Skrald.png") ){
			
			//  Skifter billedet og overskriften til at passe hvilken side brugeren er på  //
			
			document.getElementById("overskrift").innerHTML = "Skrald";
			
			
			// Går igennem alle elmenter (ikoner og pile) der er tilæknyttet klassen "soteringsIkonerOgPile" og gemmer dem væk. //
			var soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				for (var i=0 ; i<soteringsElementer.length; i+=1){
  					soteringsElementer[i].style.display = "none";
				}
			
			
		//                                    **Langsom skifter billede**                                 //	
		
		//*Skrald*//
			
			let tidSkraldOpacity = setInterval(OpacitySkrald, 100);
			let opacitySkrald = 1;
	
				function OpacitySkrald() {
					if (opacitySkrald <= 0) 
					{
						clearInterval(tidSkraldOpacity);
					}
					else {
						opacitySkrald-= 0.1;
						document.getElementById("skraldOverTid").style.opacity = opacitySkrald;
					}
				}
		
		
			setTimeout(skiftSkrald, 1000);
		
			function skiftSkrald() {
				billedeAfSkrald.src = "Billeder/Xd-billeder/Skrald.png";
			
			
			let tidSkraldOpacity2 = setInterval(OpacitySkrald2, 100);
				let opacitySkrald2 = 0;
	
					function OpacitySkrald2() {
						if (opacitySkrald2 >= 1) 
						{clearInterval(tidSkraldOpacity2);}
						else {
							opacitySkrald2 += 0.1;
							document.getElementById("skraldOverTid").style.opacity = opacitySkrald2;
						}
					}
		}
	}
	
	
	
	

	
	
	
    

        
	
	
		
	
	
	
	
		
		
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
}



// Skifter til Soterings siden når brugeren trykker på soterings ikonet  //
function skiftTilSotering() {
	
	// Finder hvilket billede af skrald der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementById("skraldOverTid");
		if (billedeAfSkrald.src.match("Billeder/Xd-billeder/Skrald.png") ){
				
			//  Skifter overskriften til at passe hvilken side brugeren er på  //
			document.getElementById("overskrift").innerHTML = "Sotering"
				
			
			// Viser ikoner fra Soterings siden: Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og viser dem på skærmen. //
			var soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				for (var i=0 ; i<soteringsElementer.length; i++){
  					soteringsElementer[i].style.display = "block";
				}
		}			
}


// Skifter til Soterings siden uden plast i affaldet, når brugeren trykker på plasr ikonet  //
function skiftTilIngenPlast() {
	
	// Skifter billedet af skrald til det samme billede, men uden plast; og viser så billede af soteret plast //
	let billedeAfSkrald = document.getElementById("skraldOverTid");
		billedeAfSkrald.src = "Billeder/Xd-billeder/Skrald-uden-plastik.png";
		document.getElementById("plastOverTid").style.display = "block";
	
	
	//                                    **Flytter**                                 //
	
	//*Skrald*//
		// Flytter skrald billedet. //
		let tidSkrald = setInterval(flytSkrald, 15);
		let xVærdiSkrald = document.getElementById("skraldOverTid").offsetLeft;
	
			function flytSkrald() {
				if (xVærdiSkrald == 100) 
				{clearInterval(tidSkrald);}
				else {
					xVærdiSkrald-= 5;
					document.getElementById("skraldOverTid").style.left = xVærdiSkrald + "px";
				}
			}
	
	
	//*Plast*//
		// Flytter plast ikonet på y-aksen//
		let yTidPlastIkon = setInterval(yFlytPlastIkon, 10);
		let yVærdiPlastIkon = document.getElementById("plastIkon").offsetTop;
	
			function yFlytPlastIkon() {
				if (yVærdiPlastIkon == 420) 
				{clearInterval(yTidPlastIkon);}
				else {
					yVærdiPlastIkon-= 5;
					document.getElementById("plastIkon").style.top = yVærdiPlastIkon + "px";
				}
			}
	
		// Flytter plast ikonet på x-aksen//
		let xTidPlastIkon = setInterval(xFlytPlastIkon, 10);
		let xVærdiPlastIkon = document.getElementById("plastIkon").offsetLeft;
	
			function xFlytPlastIkon() {
				if (xVærdiPlastIkon == 710) 
				{clearInterval(xTidPlastIkon);}
				else {
					xVærdiPlastIkon+= 5;
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
				if (xVærdiMetalIkon == 400) 
				{clearInterval(xTidMetalIkon);}
				else {
					xVærdiMetalIkon-= 5;
					document.getElementById("metalIkon").style.left = xVærdiMetalIkon + "px";
				}
			}
	
		// Flytter metal ikonet på x-aksen//
		let xTidMetalPil = setInterval(xFlytMetalPil, 15);
		let xVærdiMetalPil = document.getElementById("metalPil").offsetLeft;
	
			function xFlytMetalPil() {
				if (xVærdiMetalPil == 400) 
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
				if (xVærdiPapIkon == 630) 
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
				if (xVærdiPapPil == 530) 
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
}


// Skifter til Skrald siden når brugeren trykker på skrald ikonet //
function skiftTilOmdannelse() {

	
	// Finder hvilket billede af skrald og plast, der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementById("skraldOverTid");
	let billedeAfPlast  = document.getElementById("plastOverTid");
	if (billedeAfSkrald.src.match("Billeder/Xd-billeder/Skrald-uden-plastik.png") && billedeAfPlast.src.match("Billeder/Xd-billeder/Soteret-Plast.png") ) {
		
		// Skifter billedet af soteret plast til omdannet plast, og skifter også overskriften til at være Omdannelse. //
		billedeAfPlast.src = "Billeder/Xd-billeder/Plast-klar-til-genbrug.png";
		document.getElementById("overskrift").innerHTML = "Omdannelse"
		
		
		// Gemmer ikoner fra Soterings siden: Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og gemmer dem. //
			var soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				for (var i=1 ; i<soteringsElementer.length; i++){
  					soteringsElementer[i].style.display = "none";
				}
		
	}
}


// Skifter til Genadvendelse siden når brugeren trykker på Genadvendelse ikonet //
function skiftTilGenadvendelse() {

	
	// Finder hvilket billede af skrald og plast, der er på siden nu. Hvis det er det rigtige billede iforhold til at forsætte "spillet", så eksekveres koden //
	let billedeAfSkrald = document.getElementById("skraldOverTid");
	let billedeAfPlast  = document.getElementById("plastOverTid");
	if (billedeAfSkrald.src.match("Billeder/Xd-billeder/Skrald-uden-plastik.png") && billedeAfPlast.src.match("Billeder/Xd-billeder/Plast-klar-til-genbrug.png") ) {
		
		// Skifter billedet af soteret plast til et plastikflaske, tilpasser billedets størelse, og skifter også overskriften til at være Genadvendelse. //
		billedeAfPlast.src = "Billeder/Xd-billeder/Plastik-flaske.png";
			billedeAfPlast.width = "127"
			billedeAfPlast.height = "439"
		document.getElementById("overskrift").innerHTML = "Genadvendelse"
		
		
		//                                    **Flytter**                                 //
	
		//*Skrald*//
			// Flytter skrald billedet. //
			let tidSkrald = setInterval(flytSkrald, 15);
			let xVærdiSkrald = document.getElementById("skraldOverTid").offsetLeft;
	
				function flytSkrald() {
					if (xVærdiSkrald == 250) 
					{clearInterval(tidSkrald);}
					else {
						xVærdiSkrald+= 5;
						document.getElementById("skraldOverTid").style.left = xVærdiSkrald + "px";
					}
				}
		
		
		//*Plast*//
			// Flytter plast billedet på y-aksen//
			let yTidPlastBilledet = setInterval(yFlytPlastBilledet, 20);
			let yVærdiPlastBilledet = document.getElementById("plastOverTid").offsetTop;
	
				function yFlytPlastBilledet() {
					if (yVærdiPlastBilledet == 375) 
					{clearInterval(yTidPlastBilledet);}
					else {
						yVærdiPlastBilledet-= 5;
						document.getElementById("plastOverTid").style.top = yVærdiPlastBilledet + "px";
					}
				}
		
			// Flytter plast billedet på x-aksen//
			let xTidPlastBilledet = setInterval(xFlytPlastBilledet, 15);
			let xVærdiPlastBilledet = document.getElementById("plastOverTid").offsetLeft;
	
				function xFlytPlastBilledet() {
					if (xVærdiPlastBilledet == 895) 
					{clearInterval(xTidPlastBilledet);}
					else {
						xVærdiPlastBilledet+= 5;
						document.getElementById("plastOverTid").style.left = xVærdiPlastBilledet + "px";
					}
				}
		
			// Flytter plast ikonet på y-aksen//
			let yTidPlastIkon = setInterval(yFlytPlastIkon, 20);
			let yVærdiPlastIkon = document.getElementById("plastIkon").offsetTop;
	
				function yFlytPlastIkon() {
					if (yVærdiPlastIkon == 385) 
					{clearInterval(yTidPlastIkon);}
					else {
						yVærdiPlastIkon-= 5;
						document.getElementById("plastIkon").style.top = yVærdiPlastIkon + "px";
					}
				}
	
			// Flytter plast ikonet på x-aksen//
			let xTidPlastIkon = setInterval(xFlytPlastIkon, 15);
			let xVærdiPlastIkon = document.getElementById("plastIkon").offsetLeft;
	
				function xFlytPlastIkon() {
					if (xVærdiPlastIkon == 900) 
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
	}
}













//--------------------------------------------------------------------------- Skabelon  -----------------------------------------------------------------------//

//   //
function skabelon() {
	
	let sideOverskrift = document.getElementById("overskrift")
	var billedeAfSkrald = document.getElementById("skraldOverTid");
	
		if (sideOverskrift.innerHTML.match("Forbrug") && billedeAfSkrald.src.match("Billeder/Xd-billeder/Forbrugs-produkter.png")){
			
			sideOverskrift.innerHTML = "Skrald"
			billedeAfSkrald.src = "Billeder/Xd-billeder/Skrald.png";
			billedeAfSkrald.width = "100";
			billedeAfSkrald.height = "100";
			billedeAfSkrald.style.top = "0px";
			billedeAfSkrald.src = "Billeder/Xd-billeder/Skrald.png";
			
			// Går igennem alle elmenter der er tilæknyttet klassen "soteringsIkonerOgPile" og viser dem på skærmen. 
			var soteringsElementer = document.getElementsByClassName("soteringsIkonerOgPile");
				for (var i=0 ; i<soteringsElementer.length; i+=1){
  					soteringsElementer[i].style.display = "block";
				}
		}		
}