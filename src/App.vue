<template>
  
  <!-- <ModalWindow :closeModal="closeModal" /> -->
<div className="container">
  <header>
    <HeaderSection />
  </header>
  <section><AboutMeSection :urlsData="urlsData" /></section>
  <section><AboutWorkCards /></section>
  <section><MyProjects /></section>
  <footer><FooterSection /></footer>
</div>
</template>

<script>
import AboutMeSection from './components/AboutMeSection/AboutMeBlock.vue'
import HeaderSection from './components/Header/HeaderSection.vue';
import AboutWorkCards from './components/AboutMyWorkSection/AboutWorkCards.vue';
import MyProjects from './components/MyProjectsSection/MyProjects.vue';
import FooterSection from './components/Footer/FooterSection.vue';
// import ModalWindow from './components/Modal/ModalWindow.vue';

const animItems = document.querySelectorAll(".anim-item");

// if(animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for(let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if((pageYOffset > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add("_active");
//             }
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//             scrollTop = window.scrollY || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     animOnScroll();
// }


export default {
  components: {  AboutMeSection, HeaderSection, AboutWorkCards, MyProjects, FooterSection },

  methods: {
    closeModal() {
      document.querySelector('body').classList.remove('stoppedBody')
      document.querySelector('.modal').classList.add('hiddenModal')
    }
  }
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    scroll-behavior: smooth;
  }
  section{
    padding-bottom: 100px;
  }
  body{
      font-family: "Anonymous Pro";
      background-color: #03356B;

  }
  .stoppedBody{
      overflow: hidden;
      height: 100%;
  }
  .container{
    width: 80%;
    margin: 0 auto;
  }
  header{
    height: max-content;
  }
  footer{
    margin-top: 150px;
    margin-bottom: 20px;
  }
  h1{
        padding-top: 30px;
        margin: 0;
        font-size: 80px;
        letter-spacing: 0.02em;
        color: rgba(154, 148, 148, 0.4);
        font-weight: 100;
    }
  p, h4, label{
  font-size: 24px;
  letter-spacing: 4%;
  line-height: 140%;
  color: #5EFFFF;
  font-weight: 100;
  letter-spacing: 0.01em;
}
h3{
  font-size: 32px;
  color: #5EFFFF;
  letter-spacing: 0.1em;
  font-weight: 100;
  line-height: 140%;
}
span{
  color: #fff;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.noticement{
  font-size: 15px;
  color: #000;
  text-align: center;
}
</style>
