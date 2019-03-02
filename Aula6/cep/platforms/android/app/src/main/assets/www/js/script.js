function BuscaEndereco(){
    var cep = $("#cep").val();
    console.log(cep);
    $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/", function(dados) {
        $("#endereco").append(dados.logradouro + " - " + dados.bairro);
        console.dir(dados);
    });
    navigator.vibrate(3000);
    navigator.notification.beep(2);
}

function Alerta(){
   var mensagem = "Pesquise o CEP!";
   var titulo = "Atenção";
   var botao = "OK";
   navigator.notification.alert(mensagem, Retorno, titulo, botao);
   
   function Retorno() {
      console.log("FUI!!!");
   }
}



