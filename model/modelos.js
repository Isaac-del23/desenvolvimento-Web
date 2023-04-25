// Neste arquivo serão definidos todos os modelos de dados da aplicação
class Atividade {
  constructor(id, titulo, descricao, prioridade, dataCriacao) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
      this.prioridade = prioridade;
      this.dataCriacao = dataCriacao;
  }
  get id() {
      return this.id;
  }
  get titulo() {
      return this.titulo;
  }
  get descricao() {
      return this.descricao;
  }
  get prioridade() {
      return this.prioridade;
  }
  get dataCriacao() {
      return this.dataCriacao;
  }
  set titulo(novoTitulo) {
      this.titulo = novoTitulo;
  }
  set descricao(novaDescricao) {
      this.descricao = novaDescricao;
  }
  set prioridade(novaPrioridade) {
      this.prioridade = novaPrioridade;
  }
  set dataCriacao(novaDataCriacao) {
      this.dataCriacao = novaDataCriacao;
  }
}
module.exports = Atividade;