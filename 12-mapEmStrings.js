//padronizar lista de nomes usando o metodo map
const nomes=['Ana','BIa','joão','thiAgo'];
const padronizaNomes= nomes.map(nomes => nomes.toUpperCase());
console.log(padronizaNomes);
//o método touppercase deixa todas as letras maiusculas
//o lance do .map é que ele vai percorrer todos os indices da array só que modificando todos eles.
//Diferente do foreach que só percorre os indices sem modifica-los