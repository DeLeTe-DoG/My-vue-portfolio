<template>
    <div className="projectCard">
        <img v-if="el.id % 2 != 1" className="projectCardImg leftImg" src="../../images/kazan-flats-scr.png">
        <div :class="[el.id % 2 ? 'right' : 'left', 'pojectCardInfo']">
            <div className='projectCardHeading'>
                <div className="yearRectangle"><p>{{ el.year }}</p></div>
                <h3 className="projectCardTitle">{{ el.title }}</h3>
            </div>
            <p class="projectCardDescription">{{ el.description }}</p>
            <div className="goToSiteButton">
                <img className="arrow toLeft" v-if="el.id % 2 != 1" src="../../images/ArrowLeft.png">
                <a :href="el.href"><h4>Перейти на сайт</h4></a>
                <img className="arrow toRight" v-if="el.id % 2" src="../../images/ArrowRight.png">
            </div>
        </div>
        <img v-if="el.id % 2" className="projectCardImg rightImg" src="../../images/kazan-flats-scr.png">
    </div>
    <img v-if="el.id != projectsCardsLenght" className="line" src="../../images/Line.png">
</template>

<script>
    export default {
        props: {
            el: {
                type: Object,
                required: true,
            },
            projectsCardsLenght: {
                type: Number,
                required: true,
            }
        },
        computed: {
            selectHeadingClass() {
                return this.el.id % 2 ? "left" : "right"
            }
        }
    }
</script>

<style scoped>
    .projectCard{
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .pojectCardInfo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right{
        text-align: right;
        align-items: flex-end;
    }
    .right .projectCardHeading{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }
    .left .projectCardHeading{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .projectCardImg{
        width: 48%;
        box-shadow: 16px 24px rgb(94, 255, 255, 0.2);
    }
    .leftImg{
        float: left;
    }
    .rightImg{
        float: right;
    }
    .yearRectangle{
        background-color: #5EFFFF;
        width: 100px;
        height: 30px;
        border-radius: 3px;
    }
    .yearRectangle p{
        color: black;
        text-align: center;
        transform: translateY(-2px);
    }
    .line{
        margin: 10px 0;
    }
    .goToSiteButton{
        display: flex;
        align-items: center;
    }
    .arrow{
        height: 15px;
    }
    .toRight{
        margin-left: 10px;
    }
    .toLeft{
        margin-right: 10px;
    }
    p{
        color: #fff;
    }


@media (max-width: 1250px) {
    .projectCard{
        display: flex;
        flex-direction: column;
        /* gap: 60px; */
    }
    .projectCardTitle, .projectCardDescription{
        transform:none;
    }
    .pojectCardInfo{
        display: flex;
        flex-direction: column;
        gap:30px;
    }
    .arrow{
        display: none;
    }
    .projectCardImg{
        width: 100%;
    }
}
@media (max-width: 700px) {
    .projectCardImg{
        margin: 0 auto;
        width: 500px;
        box-shadow: 10px 12px rgb(94, 255, 255, 0.2);
    }
    .projectCard{width: 500px; gap: 30px}
    .projectCardInfo{gap: 20px}
    .yearRectangle{
        width:70px;
        height: 20px;
    }
}
@media (max-width:550px) {
    .projectCardInfo{gap: 10px}
    .projectCardImg{
        margin: 0 auto;
        width: 350px;
        box-shadow: 10px 12px rgb(94, 255, 255, 0.2);
    }
    .projectCard{width: 350px;}
}
@media (max-width:430px) {
    .projectCardImg{
        margin: 0 auto;
        width: 300px;
        box-shadow: 10px 12px rgb(94, 255, 255, 0.2);
    }
    .projectCard{width: 300px;}
}
</style>