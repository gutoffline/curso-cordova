        document.addEventListener("deviceready", onDeviceReady, false);

        let currentRow;

        function CriarTabela(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nome,email)');
        }


        function ListarTodosDoBanco(tx) {
            tx.executeSql('SELECT * FROM CLIENTES', [], MostrarNaTela, ErroDoBanco);
        }

        function PesquisarNoBanco(tx) {
            tx.executeSql("SELECT * FROM CLIENTES where nome like ('%"+ document.getElementById("txtNome").value + "%')",
                    [], MostrarNaTela, ErroDoBanco);
        }

        function MostrarNaTela(tx, results) {
            let tblText='<table id="t01"><tr><th>ID</th> <th>Nome</th> <th>E-mail</th></tr>';
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
                let tmpArgs=results.rows.item(i).id + ",'" + results.rows.item(i).nome
                        + "','" + results.rows.item(i).email+"'";
                tblText +='<tr onclick="AbrirModal('+ tmpArgs + ');"><td>' + results.rows.item(i).id +'</td><td>'
                        + results.rows.item(i).nome +'</td><td>' + results.rows.item(i).email +'</td></tr>';
            }
            tblText +="</table>";
            document.getElementById("tblDiv").innerHTML =tblText;
        }

        function ExcluirDoBanco(tx) {
          tx.executeSql('DELETE FROM CLIENTES WHERE id = ' + currentRow, [], ListarTodosDoBanco, ErroDoBanco);
        }

        function ErroDoBanco(err) {
            alert("Erro de processamento SQL: "+err.code);
        }

        function ListarTodos() {
            let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
            db.transaction(ListarTodosDoBanco, ErroDoBanco);
        }

        function onDeviceReady() {
            let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
            db.transaction(CriarTabela, ErroDoBanco, ListarTodos);
        }

        function InserirNoBanco(tx) {
            tx.executeSql('INSERT INTO CLIENTES (nome,email) VALUES ("' +document.getElementById("txtNome").value
                    +'","'+document.getElementById("txtEmail").value+'")');
        }

        function Inserir() {
            let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
            db.transaction(InserirNoBanco, ErroDoBanco, ListarTodos);
        }

        function Pesquisar() {
            let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
            db.transaction(PesquisarNoBanco, ErroDoBanco);
        }

        function Excluir() {
             let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
             db.transaction(ExcluirDoBanco, ErroDoBanco);
             document.getElementById('JanelaEditar').style.display='none';
        }

        function AbrirModal(row,nome,email) {
            currentRow=row;
            document.getElementById("JanelaEditar").style.display="block";
            document.getElementById("editNome").value = nome;
            document.getElementById("editEmail").value = email;
        }

        function editRow(tx) {
            tx.executeSql('UPDATE CLIENTES SET nome ="'+document.getElementById("editNome").value+
                    '", email= "'+document.getElementById("editEmail").value+ '" WHERE id = '
                    + currentRow, [], ListarTodosDoBanco, ErroDoBanco);
        }
        function Editar() {
            let db = window.openDatabase("Database", "1.0", "Cordova CLIENTES", 200000);
            db.transaction(editRow, ErroDoBanco);
            document.getElementById('JanelaEditar').style.display='none';
        }