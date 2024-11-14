<template>
    <div className="footer">
        <div className="comAndHeading">
            <FooterComBlock />
            <FooterHeading />
        </div>
        <FooterNav />
    </div>
</template>

<script>
import FooterComBlock from './FooterComBlock.vue';
import FooterHeading from './FooterHeading.vue';
import FooterNav from './FooterNav.vue';

    export default {
        components: { FooterComBlock, FooterHeading, FooterNav }
    }
</script>

<style scoped>
    .comAndHeading{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 110px;
    }
</style>