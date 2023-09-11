//Como remover de uma lista usando o indexOF sem precisar saber o local exato 

let alunos = ["Well", "Carol", "Richard", "Rayane"];
if (alunos.includes("Rayane") === true){
    alunos.splice(alunos.indexOf("Rayane"), 1);
}

console.log(alunos);

