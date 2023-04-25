const express = require('express');
const router = express.Router();

// Importação do modelo de dados 
const atividades = require('../model/atividadeMemoria.js');

/* OBTER todas as atividades. */
router.get('/', async function(req, res) { 
  const listaAtividades = await atividades.lista();
  res.render('index', { 
    title: 'Minhas atividades',
    atividades: listaAtividades 
  });
});

/* OBTER uma atividade específica. */
router.get('/:id/exibeAtividade', async function(req, res) {
  const atividade = await atividades.buscaPorId(req.params.id);
  res.render('exibeAtividade', {
    title: 'Exibe Atividade',
    atividade: atividade
  });
});


/* RENDERIZAR página de criação de nova atividade. */
router.get('/novaAtividade', function(req, res) {
  contexto = { 
    title: "Nova Atividade",
  }
  res.render('novaAtividade', contexto); 
});

/* RENDERIZAR página de edição de uma atividade. */
router.get('/:id/editaAtividade', async function(req, res) {
  const atividade = await atividades.buscaPorId(req.params.id);
  res.render('editaAtividade', {
    title: 'Edita Atividade',
    atividade: atividade
  });
});

/* CRIAR uma nova atividade. */
router.post('/atividades', async function(req, res) {
  const id = req.body.length + 1;
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const prioridade = req.body.prioridade;
  await atividades.cria(titulo, descricao, prioridade);
  res.redirect('/');
});

/* EDITAR uma atividade existente. */
router.put('/:id', async function(req, res) {
  const id = req.params.id;
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const prioridade = req.body.prioridade;
  await atividades.atualiza(id, titulo, descricao, prioridade);
  res.redirect('/atividades');
});

/* EXCLUIR uma atividade existente. */
router.delete('/:id', async function(req, res) {
  const id = req.params.id;
  await atividades.exclui(id);
  res.redirect('/atividades');
});

module.exports = router;





module.exports = router;
