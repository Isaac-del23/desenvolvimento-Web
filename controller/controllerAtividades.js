const atividades = require('../model/atividadeMemoria.js');

// função que renderiza a tela principal
exports.tela_principal = async function (req, res) {
    const contexto = {
        titulo_pagina: "Gerenciador de Atividades",
        atividades: await atividades.lista(),
    }
    res.render('index', contexto);
}

// função que renderiza a tela de criação de atividade
exports.cria_get = async function (req, res) {
    const contexto = {
        titulo_pagina: "Criação de Atividade",
        prioridades: atividades.prioridades,
    }
    res.render('criaAtividade', contexto);
}

// função que cria uma nova atividade
exports.cria_post = async function (req, res) {
    // obtém as informações do formulário
    const novaAtividade = {
        id: atividades.length + 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        prioridade: req.body.prioridade
    };
    atividades.push(novaAtividade);
    res.redirect('/novaAtividade');

}


// função que renderiza a tela de edição de atividade
exports.edita_get = async function (req, res) {
    // obtém o id da atividade a ser editada
    const id = req.params.id;
    // busca a atividade pelo id
    const atividade = await atividades.busca(id);
    if (atividade) {
        const contexto = {
            titulo_pagina: "Edição de Atividade",
            atividade: atividade,
            prioridades: atividades.prioridades,
        }
        res.render('editaAtividade', contexto);
    } else {
        // se a atividade não for encontrada, redireciona para a página principal
        res.redirect('/');
    }
}

// função que atualiza uma atividade
exports.edita_post = async function (req, res) {
    // obtém as informações do formulário
    const id = req.params.id;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const prioridade = req.body.prioridade;
    // atualiza a atividade
    await atividades.atualiza(id, titulo, descricao, prioridade);
    // redireciona para a página principal
    res.redirect('/');
}

// função que exibe uma atividade
exports.exibe = async function (req, res) {
    // obtém o id da atividade a ser exibida
    const id = req.params.id;
    // busca a atividade pelo id
    const atividade = await atividades.busca(id);
    if (atividade) {
        // formata a data de criação para exibição
        const data_criacao = atividade.criado_em.toLocaleDateString('pt-BR');
        const contexto = {
            titulo_pagina: "Detalhes da Atividade",
            atividade: atividade,
            data_criacao: data_criacao,
        }
        res.render('exibeAtividade', contexto);
    } else {
        // se a atividade não for encontrada, redireciona para a página principal
        res.redirect('/');
    }
}

// função que exclui uma atividade
exports.exclui = async function (req, res) {
    // obtém o id da atividade a ser excluída
    var id = req.params.id;

    // chama a função para excluir a atividade com o id fornecido
    await atividades.exclui(id);

    // redireciona para a página principal
    res.redirect('/');
}
