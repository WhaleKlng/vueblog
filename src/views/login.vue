<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">{{ type }}</div>
      <div class="form-wrapper">
        <label>
          <input class="input-item"
                 v-model="useranme"
                 type="text"
                 name="username"
                 placeholder="username">
        </label>
        <label>
          <input class="input-item"
                 v-model="password"
                 type="password"
                 name="password"
                 placeholder="password">
        </label>
        <div @click="onsubmit" class="btn">{{ type }}</div>
      </div>
      <div v-if="type === 'Login'" class="msg">
        Don`t have account? <a @click="toggle('Register')">Sign up</a>
      </div>
      <div v-else class="msg">
        Already have account? <a @click="toggle('Login')"> Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import axios from '../utils/axios'

export default {
  setup() {
    const verifyRef = ref(null)
    const router = useRouter()
    const state = reactive({
      username: '',
      password: '',
      username1: '',
      password1: '',
      type: 'Login',
      imgCode: '',
      verify: ''
    })

    // 切换登录和注册两种模式
    const toggle = (v) => {
      state.type = v
      state.verify = ''
    }

    // 路由跳转
    const goTo = (r, query) => {
      router.push({path: r, query: query || {}})
    }

    // 提交请求
    const onsubmit = async (val) => {
      if (state.type === 'Login') {
        console.log(val)
      }
    }


    return {
      ...toRefs(state),
      goTo,
      toggle,
      verifyRef,
      onsubmit
    }
  }
}
</script>

<style scoped lang="less">
.container {
  font-family: 'Open Sans Light';
  letter-spacing: .05em;
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);

  .login-wrapper {
    background-color: #fff;
    width: 250px;
    height: 500px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .header {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      line-height: 200px;
    }

    .form-wrapper .input-item {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      border: 0;
      padding: 10px;
      border-bottom: 1px solid rgb(128, 125, 125);
      font-size: 15px;
      outline: none;
    }

    .form-wrapper .input-item::placeholder {
      text-transform: uppercase;
    }

    .msg {
      text-align: center;
      line-height: 80px;
    }

    .msg a {
      text-decoration-line: none;
      color: #a6c1ee;
    }
  }

  .btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: #fff;
  }
}
</style>