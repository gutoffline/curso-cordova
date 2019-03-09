function FazerPedido(){
    $.ajax({
        url: 'http://cozinhapp.sergiolopes.org/novo-pedido',
        data: {
            mesa: $('#mesa').val(),
            pedido: $('#pedido').val()
        },
        error: function(erro) {
           alert("Erro: " + erro.responseText);
        },
        success: function(dados) {
            alert("Pedido cadastrado");
            $('#mesa').val('');
            $('#pedido').val('');
        }
    });
}

function ListaProdutos(){
    $.getJSON("http://cozinhapp.sergiolopes.org/produtos", function(dados) {
        console.dir(dados);
        for(var i = 0 ; i < dados.length ; i++){
            $("#pedido").append("<option value='"+ dados[i].nome + "'>" + dados[i].nome + "</option>");
        }
    });
}


ListaProdutos();







