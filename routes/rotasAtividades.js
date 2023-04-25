var express = require('express');
var router = express.Router();
var controllerAtividades = require('../controller/controllerAtividades.js');

/* GET página de listagem de atividades */
router.get('/atividades', function(req, res, next) {
  controllerAtividades.tela_principal(req, res, next);
});

/* GET página de criação de atividade */
router.get('/atividades/criar', function(req, res, next) {
  controllerAtividades.criar_atividade(req, res, next);
});

/* POST rota para criar atividade */
router.post('/atividades/criar', function(req, res, next) {
  controllerAtividades.criar_atividade_post(req, res, next);
});

/* GET página de edição de atividade */
router.get('/atividades/editar/:id', function(req, res, next) {
  controllerAtividades.tela_edicao(req, res, next);
});

/* POST rota para editar atividade */
router.post('/atividades/editar/:id', function(req, res, next) {
  controllerAtividades.editar_atividade_post(req, res, next);
});

/* POST rota para deletar atividade */
router.post('/atividades/deletar/:id', function(req, res, next) {
  controllerAtividades.deletar_atividade(req, res, next);
});

module.exports = router;
