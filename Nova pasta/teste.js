let funcionario = {
    nome: "Wellington",
    idade: 32,
    isDoador: false
};

console.log(funcionario.nome);
console.log(Object.values(funcionario))
console.log(Object.keys(funcionario))
delete funcionario.idade;
console.log(funcionario)


let nome = "Wellington";
let idade = 32;
let isDoador = false;


console.log(nome);
console.log(idade);
console.log(isDoador);

if (typeof(nome) === "string") {
    console.log(typeof(nome));
    console.log(typeof(idade));
    console.log(typeof(isDoador));
};

//funções para serem usadas no array

let alunos = {
    nomes: ["Well", "Carol", "Richard"],
    idades: [32, 34, 8],

}

alunos.nomes.push("Bruna", "Rayane"); // adicionando um elemento no final do array
alunos.nomes.pop(); // remove o ultimo da lista/array
alunos.idades.unshift(29) // adiciona a informação no inicio da lista

console.log(alunos);


//para verificar se o nome já está na lista/array
if (!alunos.nomes.includes("Igor")) // pode escrever das duas formas
if (alunos.nomes.includes("Igor") === false){
    alunos.nomes.push("Igor");
    alunos.idades.push(18)
};

alunos.idades.shift //  remove do inicio

console.log(alunos)

//Como remover de uma lista usando o indexOF sem precisar saber o local exato 

let alunos = ["Well", "Carol", "Richard", "Rayane"];
if (alunos.includes("Rayane"){}// pode escrever das duas formas
if (alunos.includes("Rayane") === true){
    alunos.splice(alunos.indexOf("Rayane"), 1);
}
console.log(alunos.length);//ver a quantidade dentro de uma lista/array
console.log(alunos);