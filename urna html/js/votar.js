
var tabela = document.querySelector("#tabela-candidato");

var candidato = document.querySelectorAll(".candidato");

var botaoVotar = document.querySelector("#votar-candidato");
botaoVotar.addEventListener("click", function(event) {    
    
    console.log ("fui clicado"); 

    tabela.addEventListener("click", function(event) {
    teste = event.target.parentNode
    console.log(teste) 

    var Tdvoto = teste.querySelector(".info-voto");

    console.log(Tdvoto);
    Tdvoto.textContent ++
    stop;
    })        

})