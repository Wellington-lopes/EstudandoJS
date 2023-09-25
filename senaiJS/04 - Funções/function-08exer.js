const alunos = [
    {
        nome: "Well",
        idada: 32,
        endereco: {
            rua: "Rua Pedro Lessa",
            num: 1000,
            complemento: [
                {
                    lote: 35,
                    quadra: 2
                }
            ]
        }
    },
    {
        nome: "Carol",
        idada: 33,
        endereco: {
            rua: "Rua Pedro Lessa",
            num: 11,
            complemento: []
        }
    },
    {
        nome: "Richard",
        idada: 8,
        endereco: {
            rua: "Rua Carlos Maia",
            num: 10,
            complemento: []
        }
    }
]

const procura_aluno = alunos.filter(aluno => 
    aluno.endereco.complemento.some(complemento => 
        complemento.lote === 35
        )
        );

console.log(procura_aluno);