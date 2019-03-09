let valor_total=0;
let mesa = "";

function ListaProdutos(){
    Materialize.toast("Bem Vindo - App Cozinha", 2000);
    $.getJSON("http://cozinhapp.sergiolopes.org/produtos", function(dados) {
        for(var i = 0 ; i < dados.length ; i++){
			let nome = dados[i].nome;
			let foto = dados[i].foto;
			let preco = dados[i].preco;
			let descricao = dados[i].descricao;
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
    elemento += '<button class="btn-floating btn-large halfway-fab waves-effect waves-light red" onclick="FazerPedido(\''+nome+'\','+preco+');"><i class="material-icons">add</i></button>';
    elemento += '</div>';
    elemento += '<div class="card-content">';
    elemento += '<span class="card-title">'+nome+ ' - R$ '+ parseFloat(preco).toLocaleString('pt-BR','BRL') +'</span>';
    elemento += '<p>'+descricao+'</p>';
    elemento += '</div>';
    elemento += '</div>';
    elemento += '</div>';
	return elemento;
}
ListaProdutos();

function FazerPedido(produto, preco){
    if(mesa == $('#mesa').val()){
        valor_total += preco;
    }else{
        valor_total = preco;
    }
    
    mesa = $('#mesa').val();
    
    $.ajax({
        url: 'http://cozinhapp.sergiolopes.org/novo-pedido',
        data: {
            mesa: $('#mesa').val(),
            pedido: produto
        },
        error: function(erro) {
           alert("Erro: " + erro.responseText);
        },
        success: function(dados) {
            $("#total").html("R$ " + valor_total);
            Materialize.toast("Bolo " + produto + " pedido para a mesa " + $('#mesa').val() +"!" , 2000);
        }
    });
}