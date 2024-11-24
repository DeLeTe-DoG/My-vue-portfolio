// import './assets/main.css'
// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './anim'

// importing AOS css style globally
import 'aos/dist/aos.css'

const app = createApp(App);

app.mount('#app')