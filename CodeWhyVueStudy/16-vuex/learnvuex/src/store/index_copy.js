import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('updateName', 'kakaka')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}


// 2.创建对象
const store = new Vuex.Store({
    state: {
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
    },
    mutations: {// 不要使用异步操作(在actions里使用)
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, payload) {
            state.counter += payload.count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            // 该方式做不到响应式
            // state.info['address'] = 'China'
            // 响应式方法
            // Vue.set(state.info, 'address', 'China')
            // 该方式做不到响应式
            // delete state.info.age
            // 响应式方法
            // Vue.delete(state.info, 'age')
            state.info.name = 'hello'
        }
    },
    actions: {
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         console.log(payload.message);
        //         payload.success()
        //     }, 1000)
        // }
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(payload);
                    resolve('hello world')
                }, 1000)
            })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            return function (age) {
                return state.students.filter(s => s.age > age)
            }
        }
    },

    modules: {
        a: moduleA
    }
})

// 3.导出

export default store