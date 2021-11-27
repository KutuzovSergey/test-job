
export default {
	state: {
		modal_window: true,
	},
	mutations: {
		MODAL_WINDOW: (state, value) =>{
			state.modal_window = value;
		},
	},
	getters:{
		GET_MODAL_WINDOW: (state) =>{
			return state.modal_window
		},
	},
	actions: {
		SET_MODAL_WINDOW: ({ commit }, value) =>{
			commit('MODAL_WINDOW', value)
		},
	},
	modules: {
	}
}
