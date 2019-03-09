function ListaProdutos(){
    Materialize.toast("Bem Vindo - App Cozinha", 2000);
    $.getJSON("http://cozinhapp.sergiolopes.org/produtos", function(dados) {
        console.dir(dados);
        
        for(var i = 0 ; i < dados.length ; i++){
			nome = dados[i].nome;
			foto = dados[i].foto;
			preco = dados[i].preco;
			descricao = dados[i].descricao;
            $(".row").append(MontaCard(nome, foto, preco, descricao));
        }
    });
}

function MontaCard(nome, foto, preco, descricao){
    let elemento = "";
    elemento += '<div class="col s12 m6">';
    elemento += '<div class="card">';
    elemento += '<div class="card-image">';
    elemento += '<img src="'+foto+'">';
    elemento += '<button class="btn-floating btn-large halfway-fab waves-effect waves-light red" onclick="FazerPedido(\''+nome+'\');"><i class="material-icons">add</i></button>';
    elemento += '</div>';
    elemento += '<div class="card-content">';
    elemento += '<span class="card-title">'+nome+ ' - R$ '+ parseFloat(preco).toLocaleString('pt-BR') +'</span>';
    elemento += '<p>'+descricao+'</p>';
    elemento += '</div>';
    elemento += '</div>';
    elemento += '</div>';
	return elemento;
}

ListaProdutos();

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






