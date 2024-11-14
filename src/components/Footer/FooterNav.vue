<template>
    <div className="footerNav">
        <ul>
            <li><a href="#aboutMe"><p>Обо мне</p></a></li>
            <li><a href="#aboutMyWork"><p>Работа</p></a></li>
            <li><a href="#myProjects"><p>Портфолио</p></a></li>
        </ul>
    </div>
</template>

<script>


    export default {

    }
</script>

<style scoped>
    .footerNav{
        width: max-content;
        margin: 0 auto;
    }
    ul{
        display: flex;
        flex-direction: row;
        gap: 30px;
        list-style-image: url('../../images/liMarker.png');
    }
    li{
        padding-left: 10px;
    }
    li:first-child{
        list-style: none;
        
    }
</style>