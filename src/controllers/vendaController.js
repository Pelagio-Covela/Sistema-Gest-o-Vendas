const vendaModel = require ('../models/vendaModel');


const registoVenda = async (request, response) => {

    const venda = vendaModel.registarVenda(request.body);
    return response.status(201).json(venda);
}


module.exports = {registoVenda};