new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou alertando agora!')
        },
        alterarValor(event) {
            this.valor = event.target.value
            console.log(event);
        }   
    }
})