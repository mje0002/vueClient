import { RouteRecordRaw } from 'vue-router'
import Example from '@/client/views/example.vue'

const exampleRoute: RouteRecordRaw = {
	path: '/example/:who',
	component: Example,
	props: true
}

export const exampleRoutes: RouteRecordRaw[] = [
	exampleRoute
]