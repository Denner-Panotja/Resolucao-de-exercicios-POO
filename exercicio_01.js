 
/*. Escreva uma classe cujos objetos representam alunos matriculados em uma 
disciplina. Cada objeto dessa classe deve guardar os seguintes dados do 
aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os 
seguintes métodos para esta classe:
a. Média que calcula a média final do aluno (cada prova tem peso 2,5 e 
o trabalho tem peso 2)
b. Final calcula quanto o aluno precisa para a prova final (retorna zero se 
ele não for para a final) */

 class Aluno   //classes são modelos ou moldes de objetos
 {

    //atributos = variáveis ou características.

    _nome          //tipo string
    _matricula     //tipo int
    _nota1         //tipo float/real
    _nota2         //tipo float/real
    _trabalho      //tipo float/real
   
     
   //para encaplsular em JS, usa-se "_" para privado e publico nao necessita de nenhum símbolo.

  //metodos = funçao ou comportamentos

  //metodo construtor é uma funçao especial que é usada para criar e inicializar novos objetos.
  constructor (nome, matricula, nota1, nota2, trabalho){
       this._nome = nome
       this._matricula = matricula
       this._nota1 = nota1
       this._nota2 = nota2
       this._trabalho = trabalho
  }
   
  /*media(){
    const media_provas = (this._nota1) + (this._nota2) / 2;
    const media_final = ((media_provas * 2.5) + (this._trabalho * 2)) / 7.5;
    return parseFloat(media_final.toFixed(2));
  } */
   
  
  media(){  //metodo específico
    const media_provas = (this._nota1) + (this._nota2) / 2 //linha designda para  média aritmético
    const media_final = ((media_provas * 2.5) + (this._trabalho * 2)) /7.5 //linha designada para média ponderada
    return media_final.toFixed(2) //tofixed é uma função nativa do js para formatar o número de casas decimais.
   }
  
  notaFinal(){
     const media = this.media()
     if(media >= 6){
      return 0
     }else{
      const nota_final = (60 - media * 10) / 2
      return nota_final.toFixed(2)
     }
  }

 }

 //criar novo objeto a partir da classe ou como é chamado 'instanciar'.
 const aluno1 = new Aluno('Denner', 4321, 5.5, 7.1, 6.5)
 const aluno2 = new Aluno()

//atribuir valores para os atributos de um obejto

 //aluno1._nome =  'Denner'
 //aluno1._matricula = 1234
 //aluno1._nota1 = 7.5
 //aluno1._nota2 = 8.5
 //aluno1._trabalho = 3.0
 
 console.log("Aluno " + aluno1._nome)
 console.log("media " + aluno1.media())
 console.log("nota que precisa para passar: " + aluno1.notaFinal())