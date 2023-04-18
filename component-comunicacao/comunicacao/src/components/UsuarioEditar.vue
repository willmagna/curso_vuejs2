<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade é: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="fnAlterarIdade(32)">Alterar Idade (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
        fnAlterarIdade: Function,
    },
    methods: {
        alterarIdade(){
            this.$emit("idadeMudou", 33);
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
