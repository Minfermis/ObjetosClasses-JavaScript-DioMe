/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

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

const jose = new Pessoas('José', 70, 1.75);
console.log(jose.classificarImc());
const Emerson = new Pessoas('Emerson',72,1.65);
console.log(Emerson.classificarImc());



