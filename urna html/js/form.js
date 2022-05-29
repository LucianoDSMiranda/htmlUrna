var botaoAdicionar = document.querySelector("#adicionar-candidato");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log ("fui clicado");

    var form = document.querySelector("#form-adiciona");

    var candidato = obtemCandidatoDoFormulario(form);

    var erros = validaCandidato(candidato);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionarCandidatoNaTabela(candidato);
  

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

})



function obtemCandidatoDoFormulario(form) {

    var candidato = {
        nome: form.nome.value,
        partido: form.partido.value,
        sigla: form.sigla.value,
        voto: 0

        }

    return candidato;

}


function montaTr(candidato) {
    var candidatoTr = document.createElement("tr");
    candidatoTr.classList.add("candidato");
    candidatoTr.appendChild(montaTd(candidato.nome, "info-nome"));
    candidatoTr.appendChild(montaTd(candidato.partido, "info-partido"));
    candidatoTr.appendChild(montaTd(candidato.sigla, "info-sigla"));
    candidatoTr.appendChild(montaTd(candidato.voto, "info-voto"));

    return candidatoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionarCandidatoNaTabela(candidato) {
    var candidatoTr = montaTr(candidato);
    var tabela = document.querySelector("#tabela-candidato");
    tabela.appendChild(candidatoTr);
}


function validaCandidato(candidato) {

    var erros = [];

    if (candidato.nome.length == 0) {
        erros.push("O Nome não pode ser em branco!");
    }

    if (candidato.partido.length == 0) {
        erros.push("O Partido não pode ser em branco!");
    }

    if (candidato.sigla.length == 0) {
        erros.push("A Sigla não pode ser em branco!");
    }

    if (candidato.sigla.length >= 5) {
        erros.push("A Sigla não pode conter mais que 4 Dígitos!");
    }
    
    
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}    