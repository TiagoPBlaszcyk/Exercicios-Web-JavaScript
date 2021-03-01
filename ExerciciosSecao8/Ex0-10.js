/*1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
 */
console.log(``)
console.log(`   Exercício 1 `)
console.log(``)

function cumprimentar(nome) {
    nome = nome.concat(`!`)
    console.log(`Olá ${nome}`)
}
cumprimentar(`Ana`)

/*2) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
 */
console.log(``)
console.log(`   Exercício 2 `)
console.log(``)

function converterIdadeEmAnosParaDias(anos) {
    let converter = anos * 360
    console.log(`Anos:${anos}, Dias:${converter}`)
}
converterIdadeEmAnosParaDias(25)

/*3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
 calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/
console.log(``)
console.log(`   Exercício 3 `)
console.log(``)

function calcularSalario(horas, pg) {
    const salario = horas * pg
    console.log(`Salário igual a R$${salario}`)
}
calcularSalario(150, 40.5)

/*4) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril" 
*/
console.log(``)
console.log(`   Exercício 4 `)
console.log(``)

function nomeDoMes(id) {
    switch (id) {
        case 1:
            console.log("Janeiro")
            break
        case 2:
            console.log("Fevereiro")
            break
        case 3:
            console.log("Março")
            break
        case 4:
            console.log("Abril")
            break
        case 5:
            console.log("Maio")
            break
        case 6:
            console.log("Junho")
            break
        case 7:
            console.log("Julho")
            break
        case 8:
            console.log("Agosto")
            break
        case 9:
            console.log("Setembro")
            break
        case 10:
            console.log("Outubro")
            break
        case 11:
            console.log("Novembro")
            break
        case 12:
            console.log("Dezembro")
            break
        default:
            console.log("Erro")
    }

}
nomeDoMes(1)

/*5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(1, 5) // retornará false 
*/
console.log(``)
console.log(`   Exercício 5 `)
console.log(``)

function maiorOuIgual(a, b) {
    if (typeof a && typeof b === "number") {
        switch (true) {
            case a > b || a === b: console.log(true)
                break
            default: console.log(false)
        }
    } else {
        console.log(`Somente Números`)
    }
}
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(1, 5)
maiorOuIgual(5, 1)

/*6) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:
Exercícios - Curso Fundamentos de Programação 2
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string" 
*/
console.log(``)
console.log(`   Exercício 6 `)
console.log(``)

function inverso(valor) {
    const type = typeof valor
    if (type == "boolean") {
        console.log(`${!valor}`)
    } else if (type == "number") {
        console.log(`${valor / -1}`)
    }
    else {
        console.log(`retornará "booleano ou números esperado, mas o parâmetro é do tipo ${type}`)
    }
}
inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")

/*7) Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true 
*/
console.log(``)
console.log(`   Exercício 7 `)
console.log(``)

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    switch (true) {
        case inclusivo === true:
            if (numero >= minimo && numero <= maximo) {
                console.log(`${numero} está entre (${minimo}, ${maximo}) Inclusivo: True`)
            } else {
                console.log(`${numero} não está entre (${minimo}, ${maximo}) Inclusivo: True`)
            }
            break
        case inclusivo === false:
            if (numero > minimo && numero < maximo) {
                console.log(`${numero} está entre (${minimo}, ${maximo}) Inclusivo: False`)
            } else {
                console.log(`${numero} não está entre (${minimo}, ${maximo}) Inclusivo: False`)
            }
            break
        default:
            if (numero >= minimo && numero <= maximo) {
                console.log(`${numero} está entre (${minimo}, ${maximo})`)
            } else {
                console.log(`${numero} não está entre (${minimo}, ${maximo})`)
            }
    }
}
estaEntre(10, 10, 20,)
estaEntre(10, 10, 20, true)
estaEntre(20, 10, 20,)
estaEntre(20, 10, 20, true)

/*8) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0 
*/
console.log(``)
console.log(`   Exercício 8 `)
console.log(``)

function multiplicar(a, b) {
    let total = 0
    if (a != 0) {
        let cont = 0
        while (cont != b) {
            total = total + a
            cont++
        }
        console.log(`Multiplicação de ${a}, ${b} = ${total}`)
    } else {
        console.log(`Multiplicação de ${a}, ${b} = 0`)
    }
}
multiplicar(5, 5)
multiplicar(0, 7)

/*9) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
 */
console.log(``)
console.log(`   Exercício 9 `)
console.log(``)

function repetir(elemento, quantidade) {
    let aux = []
    for (let i=0; i < quantidade; i++) {
        aux.push(elemento)
    }
    console.log(aux)
}
repetir("código", 2)
repetir(7, 3)

/*10) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/
console.log(``)
console.log(`   Exercício 10 `)
console.log(``)

function simboloMais (quantidade) {
    let aux = []
    for (let i=0; i < quantidade; i++) {
        aux += "+"
    }
    console.log(aux)
}
simboloMais(2) 
simboloMais(4) 