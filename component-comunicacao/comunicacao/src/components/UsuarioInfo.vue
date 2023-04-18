<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade é: <strong>{{ idade }}</strong></p>
        <button @click="reinicarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
        <button @click="fnAlterarIdade(31)">Alterar Idade (Callback)</button>
    </div>
</template>

<script>
export default {
    // props: {
    //     nome: String,
    // },
    // props: {
    //     nome: {
    //         type: String,
    //         required: true
    //     },
    // },
    // props: {
    //     nome: {
    //         type: String,
    //         default: 'Anonimo'
    //     },
    // },
    props: {
        nome: {
            type: String,
            // default: function(){
            //     return Array(10).fill(0).join(',');
            // }
            default: () => {
                return Array(10).fill(1).join(',');
            }
        },
        reiniciarFn: Function,
        idade: Number,
        fnAlterarIdade: Function,
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('');
        },
        reinicarNome(){
            this.nome = "Pedro";
            this.$emit("nomeMudou", this.nome);
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
