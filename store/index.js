import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		account: '',
		phone: '',
		uid: '',
		token: '',
		isLog: '',
		navHeight: '',
		
	},
	mutations: {
		loginStore(state, provider) {
			state.account = provider.account;
			state.phone = provider.phone;
			state.uid = provider.uid;
			state.token = provider.token;
			state.isLog = true;
		},
		logoutStore(state) {
			state.token = '';
			state.isLog = false;
		},
		setNavHeight(state, provider){
			state.navHeight = provider.navHeight
		}
	}
})

export default store
