<template>
    <div id="aboutMyWork" className="aboutMyWorkBlock">
        <div v-for="(el, index) in cards" :key="index" className="aboutMyWorkCard">
            <h3 className="aboutMyWorkTitle">{{ el.title }}</h3>
            <p className="aboutMyWorkDescription">{{ el.description }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: 'Связь',
                    description: 'Всегда на связи в рабочее время',
                },
                {
                    id: 2,
                    title: 'Отношение',
                    description: 'Ответственно отношусь к своей работе и соблюдаю дедлайны',
                },
                {
                    id: 3,
                    title: 'Ваше мнение',
                    description: 'Учитываю и реализовываю ваши поправки',
                },
                {
                    id: 4,
                    title: 'Страсть',
                    description: 'Я люблю то, чем я занимаюсь',
                },
            ],
        }
    },
}
</script>

<style scoped>
    .aboutMyWorkBlock{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        height: 200px;
    }
    .aboutMyWorkCard{
        display:flex;
        flex-direction: column;
        align-items: center;
        /* gap: 20px; */
        width: 250px;
        border: 3px solid #5EFFFF;
        border-radius: 25px;
        height: 50px;
        position: relative;
        transition: all 0.5s ease-in;
        overflow: hidden;
    }
    .aboutMyWorkTitle{
        color: white;
        font-size: 28px
    }
    .aboutMyWorkDescription{
        padding: 10px;
        height: 0;
        /* display: none; */
        opacity: 0;
        transition: all 0.2s ease-in;
    }
    .aboutMyWorkCard:hover{
        height: max-content;
    }
    .aboutMyWorkCard:hover .aboutMyWorkDescription{
        /* display: block; */
        height: max-content;
        opacity: 1;
    }
    
</style>