const express = require ('express');
const router = express.Router();
const produtoController = require ('../controllers/produtoController');
const vendaController = require ('../controllers/vendaController');
module.exports=router;


//ROUTER PARA PRODUTOS
router.get ('/listaprodutos', produtoController.getProdutos);
router.post ('/registarproduto', produtoController.registarPrduto);
router.put ('/editarproduto/:id', produtoController.editarProduto);
router.delete ('/deletarproduto/:id', produtoController.deletarProd);

//ROUTER PARA VENDAS
router.post ('/registarvenda', vendaController.registoVenda);