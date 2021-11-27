import { RouteRecordRaw } from 'vue-router'
import Home from '@/client/views/home.vue'

const homeRoute: RouteRecordRaw = {
	path: '/home',
	component: Home
}

const baseRoute: RouteRecordRaw = {
	path: '/', redirect: '/home'
}

export const homeRoutes: RouteRecordRaw[] = [
	homeRoute,
	baseRoute
]