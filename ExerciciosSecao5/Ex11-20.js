console.log(``)
console.log(`   Exercício 11 `)
console.log(``)
/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */

function exercicio11 (ano){
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        console.log(`${ano} é ano bissexto: true`)
    }else {
        console.log(`${ano} é ano normal: false`)
    }
}

exercicio11(2020)
exercicio11(2021)
exercicio11(100)
exercicio11(400)

console.log(``)
console.log(`   Exercício 12 `)
console.log(``)
/*12) Faça um algoritmo que calcule o fatorial de um número.
 */

function exercicio12 (numb) {
    let resultado = numb
    for (let stop = 1; stop < numb; stop++){
        resultado = resultado * stop
    }
    return console.log(`Fatorial de ${numb}: ${resultado}`)
}
exercicio12(5)

console.log(``)
console.log(`   Exercício 13 `)
console.log(``)
/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

 function exercicio13 (dia){
    switch (true){
        case dia % 7 == 0 && dia <= 31:
            console.log(`Dia: ${dia} é Sábado`)
            break
        case dia == 1 || dia == 8 || dia == 15 || dia == 22 || dia == 29:
            console.log(`Dia: ${dia} é Domingo`)
            break
        case dia <= 31:
            console.log(`Dia: ${dia} é dia útil`)
            break
        default:
            console.log(`Dia: "${dia}" Não é válido`)
    }
 }

 exercicio13(14)
 exercicio13(15)
 exercicio13(16)
 exercicio13(77)

console.log(``)
console.log(`   Exercício 14 `)
console.log(``)
/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function exercicio14 (fruta){
    switch (true){
        case fruta == `kiwi`:
            console.log(`Estamos com escassez de kiwis`)
            break
        case fruta == `maça`:
            console.log(`Não vendemos esta fruta aqui`)
            break
        case fruta == `melancia`:
            console.log(`Aqui está, são 3 reais o quilo`)
            break
        default:
            console.log(`Erro`)
    }
}

exercicio14(`kiwi`)
exercicio14(`maça`)
exercicio14(`melancia`)
exercicio14(`xxxxxxx`)
exercicio14(0)

console.log(``)
console.log(`   Exercício 15 `)
console.log(``)
/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

function exercicio15 (carro){
    switch (true){
        case carro == `hatch` || carro == `Hatch`:
            console.log(`Compra efetuada com sucesso`)
            break
        case carro == `sedans` || carro == `Sedans`:
            console.log(`Tem certeza que não prefere este modelo?`)
            break
        case carro == `motocicletas` || carro == `Motocicletas`:
            console.log(`Tem certeza que não prefere este modelo?`)
            break
        case carro == `caminhonetes` || carro == `Caminhonetes` :
            console.log(`Tem certeza que não prefere este modelo?`)
            break
        default:
            console.log(`Não trabalhamos com este tipo de automóvel aqui`)
    }
}

exercicio15(`hatch`)
exercicio15(`sedans`)
exercicio15(`motocicletas`)
exercicio15(`caminhonetes`)
exercicio15(`bike`)
exercicio15(0)

console.log(``)
console.log(`   Exercício 16 `)
console.log(``)
/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3).
A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function exercicio16 (a, sinal, b, r){
    switch (sinal){
        case "+":
            r = a + b
            console.log(`Resultado de ${a} + ${b} = ${r} `)
            break
        case "-":
            r = a - b
            console.log(`Resultado de ${a} - ${b} = ${r} `)
            break
        case "*":
            r = a * b
            console.log(`Resultado de ${a} * ${b} = ${r} `)
            break
        case "/":
            r = a / b
            console.log(`Resultado de ${a} / ${b} = ${r} `)
            break
        default:
            console.log(`Operações inválidas`)
    }
}

exercicio16(2, "+", 3)
exercicio16(2, "-", 3)
exercicio16(2, "*", 3)
exercicio16(2, "/", 3)
exercicio16(2, "A vida é uma escola", 3)

console.log(``)
console.log(`   Exercício 17 `)
console.log(``)
/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano  aumento
a       10%
b       15%
c       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/
function exercicio17 (plano, salario) {
    let aumento = 0
    switch (plano) {
        case `a`:
            aumento = salario * 0.1
            console.log(`Plano (${plano})= salário atual R$ ${salario}, novo salário R$ ${salario + aumento}`)
            break
        case `b`:
            aumento = salario * 0.15
            console.log(`Plano (${plano})= salário atual R$ ${salario}, novo salário R$ ${salario + aumento}`)
            break
        case `c`:
            aumento = salario * 0.2
            console.log(`Plano (${plano})= salário atual R$ ${salario}, novo salário R$ ${salario + aumento}`)
            break
        default:
            console.log(`Plano inválido`)
    }
}

exercicio17(`a`, 1000)
exercicio17(`b`, 1000)
exercicio17(`c`, 10000)
exercicio17(`xxx`)

console.log(``)
console.log(`   Exercício 18 `)
console.log(``)
/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function exercicio18(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo.')
    }
}

exercicio18(1)
exercicio18(2)
exercicio18(3000)

console.log(``)
console.log(`   Exercício 19 `)
console.log(``)
/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function exercicio19 (cod, quantidade, total) {
    switch (cod) {
        case 100:
            total = quantidade * 3
            console.log(`${quantidade}x Cachorro Quente ---- R$ 3,00 = Total R$ ${total.toFixed(2)}`)
        break
        case 200:
            total = quantidade * 4
            console.log(`${quantidade}x Hambúrguer Simples - R$ 4,00 = Total R$ ${total.toFixed(2)}`)
        break
        case 300:
            total = quantidade * 5.5
            console.log(`${quantidade}x Cheeseburguer ------ R$ 5,50 = Total R$ ${total.toFixed(2)}`)
        break
        case 400:
            total = quantidade * 7.5
            console.log(`${quantidade}x Bauru -------------- R$ 7,50 = Total R$ ${total.toFixed(2)}`)
        break
        case 500:
            total = quantidade * 3.5
            console.log(`${quantidade}x Refrigerante ------- R$ 3,50 = Total R$ ${total.toFixed(2)}`)
        break
        case 600:
            total = quantidade * 2.8
            console.log(`${quantidade}x Suco --------------- R$ 2,80 = Total R$ ${total.toFixed(2)}`)
        break
        default:
            console.log(`Produto não existente.`)
    }
}

exercicio19(100,2)
exercicio19(200,1)
exercicio19(300,2)
exercicio19(400,3)
exercicio19(500,2)
exercicio19(600,3)
exercicio19(1,4)

console.log(``)
console.log(`   Exercício 20 `)
console.log(``)
/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */
function exercicio20(grana) {
    let inicial = grana
    let retirado = 0
    let contcem = 0
    let contcinquenta = 0
    let contcinco = 0
    let contum = 0
    
      while (retirado <= inicial && 100 <= grana ) {
        retirado += 100
        grana -= 100
        contcem++
    } while (retirado <= inicial && 50 <= grana) {
        retirado += 50
        grana -= 50
        contcinquenta++

    } while (retirado <= inicial && 5 <= grana) {
        retirado += 5
        grana -= 5
        contcinco++

    } while (retirado <= inicial && 1 <= grana) {
        retirado +=  1
        grana -=  1
        contum++
    }
console.log
(`Valor retirado ${inicial}, usou essas notas.  (${retirado}, ${grana})
${contcem} nota(s) de R$ 100. 
${contcinquenta} nota(s) de R$ 50. 
${contcinco} nota(s) de R$ 5. 
${contum} nota(s) de R$ 1.`)

}

exercicio20(1157)