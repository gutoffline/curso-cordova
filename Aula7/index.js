function dialogAlert(){
    var texto = "Fique sempre alerta";
    var titulo = "ALERTA";
    var botaoTexto = "Botão do alerta";
    
    navigator.notification.alert(texto, funcaoRetorno, titulo, botaoTexto);
    
    function funcaoRetorno(){
        alert("Você foi avisado!");
    }
}

function dialogConfirm(){
    var texto = "Você está com fome?";
    var titulo="FOME";
    var nomeBotoes="SIM,NÃO,TALVEZ";
    navigator.notification.confirm(texto, funcaoRetorno, titulo, nomeBotoes);
    
    function funcaoRetorno(botao){
        alert("você apertou o botão " + botao + " !");
        if(botao == 1){
            alert("Você está com fome");
        }else if(botao == 2){
            alert("Você não está com fome");
        }else if(botao == 3){
            alert("Você não sabe se \nestá com fome");
        }
    }
}

// cordova run android





