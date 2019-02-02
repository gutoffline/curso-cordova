function CadastrarTarefa(){
    var dataTarefa = document.querySelector("#data-tarefa").value;
    var tarefa = document.querySelector("#tarefa").value;
    
    var linha = "<tr><td>" + dataTarefa + "</td><td>" + tarefa + "</td></tr>";
    
    document.querySelector("#lista-tarefas").innerHTML += linha;
    
    document.querySelector("#data-tarefa").value = "";
    document.querySelector("#tarefa").value = "";
    
    alert("Tarefa cadastrada com sucesso!");
}