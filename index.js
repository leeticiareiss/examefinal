var app = new Vue({
    el: '#app',
    data: {
      titulo: 'Exame Final',
      itemParaAdicionar: '',
      lista: []
    },
    methods: {
        adicionar() {
            this.lista.push(this.itemParaAdicionar);
            this.descricao = ''
        },
        remover(index) {
            this.lista.splice(index, 1);
        }
    }
  })