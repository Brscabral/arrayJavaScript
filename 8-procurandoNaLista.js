const alunos=['Juliana','Ana','Caio','Sergio'];
const notas=[10,9,8,7];

let listaAlunosENotas=[alunos,notas];

const exibeNomeENotas = (nomeDoAluno)=>{
    if(listaAlunosENotas[0].includes(nomeDoAluno)){
        indice = listaAlunosENotas[0].indexOf(nomeDoAluno);
        return listaAlunosENotas[0][indice] + ',sua média é:'+listaAlunosENotas[1][indice];
    }
    else{
        return 'Não cadastrado';
    }
}
console.log(exibeNomeENotas('Sergio'));
//Blz, agora vamos para as explicaçoes
//criamos uma lista (listaAlunosENotas) com duas arrays (listas de duas dimensoes). até ai, tudo bem.
// criamos uma função estilo arrow chamada exibeNomesENotas com o parametro nomeDoAluno
// que vai receber o valor de uma condicional, e ai é que pode gerar confusão, mas calma.
//Esse método chamado ".includes" procura o nome que foi atribuido ao parametro da função nomeDoAluno.Ex:sergio
//e meio que procura dentro da lista (No caso ai, dentro da lista alunos). Se ele achar, ele retorna true
//e segue o baile na condicional. 
//Depois, criamos a variavel indice, que vai receber um indice da lista(nesse caso, o indice do aluno)
//para isso, usaremos outro metodo chmado ".indiceof". Esse metodo vai atrás do indice.
//no caso do exemplo, ele vai atras do indice da lista de alunos selecionado pelo usuario.
//exe: sergio=> aluno=> indice 3. no caso a variavel recebe esse valor de 3.
//Por fim, a função no retorna o nome e a nota do aluno de mesmo indice.
//Se o metodo .includes retornar falso, a condicional acaba e entra no else("não cadastrado")