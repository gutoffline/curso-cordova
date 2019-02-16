function AdicionaTarefa(){
    let minhaTarefa = $("#tarefa").val();
    $("#lista-tarefas").append("<li>" + minhaTarefa + " <button type='button' onclick='ExcluirTarefa(this);'>Excluir</button> </li>");
    $("#tarefa").val("");
    
    SalvarTarefas();
}

function ExcluirTarefa(botao){
    console.dir(botao);
    $(botao).parent().remove();
    localStorage.tarefasSalvas = $("#lista-tarefas").html();
}

function ExcluirTodas(){
    $("#lista-tarefas").html("");
    localStorage.clear();
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