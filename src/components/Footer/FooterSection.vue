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


@media (max-width: 1100px) {
    .comAndHeading{
        flex-direction: column;
        border: none;
        align-items: flex-start;
        gap: 100px;
        margin-bottom: 50px;
        display: block;
    }
}
@media (max-width:550px) {
    .CandBSection{
        gap:40px;
    }
}
</style>