// Definição da classe Atividade
class Atividade {
  constructor(id, titulo, descricao, prioridade, dataCriacao) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.dataCriacao = dataCriacao;
  }
}

// Importação da classe Atividade no arquivo "modelos.js"
const lista_atividades = []; // será um vetor de objetos do tipo Atividade

class AtividadeMemoria {
  async atualiza(id, titulo, descricao, prioridade, dataCriacao) {
    lista_atividades[id] = new Atividade(
      id,
      titulo,
      descricao,
      prioridade,
      dataCriacao
    );
    return lista_atividades[id];
  }

  async cria(titulo, descricao, prioridade, dataCriacao) {
    const id = lista_atividades.length; // Incrementa o ID a cada nova atividade
    lista_atividades[id] = new Atividade(
      id,
      titulo,
      descricao,
      prioridade,
      dataCriacao
    );
    return lista_atividades[id];
  }

  async consulta(id) {
    if (lista_atividades[id]) return lista_atividades[id];
    else throw new Error(`Atividade com o ID ${id} não existe`);
  }

  async deleta(id) {
    if (lista_atividades[id]) {
      delete lista_atividades[id];
    } else throw new Error(`Atividade com o ID ${id} não existe`);
  }

  async lista() {
    return Object.values(lista_atividades);
  }

  async lista_chaves() {
    return Object.keys(lista_atividades); // função que retorna a lista de chaves/índices do vetor
  }

  async qtd() {
    return lista_atividades.length;
  }
}

// Cria um objeto do tipo AtividadeMemoria que será utilizado para gerenciar as atividades
var atividades = new AtividadeMemoria();
module.exports = atividades;

