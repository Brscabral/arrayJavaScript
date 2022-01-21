//media com o método For Each
const notas=[10,9,8];
let somaDasNotas=0;
notas.forEach(notas=>{
    somaDasNotas+=notas;
})
let media=somaDasNotas/notas.length;
console.log(media);
//explicando o código:
//queremos calcular a média de um aluno usando o método foreach
//método foreach é um método que interpreta automaticamente cada indice da array
//diferente do for, que precisa de um indice, uma condição e uma incremento