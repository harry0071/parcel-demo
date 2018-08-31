import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './test.js';

Vue.productionTip = false;

new Vue({
	el:'#app',
	router,
	components:{ App },
	template:'<App/>'
});