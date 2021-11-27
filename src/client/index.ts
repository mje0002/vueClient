import { createApp } from 'vue'
import { store } from '@/client/store/store'
import { router } from '@/client/router/router'
import App from './components/app.vue'

//import SuiVue from 'semantic-ui-vue'
//import 'semantic-ui-css/semantic.min.css'

//Vue.use(SuiVue)

const app = createApp(App);

app.use(store)
app.use(router)

app.mount("#app");
