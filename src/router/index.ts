import { createRouter, createWebHashHistory } from 'vue-router';
import { getToken } from '~/utils/authorization';

const routes: any = [
	{
		path: '/',
		name: 'Layout',
		redirect: '/workbench',
		component: () => import('~/layout/index.vue'),
		children: [
			{
				path: '/workbench',
				component: () => import('~/views/workbench/index.vue'),
			},
			{
				path: '/member/manage',
				component: () => import('~/views/memberManage/index.vue'),
			},
			{
				path: '/member/taged',
				component: () => import('~/views/memberTaged/index.vue'),
			},
			{
				path: '/order/manage',
				component: () => import('~/views/orderManage/index.vue'),
			},
		],
	},
	{
		path: '/member',
		name: 'Member',
		redirect: '/member/manage',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('~/views/login/index.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

router.beforeEach(async (to, from, next) => {
	if (to.path === '/login') {
		if (getToken()) {
			next(from.path);
			return;
		}
		next();
		return;
	}
	if (getToken() && to.path !== '/login') {
		next();
	} else {
		next('/login');
	}
});

export default router;
