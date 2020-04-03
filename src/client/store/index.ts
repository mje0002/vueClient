import Vue from 'vue'
import vuex, { StoreOptions } from 'vuex'
import { IRootState } from './types'

Vue.use(vuex)

const store: StoreOptions<IRootState> = {
	state: {
		version: '1.0.0' // a simple property
	},
	modules: {}
}

export default new vuex.Store<IRootState>(store)
