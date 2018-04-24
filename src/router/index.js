import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Users/Login"
import Profile from '../components/Users/Profile';
import Register from '../components/Users/Register';
import AppHome from'../components/Common/AppHome';
import Avatar from '../components/Users/Avatar';
import Wall from '../components/Users/Wall';
import Followers from '../components/Users/Profile/Followers';
import News from '../components/News/News';
import Streaming from '../components/Streaming';
import Inbox from '../components/Users/Inbox';
import HomeNews from '../components/Common/HomeNews';
import NewsDetail from '../components/Common/NewsDetail';

Vue.use(Router);

export default new Router({
  // mode: 'history',
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
      path: '/news/:slug',
      name: 'NewsDetail',
      component: NewsDetail
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
      path: '/:user_name',
      name: 'Wall',
      component: Wall
    },
    {
      path: '/:user_name/followers',
      name: 'Followers',
      component: Followers
    }
  ]
})
