import Vue from 'vue'
import store from './store/index'

const v = new Vue({
	el: '#app',
	store,
	template: `<label>{{name}}</label>`,
	data: {
		name: 'World'
	}
})