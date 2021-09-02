<template>
  <div class="pas">
    <gos></gos>
    <div class="enroll">
      <div>
        <input type="text" name="" id="" placeholder="请输入手机号" v-model="mobile">
        <span><a href="javascript:;" v-show="time_flag" @click="passer">获取验证码</a></span>
        <a class="yes" href="javascript:;" v-show="!time_flag">获取验证码{{time}}</a>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="请输入验证码" v-model="sms_code">
      </div>
      <div>
        <input type="text" name="" id="" placeholder="请输入密码" v-model="password">
      </div>
      <div class="btn">
        <button @click="login">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import gos from '@/components/go'
import { passwor, phone } from '@/api/user.js'
export default {
  components: { gos },
  data() {
    return {
      flag: true,
      checked: true,
      time: 60,
      time_flag: true,
      mobile: '',
      sms_code: '',
      type: 2,
      password: ''
    }
  },
  methods: {
    async passer() {
      let reg = /^[1][3-8]\d{9}$/
      if (reg.test(this.mobile)) {
        this.time_flag = false
        this.item = setInterval(() => {
          this.time -= 1
          if (this.time <= 0) {
            clearInterval(this.item)
            this.time = 60
            this.time_flag = true
          }
        }, 1000)
        let { data: data } = await phone({
          mobile: this.mobile,
          sms_type: 'login'
        })
        console.log(data)
        if (data.code != 200) {
          this.$toast(data.msg)
        }
      } else {
        this.$toast('手机号码格式不正确')
      }
    },
    async login() {
      if (this.sms_code != '') {
        let { data: data } = await passwor({
          mobile: this.mobile,
          sms_code: this.sms_code,
          password: this.password
        })
        console.log(data)
        if (data.code != 200) {
          this.$toast(data.msg)
        } else {
          this.$toast('设置成功')
          this.$router.go(-1)
        }
      } else {
        this.$toast('验证码错误')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pas {
  background: white;
  height: 100%;
}
.enroll {
  padding: 0 15px;
  div:nth-child(1) {
    border-bottom: 1px solid #f1f1f1;
    input {
      font-size: 16px;
      padding: 14px 0;
    }
    a {
      color: red;
      font-size: 13px;
    }
    .yes {
      color: #eaeaea;
    }
    input::-webkit-input-placeholder {
      color: #cccccc;
    }
  }
  div {
    border-bottom: 1px solid #f1f1f1;
    input {
      font-size: 16px;
      padding: 14px 0;
    }
    input::-webkit-input-placeholder {
      color: #cccccc;
    }
  }
  .btn {
    width: 85%;
    height: 50px;
    margin: 40px auto;
    box-shadow: 2px 2px 40px 0px rgb(242, 82, 82);
    border-radius: 5px;
    button {
      height: 110%;
      width: 100%;
      border: none;
      border-radius: 5px;
      background: linear-gradient(to left, rgb(226, 25, 25), rgb(232, 89, 112));
      font-size: 14px;
      color: white;
      letter-spacing: 3px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    border: none;
  }
}
</style>


