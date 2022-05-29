var tabela = document.querySelector("#tabela-candidato");

var candidato = document.querySelectorAll(".candidato");

var botaoVotar = document.querySelector("#deletar-candidato");
botaoVotar.addEventListener("click", function(event) {    
    
    console.log ("fui clicado"); 

    tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    

    })   
     
    return;
})