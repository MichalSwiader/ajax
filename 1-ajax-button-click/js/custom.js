'use strict';

// definicja funkcji ajax
function ajax (ajaxOptions) {
	
	// parametry polaczenia i jego typu
	var ajaxOptions = {
		type: ajaxOptions.type || "POST",
		url: ajaxOptions.url || "",
		onComplete: ajaxOptions.onComplete || function () {},
		onError: ajaxOptions.onError || function () {},
		onSuccess: ajaxOptions.onSuccess || function () {},
		dataType: ajaxOptions.dataType || "text"
	}
	
	// funkcja sprawdzajaca czy polaczenie sie udalo
	function httpSuccess( httpRequest) {
		try {
			return (httpRequest.status >= 200 && httpRequest.status < 300 ||
			 httpRequest.status == 304 ||
			 navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
		} catch (event) {
			return false;
		}
	}
	
	// utworzenie obiektu
	var httpReq = new XMLHttpRequest ();
	
	// otwarcie polaczenia
	httpReq.open(ajaxOptions.type, ajaxOptions.url, true);
	
	// jesli stan dokumentu zostal zmieniony -> httpReq.readyState
	//  0: polaczenie nienawiazane
	//	1: polaczenie nawiazane
	//	2: żądanie odebrane
	//	3: przetwarzanie
	//	4: dane zwrócone i gotowe do użycia	
	httpReq.onreadystatechange = function () {
		
		// jesli 4: dane zwrocone i gotowe do uzycia
		if (httpReq.readyState == 4) {
			
			// sprawdz status polaczenia
			if ( httpSuccess( httpReq ) ) {
				// jesli dane w formacie XML wo zwroc obiekt returnXML, w przeciwnym razie responseText (JSON to tekst)
				var returnData = (ajaxOptions.dataType == "xml")? httpReq.responseXML : httpReq.responseText;
				
				// jesli wszystko OK
				ajaxOptions.onSuccess( returnData );
				
				// zeruj obiekt zeby nie utrzymywac niepotrzebnego juz polaczenia z serwerem
				httpReq = null;
				
			} else {
				
				// w przypadku bledu
				ajaxOptions.onError( httpReq.statusText );
			}
			
		}		
		
	}
	
	httpReq.send();	
};

function pobierzDane (event) {
	event.preventDefault();
	
//	console.log("Działa");
	
	ajax( {
		type: "GET",
		url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
		onError: function ( msg ) {
			console.log ( msg );		
		},
		
		onSuccess: function ( response ) {
			
			console.log('połączenie działa i dane są pobierane :)');
			
			var jsonObj = JSON.parse( response );
			console.log(jsonObj);
			
			var pUserId = document.createElement('p');
			var pUserName = document.createElement('p');
			var pUserURL = document.createElement('p');
			
			pUserId.innerHTML = "User ID: " + jsonObj.userId;
			pUserName.innerHTML = "User Name: " + jsonObj.userName;
			pUserURL.innerHTML = "User URL: http://" + jsonObj.userURL + "<br>---------------------";
			
			document.body.appendChild(pUserId);
			document.body.appendChild(pUserName);
			document.body.appendChild(pUserURL);
		}		
	});
	
};