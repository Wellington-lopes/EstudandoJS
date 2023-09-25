/*
    6. Crie uma função chamada idadeEmDias que receba como parâmetro a 
    idade de uma pessoa em anos e retorne "Eu tenho X dias de vida" onde X 
    é o número de dias de acordo com a sua idade.

    */
let i=0
function idadeEmDias(idade){
    i = 365 * idade;
    console.log("Seus dias de vida são", i)
};

idadeEmDias(32);