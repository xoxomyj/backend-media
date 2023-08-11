/**************************************************************************************
 * Objetivo: mostrar o nome do aluno, adcionar quatro notas, calcular media e na tela
 * Data: 04/08/2023
 * Autor: Mariana
 * Versao: 1.0.0
**************************************************************************************/

/*
formas de criar variaveis e constantes:
var: permite criar uma variavel de escopo global, ou seja ira existir em todo o projeto.
let:permite criar uma variavel de escopo local (bloco), ou seja, ira existir apenas dentro daquele bloco.
cosnt: permite criar uma constante que pode ser local ou global, sempre utilizamos em situacoes onde nao havera mudanca de conteudo.

operadores de comparaçao:

==  Comparaçâo de conteudos EX: 1 == 1 | EX: 1 == "1"
<   Menor
>   Maior
<=  Menor ou igual
>=  Maior ou igual
!=  Diferente
=== Comparaçao de conteudos iguais e tipo de dados iguais EX: 1 === 1 | EX: 1==='1'
!== Comparaçao de conteudos diferente e tipos de dados iguais
==! Comparaçao de conteudos iguais e tipos de dados diferetes

operadores logicos:

E   AND &&
OU  OR  ||
Negaçao NOT !

conversâo de string para número:
    parseInt() - converte uma string para numeros inteiros
    parseFloat() - converte uma string para numeros reais
    Number() - converte uma string para numero inteiro ou real conforme a ncessidade
*/

//import da biblioteca de entrada de dados do teclado
var readline = require('readline');
const { isNumber } = require('util');

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
entradaDeDados.question('Digite a primeira nota: ', function(notaumUsuario){
    //recebe a primeira nota digitada
    var notaum = Number(notaumUsuario);

//entrada de dados da segunda nota
entradaDeDados.question('Digite a segunda nota: ', function(notadoUsuario){
    //recebe a segunda nota digitada
    var notadois = Number(notadoUsuario);

//entrada de dados da terceira nota
entradaDeDados.question('Digite a terceira nota: ', function(notatreUsuario){
    //recebe a terceira nota digitada
    var notatres = Number(notatreUsuario);

//entrada de dados da quarta nota
entradaDeDados.question('Digite a quarta nota: ', function(notaquaUsuario){
    //recebe a quarta nota digitada
    var notaquatro = Number(notaquaUsuario);

//validaçâo para entrada de dados caso esteja vazio
    if(notaum == '' || notadois == '' || notatres == '' || notaquatro == ''){
        console.log("ERRO: é obrigatório todas as notas!!")

//validaçâo para entrada de dados de valores nâo númericos
    }else if(isNaN(notaum) || isNaN(notadois) || isNaN(notatres) || isNaN(notaquatro) ){
        console.log('ERRO: é obrgatorio apresentar notas com numeros!!')
    }else{
    //calcula a média das quatro notas
         var media = (notaum + notadois + notatres + notaquatro)/4 
        console.log('Bem vindo ao sistema de notas, ' + nome);
        console.log('A sua média final é: ', + media)
    }

});
});
});
});
});