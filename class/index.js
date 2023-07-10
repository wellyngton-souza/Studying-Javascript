class comercio{
    constructor(){
        this.produtos = new Map();
    }

    addProduto(produto){
        this.produtos.set(produto.nome, produto.valor);
    }
}

class produto{
    constructor(n, p, t, v){
        this.nome = n;
        this.peso = p;
        this.tamanho = t;
        this.valor = v;
    }

    getProduto(){
        return [
            this.nome,
            this.peso,
            this.tamanho,
            this.valor
        ];
    }
}

let Banco = new comercio();

const CriarProduto = (fruta, peso, tamanho, preco) =>{
    let meuProduto = new produto(fruta, peso, tamanho, preco);
    Banco.addProduto(meuProduto);
};

CriarProduto("banana", "10", "p", "38 RS");
CriarProduto("mexerica", "20", "m", "50 RS");
CriarProduto("melão", "30", "m", "150 RS");

console.log(Banco.produtos);