let objCadastro = {}
let arrayCadastro = []

function salvardadosobjeto(){
    objCadastro = {
        "Nome" : document.getElementById('txtNome').value,
        "Email" : document.getElementById('txtEmail').value,
        "Endereco" : document.getElementById('txtEndereco').value,
        "Endereco2" : document.getElementById('txtEndereco2').value,
        "Telefone" : document.getElementById('txtTelefone').value,
        "Celular" : document.getElementById('txtCelular').value
    }

    inserirobjetonoarray()
}

function inserirobjetonoarray(){
    arrayCadastro.push(objCadastro);
    console.table(arrayCadastro)
    exibirdadosdoarraynatabela()  
}

function exibirdadosdoarraynatabela(){

    tabela = document.getElementById("tblCadastro");
    var linha   = tabela.insertRow(-1);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    var coluna3 = linha.insertCell(2);
    var coluna4 = linha.insertCell(3);
    var coluna5 = linha.insertCell(4);
    var coluna6 = linha.insertCell(5);
    

    arrayCadastro.forEach(function(elemento){
        coluna1.innerHTML = elemento.Nome;
        coluna2.innerHTML = elemento.Email;
        coluna3.innerHTML = elemento.Endereco;
        coluna4.innerHTML = elemento.Endereco2;
        coluna5.innerHTML = elemento.Telefone;
        coluna6.innerHTML = elemento.Celular;
    })
}