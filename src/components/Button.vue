<template>
    <button @click="openModal"><p>{{ text }}</p></button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
            }
        },
        methods: {
            openModal() {
                document.querySelector('body').classList.add('stoppedBody')
                document.querySelector('.modal').classList.remove('hiddenModal')
            },
        },
    }
</script>
    
<style scoped>
    button{
        color: #fff;
        width: 250px;
        height: 50px;
        border: #5EFFFF solid 2px;
        border-radius: 25px;
        background-color: transparent;
    }
    button:hover{
        cursor: pointer;
    }
    p{color: #fff;}
</style>