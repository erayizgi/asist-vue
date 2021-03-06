import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Users/Login"
import Profile from '../components/Users/Profile';
import Register from '../components/Users/Register';
import AppHome from '../components/Common/AppHome';
import Avatar from '../components/Users/Avatar';
import Wall from '../components/Users/Wall';
import Followers from '../components/Users/Profile/Followers';
import Following from '../components/Users/Profile/Following';
import News from '../components/News/News';
import Streaming from '../components/Streaming';
import Inbox from '../components/Users/Inbox';
import Outbox from '../components/Users/Outbox';
import Reset from '../components/Users/Reset';
import Conversation from '../components/Users/Conversation';
import HomeNews from '../components/Common/HomeNews';
import NewsDetail from '../components/Common/NewsDetail';
import Coupon from '../components/Common/Coupon';
import Forecast from '../components/Common/Forecast';
import ForecastDetail from '../components/Common/ForecastDetail';
import Pages from '../components/Common/Pages';
import NotificationsHome from '../components/Common/NotificationsHome';
import AllTippers from '../components/Common/AllTippers';
import Duties from '../components/Common/Duties';
import SingleDuty from '../components/Common/SingleDuty';
import Search from '../components/Users/Search';
import NotFoundComponent from '../components/Common/NotFoundComponent';


Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: AppHome
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/news',
			name: 'News',
			component: HomeNews
		},
		{
			path: '/user/reset-password',
			name: 'Reset',
			component: Reset
		},
		{
			path: '/duties',
			name: 'Duties',
			component: Duties
		},
		{
			path: '/duties/:duty_id',
			name: 'SingleDuty',
			component: SingleDuty
		},
		{
			path: '/news/:slug',
			name: 'NewsDetail',
			component: NewsDetail
		},
		{
			path: '/tippers',
			name: 'Tippers',
			component: AllTippers,
		},
		{
			path: '/forecast',
			name: 'Forecast',
			component: Forecast
		},
		{
			path: '/forecast/:slug',
			name: 'ForecastDetail',
			component: ForecastDetail
		},
		{
			path: '/pages/:slug',
			name: 'Pages',
			component: Pages
		},
		{
			path: '/streaming',
			name: 'Streaming',
			component: Streaming
		},
		{
			path: '/user/profile',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/user/profile/avatar',
			name: 'Avatar',
			component: Avatar
		},
		{
			path: '/message/inbox',
			name: 'Inbox',
			component: Inbox
		},
		{
			path: '/message/sent',
			name: 'Outbox',
			component: Outbox
		},
		{
			path: '/message/inbox/:conversation_id',
			name: 'Conversation',
			component: Conversation
		},
		{
			path: '/notifications',
			name: 'NotificationsHome',
			component: NotificationsHome
		},
		{
			path: '/coupon',
			name: 'Coupon',
			component: Coupon
		},
		{
			path: '/search/:username',
			name: 'Search',
			component: Search
		},
		{
			path: '/:user_name',
			name: 'Wall',
			component: Wall
		},
		{
			path: '/:user_name/posts/:id',
			name: 'Wall',
			component: Wall
		},
		{
			path: '/:user_name/followers',
			name: 'Followers',
			component: Followers
		},
		{
			path: '/:user_name/following',
			name: 'Following',
			component: Following
		},
		{path: '*', component: Wall}

	],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
