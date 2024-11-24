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
</style>