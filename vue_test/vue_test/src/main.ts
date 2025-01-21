import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import eventBus from 'vue3-eventbus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import liff from '@line/liff'

import 'swiper/scss';

// createApp(App).use(router).mount('#app')
// await liff.init({liffId: '1551453274-ANYeG98Q'}).then(() => {
//     if(!liff.isLoggedIn) {
//         liff.login({redirectUri:window.location.href})
//     }
// })
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(eventBus);
app.use(VueAwesomeSwiper);
app.mount('#app');