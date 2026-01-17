const conexao = require ('../Conexao/conexao');

const registarVenda = async (venda) => 
{
    const data = new Date();
    const { quantidade, nome } = venda;

    const [produto] = await conexao.execute ('SELECT id_produto, preco FROM produto where nome = ?', [nome]);

    const {id_produto, preco} = produto[0];
    const total = quantidade * preco;
    const [vendas] = await conexao.execute ('INSERT INTO venda (data_venda, total) VALUES (?,?)', [data, total]);

    const id_venda = vendas.insertId;
    const itenvenda = await conexao.execute ('INSERT into itens_venda (id_venda, id_produto, quantidade) VALUES (?,?,?)', [id_venda, id_produto, quantidade]);
    return vendas;
}

module.exports = {registarVenda}