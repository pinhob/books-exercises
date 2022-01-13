class NegociacaoController {
  constructor() {
    // Para conseguir usar a variável $ como querySelector, precisamos fazer o bind dela para document, para mudar o contexto do this.
    let $ = document.querySelector.bind(document);
  
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._inputQuantidade = $('#quantidade');

  }

  adiciona(event) {
    event.preventDefault();

    let converter = new DateConverter();

    let data = converter.paraData(this._inputData.value);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    
    let diaMesAno = converter.paraTexto(negociacao.data);

    console.log(diaMesAno);
  }
};
