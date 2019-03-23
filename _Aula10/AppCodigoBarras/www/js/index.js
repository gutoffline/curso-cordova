function scan(){
	cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("O código de barras foi lido \n" +
					"Resultado: " + result.text + "\n" +
					"Formato: " + result.format);
			  document.getElementById("lista").innerHTML += "<li>" + result.text + "</li>";
			  if(result.format == "QR_CODE"){
				openURL(result.text);
			  }
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	 );
}

function openURL(url)
{
	window.open(url, '_blank', 'location=yes');
}