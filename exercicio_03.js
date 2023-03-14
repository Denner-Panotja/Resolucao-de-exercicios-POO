/*Crie uma classe chamada Invoice que possa ser utilizado por uma loja de 
suprimentos de informática para representar uma fatura de um item vendido 
na loja. Uma fatura deve incluir as seguintes informações como atributos:
a. o número do item faturado,
b. a descrição do item,
c. a quantidade comprada do item e
d. o preço unitário do item.
Sua classe deve ter um construtor que inicialize os quatro atributos. Se a 
quantidade não for positiva, ela deve ser configurada como 0. Se o preço por 
item não for positivo ele deve ser configurado como 0.0. Forneça um método set 
e um método get para cada variável de instância. Além disso, forneça um método 
chamado getInvoiceAmount que calcula o valor da fatura (isso é, multiplica a 
quantidade pelo preço por item) e depois retorna o valor como um double. 
Escreva um aplicativo de teste que demonstra as capacidades da classe Invoice.
.*/

class Invooice         //classes são modelos ou molder de objetos
{
    _id_produto        //o número do item faturado
    _descricao_item    //a descrição do item
    _qtd_item          //a quantidade comprada do item 
    _preco_unitario    //o preço unitário do item

//metodo construtor é uma função especial pra criar ou inicializar novos objetos
constructor(id_produto, descricao_item, qtd_item, preco_unitario ){  
    this._id_produto = id_produto
    this._descricao_item = descricao_item
    if (qtd_item > 0){this._qtd_item = qtd_item} else{this._qtd_item = 0}                                //na linha 13 e 14 foi usado a função if/else para converter o número em 0 caso ele seja negativo.
    if (preco_unitario > 0) {this._preco_unitario = preco_unitario} else{this._preco_unitario = 0}
}

// esse metodo realiza o calculo da fatura da compra
getInvoiceAmount(){
    const valor_da_fatura = this._qtd_item * this._preco_unitario
    return valor_da_fatura
}

//metodos acessores servem para controlar a manipulação de atribuição e de acesso aos valores que fazem parte do atributos da classe.
//metodo 'get' significa pegar. Para voce acessa tal informação  necessita deste metodo.
get id_produto(){
    return this._id_produto
}
get descricao_item(){
    return this._descricao_item
}
get qtd_item(){
    return this._qtd_item
}
get preco_unitario(){
    return this._preco_unitario
}

//metodo 'set' significa configurar o valor. Para fazer alguma alteração do valor necessita deste metodo.
set id_produto(novoProduto){
    return this._id_produto = novoProduto
}
set descricao_item(novaDescricao){
    return this._descricao_item = novaDescricao
}
set qtd_item(novaQtd){
    return this._qtd_item = novaQtd
}
set preco_unitario(novoPreco){
    return this._preco_unitario = novoPreco
}
}

//criar um novo objeto a partir de alguma classe é chamdo de instância.
const fatura01 = new Invooice(01, 'Fonte', 2, 230)


console.log("Numero do item: " + fatura01.id_produto)
console.log("Descricao do produto: " + fatura01.descricao_item)
console.log("Quantidade do produto: " + fatura01.qtd_item)
console.log("Preco unitario: " + fatura01.preco_unitario)
console.log("Preco total: " + fatura01.getInvoiceAmount())