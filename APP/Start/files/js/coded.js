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
	 version = "1.0";
	 return version;
 }

 //codedOnlineCounter
 function codedOnline (){
	 status = "unknown";
	 return status;
 }


function checkAndroidVersion (){
var ua = navigator.userAgent;

if( ua.indexOf("Android") >= 0 )

{

  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 

  //if (androidversion < 2.3)
	
  if (androidversion < 3.0)

  {
	
document.getElementById('android-styles').href='files/styles/style-old.css';

  };
}
};

//codedOnlineStatus
function codedOnlineStatus (){
	if (codedOnline () === "unknown"){
		
		alert("This App requires an Internet Connection to work properly.. \n\nYour internet is either too slow or disconnected. \n\nSO please check your Internet or Mobile Data in case of any difficulties.");
	};
		};	
  
//netStatus

	var netquery = "unknown";
	var	netState = "unknown";

	function netStatus (){  
	
		if (netquery == true) {
				netState = true;
			return netState;
		}
		else if (netquery == false){
				netState = false;
			return netState;
		}
		else {
			netState = "unknown";			
		}
	};
	
		
//lunchHowtolove
function lunchHowtolove (){
	netStatus ();
	
		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://html31342';
	};	

//lunchLovephotos
function lunchLovephotos (){
	netStatus ();
	
		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://rss72011';
	};	
	
//lunchQuestionsandans
function lunchQuestionsandans (){
	netStatus ();
	
		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://website324748';
//		if (netState === "unknown") {netBusy ();};
	};	

//lunchLovelessons
function lunchLovelessons (){
	netStatus ();
	
		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://website324692';
//		if (netState === "unknown") {netBusy ();};
	};	

//lunchLovequotes
function lunchLovequotes (){
	netStatus ();
			
		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://website324691';
//		if (netState === "unknown") {netBusy ();};
	};
	
//lunchBonus
function lunchBonus (){
	netStatus ();

		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://website324694';
//		if (netState === "unknown") {netBusy ();};
	};	
	
//supportusFuction
function supportusFuction(){
		// if (confirm("Please the development of this Software is very sophisticated. \n\nBut we are always working hard to develop and add more functions into this App, So please support us by Donating any amount you can afford to us. \n\nClick OK to Donate now!") === true) {
		
		netStatus ();

		if (netState === false) {netErrorMsg ();};
		window.location.href = 'andromo://website324696';
//		if (netState === "unknown") {netBusy ();};
		
		// };
	};	

//checkInternet
  function checkInternet () {	  
		  $.ajax({
			url: 'https://googledrive.com/host/0Bza6aGOSE4uJeVdoUkpwbnJjbEk/netquery.coded',
//			url: 'https://googledrive.com/host/0Bza6aGOSE4uJeVdoUkpwbnJjbEk/dot.jpg',
			crossDomain: 'true',
			type: 'get',
			success: function(result){
				netquery = true;
			return checkInternet;
			},     
             
			error: function(result){
					netquery = false;
			return checkInternet;
			}
		  });
  };


//netBusy
	function netBusy (){  
  		alert("Please wait a minute.. Internet too slow. System still working.. \n\nOr you can also check your internet connection and reload this App again.");	
	};

//netErrorMsg
	function netErrorMsg (){  
  		alert("This App requires an Internet Connection to work properly.. \n\nSO please check your Internet or Mobile Data and reload this App again.");
	};

	
/*

//checkInternet
function checkInternet (){
	internet = navigator.onLine;
	
	if (internet == false) {
		alert("This App requires an Internet Connection to work properly.. \n\nSO please check your Internet or Mobile Data");
		return false;
	}
	
	else {
		return true;
	}
		};
*/
