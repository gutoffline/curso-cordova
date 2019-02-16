function AdicionaTarefa(){
    let minhaTarefa = $("#tarefa").val();
    
    if(minhaTarefa==""){
        alert("Tarefa vazia, não pode ser adicionada");
    }else{

        $("#lista-tarefas").append("<li>" + minhaTarefa + " <button type='button' onclick='ExcluirTarefa(this);'>Excluir</button> </li>");
        $("#tarefa").val("");
        SalvarTarefas();
    }
}

function ExcluirTarefa(botao){
    console.dir(botao);
    $(botao).parent().remove();
    localStorage.listaDeTarefas = $("#lista-tarefas").html();
}

function ExcluirTodas(){
    let resposta = confirm("Continuar com a exclusão?");
    
    if(resposta == true){
        $("#lista-tarefas").html("");
        localStorage.clear();
        alert("Tudo apagado.");
    }else{
        alert("Exclusão cancelada.");
    }
    /*
    https://speakerdeck.com/gutoffline/revisitando-local-storage
    */
}

function SalvarTarefas(){
    localStorage.listaDeTarefas = $("#lista-tarefas").html();
    $("#mensagem").openModal();
}

function CarregarTarefas(){
    $("#lista-tarefas").html(localStorage.listaDeTarefas);
}