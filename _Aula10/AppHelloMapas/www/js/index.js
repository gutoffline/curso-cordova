function PegarPosicao() {
	var options = {
		enableHighAccuracy: true,
		maximumAge: 3600000
	}
	var watchID = navigator.geolocation.getCurrentPosition(Sucesso, Erro, options);

	function Sucesso(position) {
		alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: '  + position.coords.longitude);
		var longitude = position.coords.longitude;
		var latitude = position.coords.latitude;
		var latLong = new google.maps.LatLng(latitude, longitude);
		
		var mapOptions = {
			center: latLong,
			zoom: 20,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
		var marker = new google.maps.Marker({
			position: latLong,
			map: map,
			title: 'my location'
		});

	};

	function Erro(error) {
		alert('codigo: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	}
 }

	

