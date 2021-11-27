import Vue from 'vue'
import Vuex from 'vuex'
import productsModul from '@/store/productsModul.js'
import modalModul from '@/store/modalModul.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	productsModul,
	modalModul,
	}
})
