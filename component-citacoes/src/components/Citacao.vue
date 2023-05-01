<template>
    <div class="citacao">
        <slot></slot>
    </div>
</template>

<script>
export default {
    created(){
        console.log("citacao - created");
    },
    destroyed(){
        console.log("citacao - destroyed");
    },
    activated(){
        console.log("citacao - activated");
    },
    deactivated(){
        console.log("citacao - deactivated");
    },

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
