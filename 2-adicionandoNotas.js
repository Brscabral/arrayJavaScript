 //desafio: um professor esqueceu de botar a quarta nota de um aluno.
 //elabore um programa que consiga resolver esse problema:
 const notas=[10,8,6.5];
 notas.push(7);//variavel.push() é para "enfiar" um elemento na Array
 console.log(notas);
 let media=(notas[0]+ notas[1] + notas[2] + notas[3]) / notas.length;
 console.log(media);