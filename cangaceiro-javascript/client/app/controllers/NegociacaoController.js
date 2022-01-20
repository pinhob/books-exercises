class NegociacaoController {
  constructor() {
    // Para conseguir usar a variável $ como querySelector, precisamos fazer o bind dela para document, para mudar o contexto do this.
    const $ = document.querySelector.bind(document);
  
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._inputQuantidade = $('#quantidade');
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoes');
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView('#mensagemView');

    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();
    this._negociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._negociacoes);
    this._mensagem.texto = 'Negociação criada com sucesso'
    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  apaga() {
    this._negociacoes.esvazia();
    this._negociacoesView.update(this._negociacoes);
    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
  }
};
