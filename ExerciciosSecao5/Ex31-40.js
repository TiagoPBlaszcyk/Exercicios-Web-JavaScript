
console.log(``)
console.log(`   Exercício 31 `)
console.log(``)
/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function exercicio31() {
    let array = [-1, -2, -3, -4, -5, 6, 7, 8, 9, 10]
    let negativos = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativos++
        }
    }
    console.log(`${negativos} são negativos.`)
}
exercicio31()

console.log(``)
console.log(`   Exercício 32 `)
console.log(``)
/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */

function exercicio32() {
    let array = [10, 20, 10]
    let media = 0
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    media = soma / array.length
    console.log(`A média do vetor [ ${array.join(`, `)} ], é ${media.toFixed(2)}`)
}

exercicio32()

console.log(``)
console.log(`   Exercício 33 `)
console.log(``)
/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

function exercicio33() {
    let vetorInteiro = [1, 2, 3, 4]
    let vetorString = ["a", "b", "c", "d"]
    let vetorDouble = [1.1, 2.2, 3.3, 4.4]

    let vetorIntStringDou = vetorString.concat(vetorInteiro)                                   /* 1 modo*/

    let vetorAltDou = vetorDouble.concat(vetorInteiro, vetorString, ["Aleatório", 6.6, 9])     /* 2 modo*/

    console.log(`Vetor Inteiro + String = ${vetorIntStringDou.join(`, `)}`)
    console.log(`Vetor Double + Inteiro = ${vetorAltDou.join(`, `)}`)


}

exercicio33()
/*let vetorInteiro = [1, 2, 3, 4]                                     PROFESSOR
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
*/


console.log(``)
console.log(`   Exercício 34 `)
console.log(``)
/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function exercicio34(string1, string2) {
    let estaContido = true;
    for (let i in string1) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j in string2) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i in string2) {
        let caractereString2 = string2.charAt(i).toLowerCase()
        for (let j in string1) {
            let caractereString1 = string1.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(exercicio34('abc', 'abcWDA'))
console.log(exercicio34('abc', 'abc'))

console.log(``)
console.log(`   Exercício 35 `)
console.log(``)
/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

function exercicio35() {

    let pilha = [1, 2, 3, 4, 5]
    let adiciona = [6, 7, 8, 9, 10]

    let aux = pilha.concat(adiciona)

    console.log(`Vetor [${pilha}] e vetor [${adiciona}]= [${aux}]`)
}

exercicio35()

console.log(``)
console.log(`   Exercício 36 `)
console.log(``)
/*36) Crie -*- duas funções -*- que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\        PROFESSOR

 let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))

*/


console.log(``)
console.log(`   Exercício 37 `)
console.log(``)
/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */
function exercicio37PA(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log(`PA:  ${(n * (a1 + (a1 + ((n - 1) * r)))) / 2}`)
}

exercicio37PA(2, 2, 5)

function exercicio37PG(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log(`PG:  ${(a1 * ((r ** n) - 1)) / (r - 1)}`)
}

exercicio37PG(2, 2, 5)

console.log(``)
console.log(`   Exercício 38 `)
console.log(``)
/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

function exercicio38(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

exercicio38(19, 3)


console.log(``)
console.log(`   Exercício 39 `)
console.log(``)
/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
 */

function exercicio39() {
    let vetorA = [1, 2, 3]
    let vetorB = [4, 5, 6]

    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        console.log('Vetor diferentes.')
    }

    console.log('Vetor B para A: ' + vetorA)
    console.log('Vetor A para B: ' + vetorB)
}

exercicio39()


console.log(``)
console.log(`   Exercício 40 `)
console.log(``)
/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function exercicio40() {
    let conceito = []
    let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
    
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceito.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceito.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceito.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceito.push('A')
        } else {
            conceito.push('Nota inválida')       
       }
    }
    console.log(`Conceito: ${conceito.join(`, `)}`)
}

exercicio40()

