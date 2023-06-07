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

*Observação: fiz a resolução deste exercício e dos próximos em um arquivo HTML, para variar um pouco.*

### 09 - Cálculo de tarifas.

Crie um programa que exibe o valor de uma tarifa dependendo da idade e tipo do usuário (estudante ou regular).

O valor básico é R$2,50. Esse valor é alterado de acordo com a regra a seguir:

- Menores de 6 anos: grátis, tarifa zero;
- Estudantes: 50% de desconto;
- Idosos (60+): 30% de desconto;
- Regular: tarifa normal.

### 10 - Somatório 1 a N

Receba/armazene um valor `N` e exiba o resultado da soma de 1 até `N`

