const produtoModel = require ('../models/produtoModel');

const getProdutos = async (request, response) => {
    const [produtos] = await produtoModel.getProdutos();
    return response.status(200).json(produtos);
}

const registarPrduto = async (request, response) => {
    const [produto] = await produtoModel.registarProduto (request.body);
    return response.status(201).json(produto);
}

const editarProduto = async (request, response) => {

    const { id } = request.params;
    const editar = await produtoModel.editarProduto (id, request.body);
    return response.status(201).json({ message: "Produto editado com sucesso"});
}

const deletarProd = async (request, response) => {
    const { id } = request.params;
    const mensagem = await produtoModel.deletarProduto(id);
    return response.status(204).json(mensagem);
}
module.exports = {
    getProdutos, 
    registarPrduto,
    editarProduto,
    deletarProd
}