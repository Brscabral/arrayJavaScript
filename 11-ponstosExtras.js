//Um aluno ganhou um ponto extra na suas notas
//Escrever um codigo que retorne as notas atualizadas com os pontos extras
const notas=[10,8,7,6];

const notasAtualizadas = notas.map(notas=>notas==10? notas : ++notas);
console.log(notasAtualizadas);