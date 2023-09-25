/*
    7. Crie uma função que receba uma string e retorne ela invertida. 
    Ex: "casa" --> "asac";

   

function rev(str){
    let splitS = str.split("");
    let revA = splitS.reverse();
    let joinA = revA.join("");
    console.log(joinA.join);
};

rev("daaaa") */

pessoas = [
    {
    nome: "Rayane",
    idade: 26,
    habilitacao: true,
    endereco : { rua: "SP", num: 171, cep:"5457545" }
},
{
    nome: "Felippe",
    idade: 35,
    habilitacao: false,
    endereco : { rua: "sfsd", num: 122, cep:"424445" }
}];

let arrPessoa = pessoas.filter(pessoa => pessoa.endereco.num === 171);

console.log(arrPessoa);
    

