# Desafios de JavaScript

Aqui há uma série de desafios/exercícios propostos pelo Matheus Battisti em seu curso "Desafios de JavaScript - entrevistas e testes técnicos", disponível na [Udemy](https://www.udemy.com/course/desafios-de-javascript-entrevistas-e-testes-tecnicos/).

A complexidade vai aumentando a cada desafio, começando dos fundamentos até chegar em temas mais avançados como manipulação de DOM e assincronismo.

## Lista dos desafios

Segue abaixo o que é pedido em cada desafio. Minha resolução para cada um também se encontra neste repositório, sendo que o nome de cada arquivo é referente ao número do desafio. 

Você também pode conferir o [repositório do instrutor](https://github.com/matheusbattisti/desafios_javascript) com todas as soluções.

### 01 - Conversão de temperatura 

Criar um código para conversão de temperatura entre Celsius e Fahrenheit.

Fórmulas:

$$F = (C * \dfrac{9}{5}) + 32$$


$$C = (F - 32)*\dfrac{5}{9}$$

### 02 - Cálculo de IMC

Criar um código para calcular o Índice de Massa Corporal, recebendo dados de altura e peso.

Fórmula:

$$IMC = peso \div altura^2$$

### 03 - Concatenação de strings

Receba ou armazene três dados (nome, idade e cidade) e exiba uma mensagem concatenando estes dados.

### 04 - Área e perímetro de retângulo

Receba ou armazene os valores de lado de um retângulo e exiba os valores de área e perímetro.

### 05 - Verificação de divisibilidade

Receba ou armazene dois valores (`x` e `y`) e informe se `x` é divisível por `y` (a divisão dá resto zero).

### 06 - Classificação de faixa etária

Receba ou armazene um valor de idade e informe a que faixa etária a idade pertence, baseado na classificação abaixo:

- Criança: 0 a 12 anos;
- Adolescente: 13 a 17 anos;
- Adulto: 18 a 59 anos;
- Idoso: 60+ anos.

Faça a verificação utilizando **if/else**.

### 07 - Comparação de números

Crie um programa que compara dois números e informa se o primeiro é maior, menor ou igual ao segundo. 

Utilize **if/else**.

### 08 - Calculadora

Faça uma calculadora básica, que recebe dois números e a operação entre eles, e retorne o resultado. 

Utilize o **switch** para armazenar a operação escolhida.

*Observação: fiz a resolução deste exercício e do próximo em um arquivo HTML, para variar um pouco.*

### 09 - Cálculo de tarifas.

Crie um programa que exibe o valor de uma tarifa dependendo da idade e tipo do usuário (estudante ou regular).

O valor básico é R$2,50. Esse valor é alterado de acordo com a regra a seguir:

- Menores de 6 anos: grátis, tarifa zero;
- Estudantes: 50% de desconto;
- Idosos (60+): 30% de desconto;
- Regular: tarifa normal.

### 10 - Somatório 1 a N

Receba/armazene um valor `N` e exiba o resultado da soma de 1 até `N`.

O desafio deve ser feito utilizando estruturas de repetição. 

### 11 - Tabuada

Receba/armazena um número `N` e exiba a tabuada desse número, de 1 até 10.

O desafio deve ser feito utilizando estruturas de repetição. 

### 12 - Números primos

Receba/armazene um valor `N` e exiba todos os números primos de 1 até `N`.

O desafio deve ser feito utilizando estruturas de repetição. 

### 13 - Padrão de asteriscos

Faça um código que recebe/armazena um valor `N` e exibe um padrão de asteriscos (`*`) até esse valor. 

O padrão é: um asterisco na linha 1, dois asteriscos na linha 2, ..., `N` asteriscos na linha `N`.

### 14 - Fibonacci

Receba/armazene um número `N` e exiba a sequência de Fibonacci até `N`.

### 15 - Par ou ímpar

Crie uma função que recebe um valor `N` como argumento e verifica se é par ou ímpar. Imprima o resultado na tela.

### 16 - Fatorial

Crie uma função que retorne o fatorial de um número, passado como parâmetro. Imprima o resultado na tela.

### 17 - Máximo e mínimo

Crie duas funções. Ambas irão receber dois número, `N` e `M`, como argumentos. Uma deve retornar o maior valor entre os dois números. A outra deve retornar o menor valor. Imprima os resultados na tela.

### 18 - Inversão de string

Crie uma função que recebe uma string e retorna seu inverso. Imprima o resultado na tela.

### 19 - Contagem de vogais

Crie uma função que recebe uma string e retorna a quantidade de vogais no texto recebido. Imprima o resultado na tela.

### 20 - Palíndromo

Crie uma função que identifica se uma palavra ou frase é palíndromo.

> Palíndromo: frase ou palavra que, quando lida em ordem reversa, obtém-se a mesma frase ou palavra.

### 21 - Array de números aleatórios

Crie uma função que gera um array de números aleatórios. A função recebe como argumento: tamanho do array, valor mínimo e valor máximo dos números.

### 22 - Elemento mais frequente

Crie uma função que recebe um array como argumento e retorna o elemento que mais aparece no array.

### 23 - Remoção de elementos repetidos

Crie um programa que recebe um array, remove os elementos que estiverem repetidos e retorna um array sem essas repetições.

### 24 - Concatenar arrays

Receba dois arrays e retorne um novo array que é a união de todos os elementos dos arrays anteriores.

Exemplo:

    Entrada: [0, 1, 2] e [1, 2, 3]
    Saída: [0, 1, 2, 1, 2, 3]

### 25 - Interseção de arrays

Receba dois arrays e retorne um novo array com os elementos que os dois arrays anteriores têm em comum.

### 26 - Média dos elementos

Crie um programa que recebe um array numérico e retorna a média dos valores desses elementos.

### 27 - Soma de propriedades de um objeto

Seu programa irá receber um objeto com diversas propriedades contendo valores numéricos. Você deve retornar a soma dos valores dessas propriedades.

### 28 - Filtrando propriedades

Faça um programa que exiba somente as propriedades de um objeto que o usuário desejar.

Seu programa irá receber um objeto e um array contendo as propriedades desejadas. 

Extra: faça uma verificação se a propriedade passada no array existe no objeto.

### 29 - União de objetos

Seu programa irá receber dois objetos com propriedades variadas. Você deve retornar um novo objeto que contenha todas as propriedades dos dois objetos anteriores.

Dúvida: e se os objetos possuírem uma mesma propriedade? 

- Não tratei este caso. O comportamento do JS é sobrescrever a propriedade caso você passe um novo valor para a propriedade que já existe.

- Uma solução seria incluir os valores em um array, quando a propriedade já existe.

### 30 - Manipulando DOM 

Este e os próximos exercícios serão manipulação de DOM, então estarão em um arquivo HTML com o JavaScript incluso ao final da tag `body`

Para o desafio 30, você deve criar um arquivo HTML contendo uma tag `h1` e um texto dentro dela. Usando JavaScript, você deve alterar o texto de `h1`.

### 31 - Alterando CSS

Crie uma página com vários parágrafos e altere a cor de todos eles de uma vez, utilizando JavaScript.

### 32 - Alternar classes

Crie uma div que recebe um estilo de `background-color`. Crie também um botão que, ao ser clicado, adiciona ou remove uma classe a essa div. Essa classe adicional deve alterar o `background-color` da div. 

### 33 - Adicionar elementos

Crie uma página com várias `li`s e um botão. Ao ser pressionado, o botão deve criar uma nova `li`.

### 34 - Remover elementos

Aproveitando a página criada no desafio 33, adicione um evento de click aos `li`s para que sejam removidos quando clicados.

### 35 - Filtro por palavra

Faça uma página que possui uma lista de palavras e um input. Ao digitar uma palavra no input, mantenha somente os itens que coincidem com a palavra digitada.