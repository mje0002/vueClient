import { createApp } from 'vue'
//import store from './store/index'
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

createApp(App)
  .mount("#app");
