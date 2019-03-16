$('.tabs').tabs();

function Criar() {
	M.toast({html: 'Cadastrado'})
    var contato = navigator.contacts.create({"displayName": "Bruce Wayne"});
   contato.save(Sucesso, Erro);
    
   function Sucesso() {
      alert("Contato Salvo!");
   }
	
   function Erro(message) {
      alert('Eroo: ' + message);
   }      
}

function Buscar() {
   var options = new ContactFindOptions();
   options.filter = "Bruce Wayne";
   options.multiple = true;
   campo = ["displayName"];
   navigator.contacts.find(campo, Sucesso, Erro, options);
    
   function Sucesso(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         alert("Display Name = " + contacts[i].displayName);
      }
   }
	
   function Erro(message) {
      alert('Failed because: ' + message);
   }
}


function Excluir() {

var options = new ContactFindOptions();
   options.filter = "Bruce Wayne";
   options.multiple = false;
   campo = ["displayName"];
   navigator.contacts.find(campo, Encontrado, naoEncontrado, options);

   function Encontrado(contacts) {
      var contact = contacts[0];
      contact.remove(Sucesso, Erro);

      function Sucesso(contact) {
         alert("Contato removido");
      }

      function Erro(message) {
         alert('Failed because: ' + message);
      }
   }

   function naoEncontrado(message) {
      alert('Contato não encontrado');
   }
}