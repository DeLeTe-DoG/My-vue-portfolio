<template>
    <div id="myProjects" className="myProjectsBlock">
        <h2 className="myProjectsBlockTitle">Реализованные проекты</h2>
        <img v-if="projectsCards.length != 1" className="rectangle" src="../../images/Rectangle.png">
        <ProjectCard v-for="(el,index) in projectsCards" :key="index" :el="el" :projectsCardsLenght="projectsCards.length"/>
        <img v-if="projectsCards.length != 1" className="rectangle" src="../../images/Rectangle.png">
    </div>
</template>

<script>
    import ProjectCard from './ProjectCard.vue';

    export default {
        components: { ProjectCard },
        data() {
            return {
                projectsCards: [
                    {
                        id: 1,
                        year: 2024,
                        title: 'Сайт-визитка по сдаче недвижимости',
                        description: 'Простой, но нежный дизайн сайта для сдачи недвижимости в г.Казань',
                        href:'https://kazan-flats.netlify.app',
                    },
                ],
            }
        },
    }
</script>

<style>
    .myProjectsBlockTitle{
        text-transform: uppercase;
        color: #5EFFFF;
        letter-spacing: 0.15em;
        font-size: 32px;
        margin-bottom: 30px;
    }
    .myProjectsBlock{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
    }
    .rectangle{
        width: 30px;
    }


@media (max-width:550px) {
    .rectangle{
        margin: 30px 0 15px 0;
        width: 20px;
    }
}
</style>