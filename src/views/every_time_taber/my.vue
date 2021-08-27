<template>
    <div class="my">
        <div class="header">
            <div class="header_top">
                <div class="one" v-if="!this.token"  @click="$router.push('/login')">
                    <img src="../../assets/img/my2.png" alt="">
                    <a href="javascript:;">登录/注册</a>
                </div>
                <div class="two" v-else  @click="$router.push('/personal')">
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
                    <span>{{token!='' ? data.data.sex : 0}}</span>
                    <span>我的积分</span>
                </li>
            </ul>
        </div>
        <div class="conent">
            <ul v-for="(item,index) in menusList" :key="index">
              <li v-for="(ite,ind) in item" :key="ind">
                <span><van-icon :name="ite.icon" />{{ite.name}}</span>
                <van-icon name="arrow" />
               </li>
            </ul>
        </div>  
    </div>
</template>
<script>
import { userinfo } from '@/api/user.js'
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || [],
      token: JSON.parse(localStorage.getItem('token')) || ''
    }
  },
  async created() {
    if (this.token) {
      console.log(33)
      let data = await userinfo({})
      console.log(data)
    }
  },
   computed: {
    menusList() {
      return [
        [
          {
            name: "我的作业",
            icon: "description",
            url: "Homework"
          },
          {
            name: "我的社区",
            icon:"friends-o",
            url: "MyCommunity"
          }
        ],
        [
          {
            name: "课程订单",
            icon: "newspaper-o",
            url: "Order"
          },
          {
            name: "图书订单",
            icon: "idcard",
            url: "Order"
          }
        ],
        [
          {
            name: "优惠券",
            icon: "coupon-o",
            url: "Coupon"
          },
          {
            name: "学习卡",
            icon: "debit-pay",
            url: "Card"
          },
          {
            name: "分销中心",
            icon:"peer-pay",
            url: "Distribute"
          }
        ],
        [
          {
            name: "消息中心",
            icon: "comment-o",
            url: "Message"
          },
          {
            name: "地址管理",
            icon: "location-o",
            url: "Address"
          },
          {
            name: "关于我们",
            icon:"friends-o",
            url: "About"
          },
          {
            name: "意见反馈",
            icon: "records",
            url: "Feedback"
          },
          {
            name: "设置",
            icon: "setting-o",
            url: "Options"
          }
        ]
      ];
    },
   }
}
</script>
<style lang="scss" scoped>
.my {
  background: #f7f8fa;
}
.my {
  .header {
    background: white;
    background-image: url('../../assets/img/my1.png');
    height: 288px;
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
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
            height: 60px;
            width: 60px;
            border-radius: 50%;
            border: 2px solid #bdcdf1;
          }
        }
        p:nth-child(2) {
          color: white;
          font-size: 17px;
          margin-right: 80px;
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
          i {
            margin-right: 3px;
          }
        }
      }
    }
    ul {
      width: 100%;
      display: flex;
      margin-bottom: 15px;
      :nth-child(1) {
        :nth-child(1) {
          color: #5bb8f5;
        }
      }
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        :nth-child(1) {
          color: #e74d3d;
          font-size: 20px;
          font-weight: 600;
        }
        :nth-child(2) {
          color: #595959;
          margin-top: 5px;
        }
      }
    }
  }
  .conent{
    ul{
      background: white;
      margin-top: 15px;
      padding: 5px 15px;
      :last-child {
      border: none;
    }
      li{
        display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      font-size: 14px;
      border-bottom: 1px solid #f5f5f5;
      :nth-child(1){
        display: flex;
        align-items: center;
        i{
          margin-right: 5px;
          font-size: 18px;
        }
      }
      :nth-child(2){
          font-size: 21px;
          color: #b7b7b7;
      }
      }
    }
  }
}
</style>


