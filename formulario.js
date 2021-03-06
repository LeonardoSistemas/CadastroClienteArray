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
    exibirarraynatabela()  
}

function exibirarraynatabela(){
    let linhaarrayparatabela = ''

    arrayCadastro.forEach(function(elemento){
        linhaarrayparatabela = `<tr>
                                    <th scope="row">${elemento.Nome}</th>
                                    <td>${elemento.Email}</td>
                                    <td>${elemento.Endereco}</td>
                                    <td>${elemento.Endereco2}</td>
                                    <td>${elemento.Telefone}</td>
                                    <td>${elemento.Celular}</td>
                                </tr>`
    })
}