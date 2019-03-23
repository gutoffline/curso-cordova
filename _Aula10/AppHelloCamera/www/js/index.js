function Foto() { 
	navigator.camera.getPicture(Sucesso, Erro, {  
		quality: 50, 
		destinationType: Camera.DestinationType.DATA_URL 
	});  
	
	function Sucesso(imageData) { 
		var image = document.getElementById('MinhaImagem'); 
		image.src = "data:image/jpeg;base64," + imageData; 
	}  
	
	function Erro(message) { 
		alert('Erro: ' + message); 
	} 
}