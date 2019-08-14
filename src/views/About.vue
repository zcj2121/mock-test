<template>
  <div class="home">
    <div>账号：<input type="text" v-model="form.username"></div>
    <br>
    <br>
    <div>密码：<input type="password" v-model="form.password"></div>
    <br>
    <br>
    <button @click="loginData">登录</button> &nbsp;&nbsp;
    <button @click="delData">退出</button>
    <br>
    <br>
    <br>
    <button @click="findData">获取用户信息</button>
    <br>
    <br>
    <br>
    <button @click="roleUserList">获取用户列表</button>
    <br>
    <br>
    <br>
    <div class="sent-data" v-for="(item, index) in newData" :key="index" style="margin-top: 15px;">
      {{item}}
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>邮箱</th>
        <th>电话</th>
        <th>地址</th>
        <th>时间</th>
        <th>图片</th>
        <th>网页</th>
      </tr>
      <tbody>
      <tr v-for="(item, index) in userList" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.address}}</td>
        <td>{{item.date}}</td>
        <td class="td-img">
          <img :src="item.image" alt="">
        </td>
        <td class="td-img">
          <a :href="item.web">{{item.web}}</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import { getUserInfo, getUserList, login, logout } from '@/api/user'

  export default {
    name: 'Home',
    data() {
      return {
        newData: [],
        fcArrData: [],
        form: {
          username: 'admin',
          password: '123123'
        },
        userList: [],
        token: ''
      }
    },
    created() {
      // this.aacute()
    },
    mounted() {
    },
    methods: {
      aacute() {
        let that = this
        if (typeof (EventSource) !== 'undefined') {
          //创建事件源
          var source = new EventSource('http://localhost:3003/user/string');
          //监听事件源发送过来的数据
          source.onmessage = function (event) {
            that.newData.push(event.data)
          }
        } else {
          that.newData = "您的浏览器不支持server sent Event";
        }
      },
      loginData() {
        login(this.form).then(res => {
          getUserInfo({
            token: res.data.token
          }).then(data => {
            if (data.data.name) {
              this.token = data.data.token
              alert('登录成功！')
            }
          })
        }).catch(error => {
          this.$message({
            message: '网络异常',
            type: 'error',
            duration: 1800
          });
        })
      },
      findData() {
        getUserInfo({
          token: this.token
        }).then(res => {
          alert('获取成功！')
        }).catch(error => {
          this.$message({
            message: '网络异常',
            type: 'error',
            duration: 1800
          });
        })
      },
      delData() {
        logout().then(res => {
          if (!res.data) {
            alert('退出成功！')
          }
        }).catch(error => {
          this.$message({
            message: '网络异常',
            type: 'error',
            duration: 1800
          });
        })
      },
      roleUserList() {
        getUserList().then(res => {
          this.userList = res.data.userList
        }).catch(error => {
          this.$message({
            message: '网络异常',
            type: 'error',
            duration: 1800
          });
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home{
    margin-top: 30px;
  }
  table, table tr th, table tr td {
    padding: 4px;
    text-align: left;
    border: 1px solid #0094ff;
  }

  table {
    min-width: 200px;
    min-height: 25px;
    margin: auto;
    line-height: 25px;
    border-collapse: collapse;
  }
  .td-img{
    width: 100px;
    height: 50px;
  }
  .td-img img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
