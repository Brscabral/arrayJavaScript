//método filter
//o codigo vai filtrar uma array de alunos e notas e vai dizer se o aluno ta reprovado
const nomes=['juliana','marcos','andre','joaquim'];
const notas=[8,4.5,6,7];
                                //parâmetros(nesse caso, dois)
const reprovados=nomes.filter((alunos, indice ) => notas[indice] < 5);//aqui ele vai procurar qual indice da nota é < 5
console.log(`repovados: ${reprovados}`);
//o método filter exige uma function no argumento.