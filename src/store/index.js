import Vue from 'vue'   // 引入vue
import Vuex from 'vuex' // 引入vuex
// 使用vuex
Vue.use(Vuex);
// 创建vuex实例
var a
if(window.localStorage.getItem('username')){
	a=window.localStorage.getItem('username')
}else{a="未登录"}
let store = new Vuex.Store({
    // 定义数据
    state: {
        account: a
    },
    // 当state发生改变时getters才会触发
    // getters: {
    //     getSaledPrice: (state) => {
    //         return {
    //             un: state.count +3
    //         }
    //     }
    // },
    // 必须通过mutations才能修改state的数据
    mutations: {
        change(state,name) {    // 这里的state就上面定义的state实例，这里可以传入两个参数第二个是接收传过来的数据
            // 对state实例进行操作
            state.account = name;
		
        }
       
    }
})
// 导出实例
export default store
