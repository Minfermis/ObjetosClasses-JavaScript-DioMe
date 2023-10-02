# Projeto: Calculadora de IMC (Índice de Massa Corporal) em JavaScript

## Descrição do Projeto

Este projeto envolve a criação de uma classe chamada "Pessoas" em JavaScript para representar indivíduos e calcular seus Índices de Massa Corporal (IMC). O IMC é uma métrica comum usada para avaliar a saúde com base no peso e altura de uma pessoa. Este código encapsula informações sobre peso, altura e nome das pessoas, permitindo o cálculo do IMC e a classificação do estado de saúde.

## Detalhes Técnicos

### Classe Pessoas

- Uma classe chamada "Pessoas" é criada para modelar indivíduos. As classes são como blueprints que definem como objetos específicos podem ser criados.

~~~JavaScript
class Pessoas {
~~~

### Atributos

- Cada instância da classe "Pessoas" possui três atributos essenciais: nome, peso e altura. Estes atributos representam informações vitais sobre uma pessoa.

~~~JavaScript
    nome;
    peso;
    altura;
~~~

### Construtor

- O construtor da classe "Pessoas" é responsável por inicializar as informações de uma pessoa. Os parâmetros passados ao construtor incluem nome, peso e altura, que são usados para criar uma nova pessoa.

~~~JavaScript
    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
~~~

### Método CalcularIMC

- Este método calcula o Índice de Massa Corporal (IMC) de uma pessoa usando sua altura e peso. O IMC é uma medida que auxilia na avaliação do estado de saúde com base no peso e altura.

~~~JavaScript
    CalcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
~~~

### Método classificarImc

- O método "classificarImc" usa o valor calculado do IMC para classificar o estado de saúde da pessoa em categorias como "Abaixo do peso", "Peso normal", "Acima do peso", "Obeso" ou "Obesidade Grave". Isso ajuda a interpretar o significado do IMC calculado.

~~~JavaScript
    classificarImc(){
        const IMC = this.CalcularIMC();
        if (IMC < 18.5) {
            return ('Abaixo do peso'); }
        
        else if  (IMC >=18.5 && IMC <=25 ) {
            return ( 'Peso normal'); }
        
        else if (IMC >25 && IMC <=30 ) {
            return ('Acima do peso'); }
        
        else if (IMC >30 && IMC <=40 ) {
            return ('Obeso'); }
        
        else  { 
            return ('Obesidade Grave');}
    }

}
~~~

## Exemplos Práticos

- São criados dois objetos da classe "Pessoas", um chamado "José" e outro chamado "Emerson", cada um com seu próprio nome, peso e altura.

~~~JavaScript
const jose = new Pessoas('José', 70, 1.75);
const Emerson = new Pessoas('Emerson',72,1.65);
~~~

- Os objetos "José" e "Emerson" usam o método "classificarImc" para determinar em qual categoria de IMC eles se enquadram.

~~~JavaScript
console.log(jose.classificarImc());
console.log(Emerson.classificarImc());
~~~

## Conclusão

Este projeto demonstra como criar uma classe em JavaScript para representar objetos e realizar cálculos úteis, como o cálculo do IMC. Ele ilustra a encapsulação de informações e a categorização de dados para tomar decisões sobre a saúde de uma pessoa. Este código é uma aplicação prática da programação orientada a objetos e pode ser útil em cenários de monitoramento de saúde e bem-estar.

