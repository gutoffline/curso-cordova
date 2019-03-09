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
	elemento = '<div class="col s12 m6"><div class="card"><div class="card-image"> <img src="'+foto+'"> <span class="card-title">'+nome+'</span> <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a></div><div class="card-content"> <p>'+nome + " - " +descricao + " <strong>R$"+ preco +'</strong></p></div> </div></div>';
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