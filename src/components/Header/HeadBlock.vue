<template>
    <div className="HeadBlock">
        <div className="Invisible"></div>
        <div className="HeadInfoBlock">
            <h3>Я - ЧЕЛОВЕК, <span>КОТОРЫЙ СОЗДАСТ <br /> КРЕАТИВНЫЙ САЙТ ПОД ВАШИ ЦЕЛИ</span></h3>
            <p><span>Вы можете обсудить со мной ваш проект, <br /> нажав на кнопку ниже.</span></p>
            <Button :text="text"></Button>
        </div>
    </div>
</template>

<script>
    import Button from '../Button.vue'

    export default {
        components: { Button },
        data() {
            return {
                text: 'Обсудить проект'
            }
        },
    }

</script>

<style scoped>
    .HeadBlock{
        float: left;
        margin-top: 55px;
    }
    .HeadInfoBlock{
        padding: 20px 0 0 32px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .Invisible{
        position: absolute;
        z-index: -1;
        width: 100px;
        height: 100px;
        border-top: 1px solid #5EFFFF;
        border-left: 1px solid #5EFFFF;
    }


@media (max-width: 750px) {
    .Invisible{
        width: 60px;
        height: 60px;
    }
}
@media (max-width: 550px) {
    .Invisible{display: none;}
    .HeadInfoBlock{padding: 0;}
}
</style>