document.addEventListener("deviceReady", dispositivoPronto, false);
function dispositivoPronto(){
    alert("Dispositivo disponível");
}

document.addEventListener("pause", segundoPlano, false);
function segundoPlano(){
    Alert("App em segundo plano");
}

document.addEventListener("resume", primeiroPlano, false);
function primeiroPlano(){
    alert("App de volta.");
}

document.addEventListener("backButton", botaoVoltar, false);
function botaoVoltar(){
    alert("Apertou o voltar");
}

document.addEventListener("volumedownbutton", diminuirVolume, false);
function diminuirVolume(){
    alert("Diminuir Volume");
}

document.addEventListener("volumeupbutton", aumentarVolume, false);
function aumentarVolume(){
    alert("Aumentar Volume");
}

// cordova plugin add cordova-plugin-screen-orientation
window.addEventListener("orientationchange", orientacaoTela);
function orientacaoTela(){
    alert("Posição: " + screen.orientation.type);
    if(screen.orientation.type == "landscape-secondary"){
        alert("Deitado");
    }else if(screen.orientation.type == "landscape-primary"){
        alert("Deitado");
    }else if(screen.orientation.type == "portrait-primary"){
        alert("De pé");
    }else if(screen.orientation.type == "portrait-secondary"){
        alert("De pé");
    }
}   


//cordova plugin add cordova-plugin-network-information
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

function onOffline() {
   alert('Você está offline');
}

function onOnline() {
   alert('Você está online!');
    informacoesDeRede();
}

function informacoesDeRede() {
   var estadoDaRede = navigator.connection.type;
   var tipos = {};
   tipos[Connection.UNKNOWN]  = 'Conexao desconhecida';
   tipos[Connection.ETHERNET] = 'Ethernet';
   tipos[Connection.WIFI]     = 'WiFi';
   tipos[Connection.CELL_2G]  = '2G';
   tipos[Connection.CELL_3G]  = '3G';
   tipos[Connection.CELL_4G]  = '4G';
   tipos[Connection.CELL]     = 'Conexao nao identificada';
   tipos[Connection.NONE]     = 'Sem conexao';
   alert('Typo de conexao: ' + tipos[estadoDaRede]);
}








