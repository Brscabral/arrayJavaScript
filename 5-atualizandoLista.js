//Atualizando listas
//finalidade do programa:Tirar 2 individuos e botar 1.
const listaChamada=['Caio','victor', 'João','Ana'];
listaChamada.splice(0,2,'Rodrigo');
//parametro da função:indice(de onde começar), quantos tirar, e o que vc quer incrementar.
console.log(listaChamada);
//outro exemplo
listaChamada.splice(2,0,'Daniel');
//Nesse caso, não vai tirar nenhum, só acrescentar. mas vai pegar depois da primeira implementação, claro.
console.log(listaChamada);