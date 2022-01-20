//Essa pode ser complicadinha de entender, então, presta atenção aqui.
//A grosso modo, é uma lista dentro de outra lista.
//Vamos implementar um programa que mostre o aluno e a media dele
const alunos =['João', 'Ana', 'Miguel'];
const notas=[10,9,8];
let listaDeNotasEAlunos=[alunos,notas];//botei as duas arrays dentro dessa variavel 
//Qual é o grande lance aqui, existem duas listas dentro da variavel "listaDeNotasEAlunos"
//Alunos, de indice 0 e notas de indice 1.
//Então, vamos acessar a primeira lista, de indice 0, que no caso é a lista dos alunos.
//Depois, vamos acessar o indice dentro da lista de indice 0. No caso aqui, o joão.
//Depois, iremos acessar a média, que ai já é a lista de indice 1 (notas).
//Depois, iremos acessar o indice 2 da lista de notas, no caso a nota 8.
console.log(`${listaDeNotasEAlunos[0][0]}, Sua média é: ${listaDeNotasEAlunos[1][2]}`);