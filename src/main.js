import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post} from "@/utils/network";

Vue.prototype.$post = post;
createApp(App).use(store).use(router).mount('#app')
