/**************************************************************************************
 * Objetivo: mostrar o nome do aluno, adcionar quatro notas, calcular media e na tela
 * Data: 04/08/2023
 * Autor: Mariana
 * Versao: 1.0.0
**************************************************************************************/

//import da biblioteca de entrada de dados do teclado
var readline = require('readline');

//criando objeto entradaDeDados 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados do nome
entradaDeDados.question('Digite o seu nome: ', function(nomeUsuario){
     //recebe o nome digitado 
     var nome = nomeUsuario;

//entrada de dados da primeira nota
entradaDeDados.question('Digite a primiera nota: ', function(notaumUsuario){
    //recebe a primeira nota digitada
    var notaum = notaumUsuario;
    //converte a nota para int
    var notaum =  parseInt(notaumUsuario);

//entrada de dados da segunda nota
entradaDeDados.question('Digite a segunda nota: ', function(notadoUsuario){
    //recebe a segunda nota digitada
    var notadois = notadoUsuario;
    //converte a nota para int
    var notadois =  parseInt(notadoUsuario);

//entrada de dados da terceira nota
entradaDeDados.question('Digite a terceira nota: ', function(notatreUsuario){
    //recebe a terceira nota digitada
    var notatres = notatreUsuario;
    //converte a nota para int
    var notatres =  parseInt(notatreUsuario);

//entrada de dados da quarta nota
entradaDeDados.question('Digite a quarta nota: ', function(notaquaUsuario){
    //recebe a quarta nota digitada
    var notaquatro = notaquaUsuario;
    //converte a nota para int
    var notaquatro =  parseInt(notaquaUsuario);

//calculando média das notas
    var media;
    //calcula a média das quatro notas
    media = (notaum + notadois + notatres + notaquatro)/4 ;

//exibe uma mensagem no terminal com o conteudo digitado
    console.log('Bem vindo ao sistema de notas, ' + nome);
    console.log('A sua média final é: ', + media)


});
});
});
});
});