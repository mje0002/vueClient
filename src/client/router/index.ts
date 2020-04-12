import Vue from 'vue'
import Router from 'vue-router'
import ReadMe from '../components/readme.vue'
import Intro from '../components/intro.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Intro',
			component: Intro
		},
		{
			path: '/ReadMe',
			name: 'ReadMe',
			component: ReadMe
		}
	],
	linkExactActiveClass: 'active'
})
