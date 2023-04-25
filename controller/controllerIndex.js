// importação da classe que gerencia as atividades na memória
const atividades = require('../model/modelo.js');

// função para formatar a data no formato "dd/mm/yyyy"
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function (req, res) {
  const contexto = {
    titulo_pagina: "Gerenciador de Atividades",
    atividades: await atividades.lista(),
  };
  // renderiza o arquivo index.hbs, dentro da pasta view
  res.render('index', contexto);
}
exports.equipe = async function(req, res){
  contexto = {
  titulo_pagina: "Sobre nossa Equipe de desenvolvedores",
  }
  // renderiza o arquivo na dentro da pasta view
  res.render('desenvolvedores', contexto);
  }  
// função para renderizar a página de criação de atividades
exports.tela_criar = async function (req, res) {
  const contexto = {
    titulo_pagina: "Criar Nova Atividade",
  };
  // renderiza o arquivo criar.hbs, dentro da pasta view
  res.render('criar', contexto);
}

// função para criar uma nova atividade
exports.criar_atividade = async function (req, res) {
  const { titulo, descricao, prioridade } = req.body;
  const dataCriacao = new Date();
  await atividades.cria(titulo, descricao, prioridade, dataCriacao);
  res.redirect('/');
}

// função para renderizar a página de edição de uma atividade
exports.tela_editar = async function (req, res) {
  const id = req.params.id;
  const atividade = await atividades.consulta(id);
  const contexto = {
    titulo_pagina: "Editar Atividade",
    atividade,
  };
  // renderiza o arquivo editar.hbs, dentro da pasta view
  res.render('editar', contexto);
}

// função para atualizar uma atividade existente
exports.atualizar_atividade = async function (req, res) {
  const id = req.params.id;
  const { titulo, descricao, prioridade } = req.body;
  const dataCriacao = await atividades.consulta(id).dataCriacao;
  await atividades.atualiza(id, titulo, descricao, prioridade, dataCriacao);
  res.redirect('/');
}

// função para excluir uma atividade
exports.excluir_atividade = async function (req, res) {
  const id = req.params.id;
  await atividades.deleta(id);
  res.redirect('/');
}

// função para renderizar a página de consulta de uma atividade
exports.tela_consulta = async function (req, res) {
  const id = req.params.id;
  const atividade = await atividades.consulta(id);
  const contexto = {
    titulo_pagina: "Detalhes da Atividade",
    atividade: {
      ...atividade,
      dataCriacao: formatDate(atividade.dataCriacao),
    },
  };
  // renderiza o arquivo consulta.hbs, dentro da pasta view
  res.render('consulta', contexto);
}
