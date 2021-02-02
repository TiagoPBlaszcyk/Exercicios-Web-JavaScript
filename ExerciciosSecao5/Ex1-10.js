console.log(``)
console.log(`   Exercício 1 `)
console.log(``)
/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
  */
function exercicio1 (a, b) {
    console.log(`Operações matemáticas de ${a} com ${b}`)
    console.log(` `)
    console.log(`Soma ---------- : ${a} + ${b} = ${a + b}`)
    console.log(`Subtração ----- : ${a} - ${b} = ${a - b}`)
    console.log(`Multiplicação - : ${a} * ${b} = ${a * b}`)
    console.log(`Divisão ------- : ${a} / ${b} = ${a / b}`)
}
exercicio1(4, 2)


console.log(``)
console.log(`   Exercício 2 `)
console.log(``)
/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function exercicio2 (a, b, c) {
    if (a == b && b == c) {
        console.log(`Triângulo: (${a}, ${b}, ${c}) é Equilátero.`)
    } else if (a != b && b != c) {
        console.log(`Triângulo: (${a}, ${b}, ${c}) é Escaleno.`)
    } else if (a == b || a == c || b == c) {
        console.log(`Triângulo: (${a}, ${b}, ${c}) é Isósceles.`)
    }
}
exercicio2(1, 2, 3)
exercicio2(1, 1, 1)
exercicio2(4, 4, 5)

console.log(``)
console.log(`   Exercício 3 `)
console.log(``)
/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */
function exercicio3 (a, b) {
    console.log(`Potência: ${a} elevado à ${b} potência`)
    console.log(`Resultado: ${Math.pow(a, b)}`)
}

exercicio3(2, 2)

console.log(``)
console.log(`   Exercício 4 `)
console.log(``)
/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */

function exercicio4 (a, b) {
    console.log(`Divisão: ${a} dividio por ${b}`)
    console.log(`Resultado: ${(a / b)}`)
}
exercicio4(3, 2)

console.log(``)
console.log(`   Exercício 5 `)
console.log(``)
/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/
function exercicio5 (valor) {
    console.log(`R$${valor.toFixed(2).toString().replace(`.`, `,`)}`)
}

exercicio5(0.1 + 0.2)

console.log(``)
console.log(`   Exercício 6 `)
console.log(``)
/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function exercicio6jurosSimples(c, i, t, grana) {
    grana = (c * i * t) + c
    console.log(`R$${grana.toFixed(2).toString().replace(`.`, `,`)}`)
}

function exercicio6jurosCompostos(c, i, t, grana) {
    grana = c * Math.pow((1 + i), t)
    console.log(`R$${grana.toFixed(2).toString().replace(`.`, `,`)}`)
}

exercicio6jurosSimples(1000, 0.1, 1)
exercicio6jurosCompostos(2000, 0.1, 4)

console.log(``)
console.log(`   Exercício 7 `)
console.log(``)

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function exercicio7 (ax2, bx, c, d, x1, x2) {
    d = (bx ** 2) - (4 * ax2 * c)
    x1 = (-bx + Math.sqrt(d)) / (2 * ax2)
    x2 = (-bx - Math.sqrt(d)) / (2 * ax2)

    if (x1 > 0) {
        console.log(`Bhaskara: Valores A:${ax2}, B:${bx}, C:${c},
    Resolução: X1:${x1}, X2:${x2}`)
    }
    else {
        console.log(`Bhaskara: Valores A:${ax2}, B:${bx}, C:${c},
    Resolução: Não tem solução real`)
    }

    if (d < 0) {
        console.log(`Delta Negativo`)
    }
    else {
        console.log(`Delta Positivo`)
    }
    console.log(``)
}

exercicio7(3, -5, 12)
exercicio7(2, -10, 8)
exercicio7(2, 12, -14)

console.log(``)
console.log(`   Exercício 8 `)
console.log(``)
/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/
let listaString = "10, 20, 30, 40, 50, 1"
function exercicio8(listaString) {
    let jogosArray = listaString.split(`, `)
    let maior = jogosArray[0]
    let menor = jogosArray[0]
    let pior = 123
    let quebras = 0

    for (let i = 1; i < jogosArray.length; i++) {
        if (jogosArray[i] > maior) {
            maior = jogosArray[i]
            quebras++
        } else if (jogosArray[i] < menor) {
            menor = jogosArray[i]
            pior = jogosArray[i]
        }
    }
    console.log(`Pontuações superadas: ${quebras} 
Pior pontuação: ${pior}`)
}

exercicio8(listaString)


console.log(``)
console.log(`   Exercício 9 `)
console.log(``)


/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */

function exercicio9(nota) {
    if (nota >= 40) {
        console.log(`Nota ${nota}, aprovado.`)
    } else if (nota = 38 || 39) {
        console.log(`Nota ${nota}, aprovado.`)
    } else if (nota <= 37) {
        console.log(`Nota ${nota}, reprovado.`)
    }
}

exercicio9(41)

function exercicio9dois(nota) {
    switch (true) {
        case nota >= 40 && nota <= 100:
            console.log(`Nota ${nota}, Aprovado.`)
            break
        case nota == 39:
            console.log(`Nota ${nota}, Aprovado por arredondamento.`)
            break
        case nota == 38:
            console.log(`Nota ${nota}, Aprovado por arredondamento.`)
            break
        case nota <= 37:
            console.log(`Nota ${nota}, Reprovado.`)
            break
        default:
            console.log(`Nota: ${nota} Inválida.`)
    }
}

exercicio9dois(100)

/*function classificaAluno(nota) {                                  PROFESSOR
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
*/

console.log(``)
console.log(`   Exercício 10 `)
console.log(``)
/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/
function exercicio10 (int) {
    if ( int % 3 == 0) {
        console.log(`True`)
    }else console.log(`False`)
}

exercicio10(6)
exercicio10(11)