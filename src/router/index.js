import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/MyMessage',
    name: 'MyMessage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyMessage.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
   component: () => import(/* webpackChunkName: "about" */ '../views/Setting.vue')
  },
  {
    path: '/DigitalAssets',
    name: 'DigitalAssets',
   component: () => import(/* webpackChunkName: "about" */ '../views/DigitalAssets.vue')
  },
  
  {
    path: '/Login',
    name: 'Login',
   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '*',
    name: '404',
   component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem('token');
	 let cookiename = window.localStorage.getItem('username');
	var arr=[
		"/DigitalAssets",
		"/MyMessage",
		"/Setting",
		
		]
	if(arr.indexOf(to.path) !=-1){
		if(!token || !cookiename){
			var isdl=window.confirm("您尚未登录,立即去登陆?")
			if(isdl){
				next("/Login")
			}
		}else{
		next()
	}
		
	}else{
		next()
	}
})
export default router
