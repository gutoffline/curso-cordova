function Cotacao(){
    $.getJSON("https://economia.awesomeapi.com.br/json/list/" + $("#moeda").val(), function(dados) {
        $("#cotacao").val(dados[0].high);
    }); 
}