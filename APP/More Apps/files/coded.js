/*
 ***************************************
*		 * CODED FRAMEWORK *  			*
*	DEVELOPED BY: CASTERO - KUMASI		*
*										*
*			  AKA: CODED				*
 ***************************************
*/

//appversion
 function appversion (){
	 version = "1.1";
	 return version;
 }

//showhelpInfo
 function showhelpInfo () {
     document.getElementById("help").style.display = "block";
window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
};

//moreAppslocal
 function moreApps () {
    window.location.assign("market://search?q=pub:Castero Apps");
};

//moreAppsonline
 function moreAppsonline () {
	document.getElementById("moreappsonline").click();
};