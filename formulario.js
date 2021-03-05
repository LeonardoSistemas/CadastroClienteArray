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
}