

const dadosprogramador = [
    {
        nome: "MarangoniDEV",
        idade: 18,
        tecnologias: [
            { nome: 'CC++', especialidade: 'Desktop' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' },
            { nome: 'Python', especialidade: 'Data Science'}
        ]
     }
]

console.log(`O Usuário ${dadosprogramador[0].nome} tem ${dadosprogramador[0].idade} anos e 
usa a Tecnologia ${dadosprogramador[0].tecnologias[0].nome} com especialidade 
em ${dadosprogramador[0].tecnologias[0].especialidade} `)

