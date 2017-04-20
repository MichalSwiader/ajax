'use strict';

$(document).ready( function () {
	
	var win = $(window);

	win.scroll(function() {
		
//		console.log($(document).height(), $(window).height(), $(window).scrollTop());
		
		 if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			console.log("Dojechałem do końca okna");
			
			var begin = document.createElement('p');
			begin.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br>------BEGIN-----";
			document.body.appendChild(begin); 
			 
			$.getJSON("https://jsonplaceholder.typicode.com/users",
				function (data) {
				
				for (var i = 0; i < data.length; i++) {
					console.log(data[i]);
					var pUserId = document.createElement('p');
					var pUserName = document.createElement('p');
					var pUserWebsite = document.createElement('p');
					
					pUserId.innerHTML = "User ID: " + data[i].id;
					pUserName.innerHTML = "User Name: " + data[i].name;
					pUserWebsite.innerHTML = "User URL: http://" + data[i].website + '<br />--------------------';

					document.body.appendChild(pUserId);
					document.body.appendChild(pUserName);
					document.body.appendChild(pUserWebsite);					
				}
				
				var end = document.createElement('p');
				end.innerHTML = "------END-----";
				document.body.appendChild(end);
	
			});
				
		
		}
	});
});
	
