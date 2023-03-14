/* A fim de representar empregados em uma firma, crie uma classe chamada 
Empregado que inclui as três informações a seguir como atributos:
a. um primeiro nome,
b. um sobrenome, e
c. um salário mensal.
Sua classe deve ter um construtor que inicializa os três atributos. Forneça um 
método set e get para cada atributo. Se o salário mensal não for positivo, 
configure-o como 0.0. Escreva um aplicativo de teste que demonstra as 
capacidades da classe. Crie duas instâncias da classe e exiba o salário anual de 
cada instância. Então dê a cada empregado um aumento de 10% e exiba 
novamente o salário anual de cada empregado.
*/

class Empregado{

    _primeiro_nome
    _sobrenome
    _salario_mensal    


    constructor(primeiro_nome, sobrenome, salario_mensal){
        this._primeiro_nome = primeiro_nome
        this._sobrenome = sobrenome
        this.salario_mensal = salario_mensal > 0 ? salario_mensal : 0
    }

    get primeiro_nome(){
        return this._primeiro_nome 
    }
    get sobrenome(){
        return this._sobrenome
    }
    get salario_mensal(){
        return this._salario_mensal
    }

    set primeiro_nome(novoPrimeiroNome){
        return this._primeiro_nome = novoPrimeiroNome
    }
    set sobrenome(novoSobrenome){
        return this._sobrenome = novoSobrenome
    }
    set salario_mensal(novoSalarioMensal){
        this._salario_mensal = novoSalarioMensal > 0 ? novoSalarioMensal : 0
    }

    get salarioAnual() {
        return this._salario_mensal * 12;
      }

    aumento_salario(){
      this._salario_mensal *= 1.1
    }
}

const empregado01 = new Empregado('Rodrigo', 'Silva', 2300)
const empregado02 = new Empregado('Roberto', "Oliveira", 1972)

console.log(`Empregado: ${empregado01.primeiro_nome} tem o salarial anual de: R$ ${empregado01.salarioAnual.toFixed(2)}`)
console.log(`Empregado: ${empregado02.primeiro_nome} tem o salarial anual de: R$ ${empregado02.salarioAnual.toFixed(2)}`)
console.log("\n")
empregado01.aumento_salario()
empregado02.aumento_salario()

console.log(`Empregado: ${empregado01.primeiro_nome} tem o salário anual de: ${empregado01.salarioAnual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`Empregado: ${empregado02.primeiro_nome} teve um aumento salarial anual para: ${empregado02.salarioAnual.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)
