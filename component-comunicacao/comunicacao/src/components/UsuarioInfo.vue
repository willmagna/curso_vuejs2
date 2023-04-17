<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
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
