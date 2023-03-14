/* Escreva uma classe que determine as raízes de uma equação de 2º grau: 
ax2 + bx + c = 0 (recordar que o discriminante Δ = b2 – 4ac, e que a raiz r = 
(–b ± √Δ)/2a).
*/

class EquacaoSegundoGrau {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.raiz1 = null;
    this.raiz2 = null;
  }

  calcularRaizes() {
    const delta = Math.pow(this.b, 2) - 4 * this.a * this.c;

    if (delta < 0) {
      console.log("A equação não possui raízes reais.");
    } else if (delta === 0) {
      this.raiz1 = -this.b / (2 * this.a);
      console.log(`A equação possui uma raiz real: ${this.raiz1}`);
    } else {
      this.raiz1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      console.log(`A equação possui duas raízes reais: ${this.raiz1} e ${this.raiz2}`);
    }
  }
}

const minhaEquacao = new EquacaoSegundoGrau(1, -5, 6);
minhaEquacao.calcularRaizes();
console.log(minhaEquacao.raiz1);
console.log(minhaEquacao.raiz2);