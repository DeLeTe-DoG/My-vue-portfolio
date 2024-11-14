<template>
    <div id="aboutMe" className="aboutMeSection">
        <div className="aboutMeInfo">
            <h3>УЗНАЙТЕ НЕМНОГО ОБО МНЕ!</h3>
            <p>Привет, меня зовут Аяз!<span> Я занимаюсь web-разработкой с 2020 года.</span></p>
            <p><span>За годы обучения имею большой багаж знаний в своей сфере и создаю оригинальные</span> сайты с привлекающим дизайном</p>
            <ContactsBlock />
        </div>
        <img className="myPhoto" src="../../images/FotoOfMe-BnW.png">
    </div>
</template>

<script>
import ContactsBlock from '../ContactsBlock.vue';

export default {
    components: { ContactsBlock },

}
</script>

<style scoped>
.aboutMeSection{
  height: max-content;
  width: 84%;
  display: flex;
  gap: 100px;
  margin: 0 auto;
  margin-bottom: 220px;
}
.aboutMeInfo{
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.myPhoto{
  width: 380px;
}
</style>