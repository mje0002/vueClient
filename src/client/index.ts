import Vue from 'vue'
import store from './store/index'
import App from './components/app.vue'

const v = new Vue({
	el: '#app',
	store,
	template: `<App />`,
	components: { App }
})