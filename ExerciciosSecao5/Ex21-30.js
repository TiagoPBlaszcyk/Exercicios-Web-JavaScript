let array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array1 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
let array2 = [20, 10, 30, 4]


console.log(``)
console.log(`   Exercício 21 `)
console.log(``)
/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function exercicio21(idade) {
    let preco = 100
    if (idade <= 10) {
        preco = preco + 80
        console.log(`Valor a ser pago: R$${preco}, sua idade ${idade}.`)
    } else if (idade >= 11 && idade <= 30) {
        preco = preco + 50
        console.log(`Valor a ser pago: R$${preco}, sua idade ${idade}.`)
    } else if (idade >= 31 && idade <= 60) {
        preco = preco + 95
        console.log(`Valor a ser pago: R$${preco}, sua idade ${idade}.`)
    } else if (idade >= 61) {
        preco = preco + 130
        console.log(`Valor a ser pago: R$${preco}, sua idade ${idade}.`)
    } else {
        console.log(`Erro: Idade inválida`)
    }
}

exercicio21(9)
exercicio21(11)
exercicio21(32)
exercicio21(63)
exercicio21(`Dois`)


console.log(``)
console.log(`   Exercício 22 `)
console.log(``)
/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function exercicio22(mes, valor) {
    if (mes > 0 && mes < 13) {
        meses = mes - 1
        grana = (valor * ((1 + (5 / 100)) ** meses))
        console.log(`R$${grana.toFixed(2).toString().replace(`.`, `,`)}`)
    } else {
        console.log(`Erro: Mês inválido!`)
    }

}

exercicio22(10, 1000)
exercicio22(678888, 1000)

console.log(``)
console.log(`   Exercício 23 `)
console.log(``)
/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function exercicio23(codaluno, nota1, nota2, nota3) {
    notainicial1 = nota1
    notainicial2 = nota2
    notainicial3 = nota3

    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    if (media >= 5) {
        console.log(`COD Aluno: ${codaluno} Suas notas [${notainicial1}, ${notainicial2}, ${notainicial3}] com média de ${media}, APROVADO`)
    } else if (media <= 4.9) {
        console.log(`COD Aluno: ${codaluno} Suas notas [${notainicial1}, ${notainicial2}, ${notainicial3}] com média de ${media}, REPROVADO`)
    }
}

exercicio23(123, 10, 2, 2)


console.log(``)
console.log(`   Exercício 24 `)
console.log(``)
/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
 */

function exercicio24() {
    let exercicio24 = 0
    while (exercicio24 != 11) {
        console.log(`Hello World!`)
        exercicio24++
    }
}

exercicio24()

console.log(``)
console.log(`   Exercício 25 `)
console.log(``)
/*25) Escrever um programa para exibir os números de 1 até 50 na tela.
 */

function exercicio25() {
    let cont = 1
    let grupo = []
    while (cont != 51) {
        grupo.push(cont)
        cont++
    }
    console.log(`[ ${grupo} ]`)
}

exercicio25()

console.log(``)
console.log(`   Exercício 26 `)
console.log(``)
/*26) Fazer um programa para encontrar todos os pares entre 1 e 100 */

function exercicio26() {
    let cont = 1
    let grupo = []
    let pares = []
    while (cont != 101) {
        grupo.push(cont)
        cont++
    }
    for (let i = 0; i < grupo.length; i++) {
        if (grupo[i] % 2 == 0) {
            pares.push(grupo[i])
        }
    }
    console.log(`[${pares}]`)
}

exercicio26()

console.log(``)
console.log(`   Exercício 27 `)
console.log(``)
/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */
function exercicio27(altura1, taxa1, altura2, taxa2) {
    let anos = 0
    if (altura1 > altura2 && taxa1 >= taxa2) {
        console.log(`Criança mais alta: 1`)
    } else if (altura1 < altura2 && taxa1 <= taxa2) {
        console.log(`Criança mais alta: 2`)
    } else if (altura1 > altura2 && taxa1 < taxa2) {
        while (altura1 > altura2) {
            altura1 += taxa1
            altura2 += taxa2
            anos += 1
        }
        console.log(`Criança 2 ultrapassará em ${anos} ano(s).`)
    } else if (altura2 > altura1 && taxa2 < taxa1) {
        while (altura2 > altura1) {
            altura1 += taxa1
            altura2 += taxa2
            anos += 1
        }
        console.log(`Criança 1 ultrapassará em ${anos} ano(s).`)
    }
}

exercicio27(100, 10, 90, 10)
exercicio27(80, 5, 90, 5)

exercicio27(100, 10, 90, 5)
exercicio27(80, 5, 90, 10)

exercicio27(200, 5, 100, 20)
exercicio27(100, 20, 200, 6)

console.log(``)
console.log(`   Exercício 28 `)
console.log(``)
/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

function exercicio28(valores) {
    let pares = 0
    let impar = 0
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 == 0) {
            pares++
        } else {
            impar++
        }
    }
    console.log(`O vetor [${array0}] Pares: ${pares} // Impar: ${impar}`)
}

exercicio28(array0)

console.log(``)
console.log(`   Exercício 29 `)
console.log(``)
/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function exercicio29(array1) {
    quantidade = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] >= 10 && array1[i] <= 20) {
            quantidade++
        }
    }
    console.log(`O vetor [${array1}] possui ${quantidade} números no intervalo de [10,20].`)
}



exercicio29(array1)

console.log(``)
console.log(`   Exercício 30 `)
console.log(``)
/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function exercicio30 (array2) {
    let maior
    let menor
    for (let i = 0; i < array2.length; i++){
        if (maior === undefined && menor === undefined){
            maior = array2[i]
            menor = array2[i]
        } else {
            if (array2[i] > maior){
                maior = array2[i]
            }
            if(array2[i] < menor){
                menor = array2[i]
            }
        }
    }
    console.log(`Vetor [${array2}] Maior: ${maior}, Menor:${menor}.`)
}



exercicio30(array2)