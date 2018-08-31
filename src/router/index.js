import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path:'/',
			name:'index',
			component: () => import('cp/Header.vue')
		},
		{
			path:'/page1',
			name:'page1',
			component: () => import('../page/Page1.vue')
		}
	]
});

export default router;