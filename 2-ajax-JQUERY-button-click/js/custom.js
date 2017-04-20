'use strict';

$(document).ready( function () {
	
	$('#pobierz-dane').click( function () {
		
		// pierwszy sposob $.getJSON
		$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
				 function (data) {
			
			// wyswietl w konsoli
			console.log(data);
		});
		
//		// drugi sposob $.ajax
//        $.ajax ({
//            url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//            dataType: 'json',
//            success: function (resultJSON) {
//
//                /*
//                !!! Nie parsujemy do postaci obiektu JSON, bo od razu taki obiekt dostajemy w odpowiedzi !!!
//                var jsonObj = JSON.parse(resultJSON);
//                */
//
//                console.log(resultJSON);
//
//                var pUserId = document.createElement('p');
//                var pUserName = document.createElement('p');
//                var pUserURL = document.createElement('p');
//
//                pUserId.innerHTML = "User ID: " + resultJSON.userId;
//                pUserName.innerHTML = "User Name: " + resultJSON.userName;
//                pUserURL.innerHTML = "User URL: http://" + resultJSON.userURL;
//
//                document.body.appendChild(pUserId);
//                document.body.appendChild(pUserName);
//                document.body.appendChild(pUserURL);
//            },
//			
//            onerror: function (msg) {
//                console.log(msg);
//            }
//        });		
			
	})
		
})
	