<template>
    <div class="opt">
        <go></go>
         <ul>
            <li @click="$router.push('/passerword')">
                <span>设置密码</span>
                <span><van-icon name="arrow" /></span>
            </li>
            <li>
                <span>注销账号</span>
                <span><van-icon name="arrow" /></span>
            </li>
        </ul>
        <div class="btn">
            <button @click="quit">退出登录</button>
        </div>
    </div>
</template>
<script>
import go from '@/components/go'
export default {
  components: { go },
  data() {
    return {
      token: JSON.parse(localStorage.getItem('token')),
      data: JSON.parse(localStorage.getItem('data'))
    }
  },
  methods: {
    quit() {
      this.token = ''
      this.data = []
      localStorage.setItem('data', JSON.stringify(this.data))
      localStorage.setItem('token', JSON.stringify(this.token))
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.opt {
  background: white;
}
ul {
  padding: 5px 15px;
  :last-child {
    border: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    :nth-child(2) {
      color: #8c8c8c;
      display: flex;
      align-items: center;
      margin-right: 15px;
      position: relative;
      i {
        position: absolute;
        right: -20px;
        font-size: 20px;
        color: #b7b7b7;
      }
    }
  }
}
.btn {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    color: white;
    background: #e60012;
    border: none;
    width: 90%;
    height: 45px;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 5px;
  }
}
</style>


