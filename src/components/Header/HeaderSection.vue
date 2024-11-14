<template>
    <div>
        <HeadingTitle />
        <HeadBlock />
    </div>
</template>

<script>
import HeadingTitle from './HeadingTitle.vue';
import HeadBlock from './HeadBlock.vue';

    export default {
        components: { HeadBlock, HeadingTitle },
    }
</script>

<style scoped>
    div{margin-bottom: 300px;}
</style>