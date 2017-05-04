import About from './components/About.vue';
import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';

export const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/portfolio',
		component: Portfolio
	}
];
