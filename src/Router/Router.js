const express = require ('express');
const router = express.Router();
const produtoController = require ('../controllers/produtoController');
module.exports=router;

router.get ('/listaprodutos', produtoController.getProdutos);
router.post ('/registarproduto', produtoController.registarPrduto);
router.put ('/editarproduto/:id', produtoController.editarProduto);
router.delete ('/deletarproduto/:id', produtoController.deletarProd);