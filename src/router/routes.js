import Layout from '@/layout/index.vue';
const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/homepage',
		children: [
			{
				path: '/homepage',
				name: 'homepage',
				component: () => import('@/views/homepage/index.vue'),
				meta: {
					title: '首页',
					isNav: true,
				},
			},
			{
				path: '/luck-draw',
				name: 'luck-draw',
				component: () => import('@/views/luck-draw/index.vue'),
				meta: {
					title: '抽奖',
					isNav: true,
				},
			},
			{
				path: '/my-nft',
				name: 'my-nft',
				component: () => import('@/views/my-nft/index.vue'),
				meta: {
					title: '我的NFT',
					isNav: true,
				},
			},
			{
				path: '/logs',
				name: 'logs',
				redirect: '/logs/luck-draw',
				component: () => import('@/views/logs/index.vue'),
				meta: {
					title: '信息记录',
					isNav: true,
				},
				children:[
					{
						path: '/logs/luck-draw',
						name: 'logs-luck-draw',
						component: () => import('@/views/logs/luck-draw/index.vue'),
						meta: {
							title: '抽奖记录',
							isNav: true,
						},
					},
					{
						path: '/logs/exchange',
						name: 'logs-exchange',
						component: () => import('@/views/logs/exchange/index.vue'),
						meta: {
							title: '兑换记录',
							isNav: true,
						},
					},
				]
			},
			{
				path: '/team',
				name: 'team',
				component: () => import('@/views/team/index.vue'),
				meta: {
					title: '团队积累收益',
					isNav: true,
				},
			},
			{
				path: '/invitation',
				name: 'invitation',
				component: () => import('@/views/invitation/index.vue'),
				meta: {
					title: '邀请链接',
					isNav: true,
				},
			},

			{
				path: "/demo",
				name: "demo",
				component: () => import("@/views/demo/index.vue"),
				meta: {
					title: "测试",
				},
			},
		],
	},
	{
		path: '/error/404',
		name: 'error404',
		component: () => import('@/views/errorPage/404.vue'),
		meta: {
			title: '错误页面-找不到资源',
		},
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/error/404',
	},
];
export default routes;
