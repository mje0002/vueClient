import { createApp } from 'vue'
import { store } from '@/client/store/store'
import App from './components/app.vue'
//import router from './router'

//import SuiVue from 'semantic-ui-vue'
//import 'semantic-ui-css/semantic.min.css'

//Vue.use(SuiVue)

// const v = new Vue({
// 	el: '#app',
// 	store,
// 	router,
// 	template: `<App />`,
// 	components: { App }
// })

const app = createApp(App);
app.use(store)

app.mount("#app");
