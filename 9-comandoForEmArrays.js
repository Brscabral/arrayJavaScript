//comando for em arrays. simbora!

const numeros = [100, 200, 300, 400, 500,600];
for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i]);
}
//Lembrando que o for tem como os seguintes paramentros:implementação,condição e incrementação
//a logica é a seguinte: implementei a variavel i, logo em seguida, na parte da condição eu fiz enquanto i<numeros.length
//numero.length mostra os indices da constante numeros (no caso ai tem 6 indices)
//Cada vez que a condição é aceita o i=i+1
//e ai eu mostrei no final os indices e todos os numeros armazenados dentro de cada indice.