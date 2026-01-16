const conexao = require ('../Conexao/conexao');


const getProdutos = async () => {

    const produtos = await conexao.execute ('SELECT * from produto');
    return produtos;
}

const registarProduto = async (produto) => {
    const { nome, preco, stock } = produto;

    const data_criacao = new Date();
    const cadastrarproduto = await conexao.execute ('INSERT INTO produto (nome, preco, stock, data_criacao) VALUES (?,?,?,?)',
        [nome,preco,stock,data_criacao]
     );
     return cadastrarproduto;
}


const editarProduto = async (id,produto) => {
    const { stock } = produto;
    const produt = conexao.execute ('Update produto set stock = ? where id_produto = ?', [stock, id]);
    return produt;
}


const deletarProduto = async (id) => {
    const mensagem = "Produto com ID: "+id+" foi excluido com sucesso!";
    const produto = await conexao.execute ('DELETE FROM produto where id_produto = ?', [id]);
    return mensagem;
}
module.exports = {
    getProdutos,
    registarProduto,
    editarProduto,
    deletarProduto
}