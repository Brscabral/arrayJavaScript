//Para dividirmos as arrays, usaremos a função slice()
//suponhamos que existe uma sala de 6 alunos e queremos dividir esses alunos nem duas salas.
const alunos=['João', 'Juliana','Caio','Patricia', 'Bruno','Janielly'];
const sala1=alunos.slice(0,alunos.length/2);//O slice requer dois parametros: o de começo e até onde vc quer dividir.
const sala2=alunos.slice(alunos.length/2);  //de onde parou, no caso o alunos.lenth/2(metade) e vai até o final.  
console.log(`Alunos da sala 1: ${sala1} \n \n Alunos da sala 2: ${sala2}`);