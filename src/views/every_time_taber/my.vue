<template>
    <div class="my">
        <div class="header">
            <div class="header_top">
                <div class="one" v-if="!this.token"  @click="$router.push('/login')">
                    <img src="../../assets/img/my2.png" alt="">
                    <a href="javascript:;">登录/注册</a>
                </div>
                <div class="two" v-else>
                        <div class="two_1">
                            <img src="../../assets/img/blue.jpg" alt="">
                        </div>
                        <p>{{data.data.nickname}}</p>
                        <p><van-icon name="calendar-o" />签到</p>
                </div>
            </div>
            <ul>
                <li>
                    <span>0</span>
                    <span>我的学习</span>
                </li>
                 <li>
                    <span>0</span>
                    <span>本周课时</span>
                </li>
                 <li>
                    <span>0</span>
                    <span>我的积分</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || [],
      token: JSON.parse(localStorage.getItem('token')) || ''
    }
  },
  created() {
    console.log(this.data)
  }
}
</script>
<style lang="scss" scoped>
.my{
    background: white;
}
.my {
  .header {
    background-image: url('../../assets/img/my1.png');
    height: 288px;
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header_top {

      .one {
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 60px;
          width: 60px;
          border: 2px solid #bdcdf1;
          border-radius: 50%;
        }
        a {
          margin-top: 15px;
          color: white;
          font-size: 18px;
        }
      }
      .two {
        display: flex;
        width: 100%;
        margin-top: 50px;
        justify-content: space-between;
        .two_1 {
          margin-left: 22px;
          img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
          }
        }
        p:nth-child(2) {
          color: white;
          font-size: 17px;
          margin-right: 100px;
          margin-top: 10px;
        }
        p:nth-child(3) {
          background: linear-gradient(270deg, #6dbcff, #4e7de3);
          width: 72px;
          height: 25px;
         display: flex;
         align-items: center;
         justify-content: center;
          border-radius: 30px 0 0 30px;
          transform: translateY(-50%);
          margin-top: 20px;
          color: white;
          font-size: 13px;
          i{
              margin-right: 3px;
          }
        }
      }
    }
    ul{
        width: 100%;
        display: flex;
        margin-bottom: 15px;
        li{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
  }
}
</style>


