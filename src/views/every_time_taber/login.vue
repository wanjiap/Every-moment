<template>
    <div class="login">
        <div class="header">
            <h1>这里是我黑虎阿福的专场</h1>
            <h1>成龙莫如</h1>
        </div>
        <div class="enroll">
            <div>
                <input type="text" name="" id="" placeholder="请输入手机号" v-model="mobile">
                <span v-show="time_flag"><a href="javascript:;" v-show="flag" @click="phone">获取验证码</a></span>
                <a class="yes" href="javascript:;" v-show="!time_flag" @click="phone">获取验证码{{time}}</a>
            </div>
            <div>
                <input v-show="flag" type="text" name="" id="" placeholder="请输入短信验证码" v-model="sms_code">
                <input v-show="!flag" type="text" name="" id="" placeholder="请输入密码">
            </div>
            <div v-show="flag">
                <span>*未注册的手机号将自动注册</span>
                <a href="javascript:;" @click="flag=!flag,type=1">使用密码登录</a>
            </div>
            <div v-show="!flag">
                <span>找回密码</span>
                <a href="javascript:;" @click="flag=!flag,type=2">注册/验证码登录</a>
            </div>
            <div>
                <button @click="login">登录</button>
            </div>
            <p><van-checkbox @change="edit" icon-size="16px" v-model="checked" checked-color="#ee0a24"></van-checkbox>我同意<span>用户注册协议</span>和<span>隐私保护协议</span></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      checked: true,
      time: 5,
      time_flag: true,
      mobile: '',
      sms_code: '',
      type: 2
    }
  },
  methods: {
    edit() {
      console.log(this.checked)
    },
    async login() {
      if (this.checked) {
        let reg = /^[1][3-8]\d{9}$/
        if (reg.test(this.mobile)) {
          if (this.type == 1) {
            this.$toast('这是密码登录还没写')
          } else {
            if (this.sms_code != '') {
              let { data: data } = await this.$http.post('http://120.53.31.103:84/api/app/login', {
                mobile: this.mobile,
                sms_code: this.sms_code,
                type: this.type,
                client: '1'
              })
              console.log(data)
              if (data.code != 200) {
                this.$toast(data.msg)
              } else {
                let token = data.data.remember_token
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('data', JSON.stringify(data))
                this.$router.push('/my')
              }
            } else {
              this.$toast('验证码错误')
            }
          }
        } else {
          this.$toast('手机号码格式不正确')
        }
      } else {
        this.$toast('请勾选协议')
      }
    },
    async phone() {
      let reg = /^[1][3-8]\d{9}$/
      if (reg.test(this.mobile)) {
        this.time_flag = false
        this.item = setInterval(() => {
          this.time -= 1
          if (this.time <= 0) {
            clearInterval(this.item)
            this.time = 30
            this.time_flag = true
          }
        }, 1000)
        let { data: data } = await this.$http.post('http://120.53.31.103:84/api/app/smsCode', {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: white;
  width: 100%;
  height: 375px;
  background-image: url(../../assets/img/a.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  border-bottom: 15px solid #eaeaea;
  box-sizing: border-box;
  :nth-child(1) {
    margin-top: 290px;
  }
  h1 {
    text-align: center;
  }
}
.enroll {
  background: white;
  padding-top: 70px;
  padding-left: 45px;
  padding-right: 45px;
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
  div:nth-child(2) {
    border-bottom: 1px solid #f1f1f1;
    input {
      font-size: 16px;
      padding: 14px 0;
    }
    input::-webkit-input-placeholder {
      color: #cccccc;
    }
  }
  div:nth-child(3) {
    margin: 17px 0;
    span {
      color: #cccccc;
    }
    a {
      color: #999;
    }
  }
  div:nth-child(4) {
    margin: 17px 0;
    span {
      color: #cccccc;
    }
    a {
      color: #999;
    }
  }
  div:nth-child(5) {
    width: 100%;
    height: 50px;
    box-shadow: 2px 2px 30px 0px rgb(242, 82, 82);
    background: linear-gradient(to left, red, red, pink);
    border-radius: 5px;
    margin-top: 45px;
    button {
      height: 100%;
      width: 100%;
      border: none;
      margin: 0 auto;
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
  p {
    display: flex;
    padding: 30px 0;
    font-size: 13px;
    .van-checkbox {
      margin-right: 5px;
    }
    span {
      color: red;
    }
  }
}
</style>


