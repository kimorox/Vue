<template>
  <div id="app">
    <h2>----------modules内容----------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="changeName">换名</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>----------info内容是否响应式----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="change">改变</button>
    <h2>----------分割线----------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addition">+</button>
    <button @click="sub">-</button>
    <button @click="addStudent">添加学生</button>
    <h2>----------getter演示-----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <HelloVuex></HelloVuex>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>----------getter演示-----------</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(10) }}</h2>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: 'App',
  data() {
    return {
      message: 'hello',
    }
  },
  computed: {
    // more20stu() {
    //   return this.$store.state.students.filter(s => s.age > 20)
    // }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    // payload
    addCount(count) {
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)
      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'five', age: 26}
      this.$store.commit('addStudent', stu)
    },
    change() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '携带的信息',
      //   success: () => {
      //     console.log('已经完成了')
      //   }
      // })
      this.$store.dispatch('aUpdateInfo', '携带的信息')
          .then(res => {
            console.log('success');
            console.log(res);
          })
    },
    changeName() {
      this.$store.commit('updateName', 'kksk')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
