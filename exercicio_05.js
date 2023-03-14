/*Crie uma classe chamada Conta com os atributos número da conta, nome do 
titular e o saldo. Construa os métodos Saldo (mostra o saldo da conta), 
Depósito (aumenta o saldo da conta) e Saque (diminui o saldo da conta*/ 

class Conta {
    constructor(numeroConta, nomeTitular, saldo = 0) {
      this.numeroConta = numeroConta;
      this.nomeTitular = nomeTitular;
      this.saldo = saldo;
    }
  
    mostrarSaldo() {
      console.log(`O saldo da conta é R$${this.saldo.toFixed(2)}`);
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log(`Saldo insuficiente. Saque não realizado.`);
        return;
      }
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  }