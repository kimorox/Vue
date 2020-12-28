import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
// 1.安装插件

Vue.use(Vuex)

const state = {
    counter: 0,
    students: [
        {id: 110, name: 'one', age: 22},
        {id: 111, name: 'two', age: 18},
        {id: 112, name: 'third', age: 16},
        {id: 113, name: 'four', age: 24}
    ],
    info: {
        name: 'kimoro',
        age: 20,
        height: 1.70
    }
}

// 2.创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,

    modules: {
        a: moduleA
    }
})

// 3.导出

export default store