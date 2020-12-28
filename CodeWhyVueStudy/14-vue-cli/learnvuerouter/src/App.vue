<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace >关于</router-link>-->
    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--    <router-link :to="'/user/'+user_id">我的</router-link>-->
    <!--    <router-link :to="{path:'/profile',query:{name:'kimoro',age:20,height:1.70}}">档案</router-link>-->
    <button @click="userClick">我的</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user_id: 'kimoro'
    }
  },
  // methods: {
  //   homeClick() {
  //     // 通过代码的方式修改路由 vue-router
  //     // this.$router.push('/home')
  //     this.$router.replace('./home')
  //   },
  //   aboutClick() {
  //     // this.$router.push('/about')
  //     this.$router.replace('./about')
  //   }
  // }
  methods: {
    userClick() {
      this.$router.push('/user/' + this.user_id)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kimoro',
          age: 20,
          height: 1.70
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>
