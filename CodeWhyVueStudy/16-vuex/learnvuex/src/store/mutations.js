export default {
// 不要使用异步操作(在actions里使用)
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
}