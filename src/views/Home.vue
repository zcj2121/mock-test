<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "home",
  components: {},
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      //get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
      axios.get('/api/list').then(res => {
        this.data = res.data.data;
        console.log(res.data);//在console中看到数据
      }).catch(res => {
        alert('wrong');
      })
    }
  }
};
</script>
