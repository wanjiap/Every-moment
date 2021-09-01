<template>
    <div id="sig">
        <gos></gos>
        <div class="header">
            <div class="header_1">
                <img src="../../assets/img/blue.jpg" alt="">
               <div class="nam">
                    <p>{{userinf.nickname}}</p>
                    <p>积分：{{signinfo.total_integral}}</p>
               </div>
                <p class="qian" @click.stop="qian">签到规则</p>
            </div>
            <div class="ri">
               <!--  <van-calendar
                    title="日历"
                    :show-title="false"
                    :show-confirm="false"
                    :poppable="false"
                    :style="{ height: '400px' }"
                    :show-mark="false"
                    color="none"
                /> -->
                <Calender
                :sign-dates="signedDates"
                >
                </Calender>
            </div>
            <van-dialog v-model="qianshow" title="签到规则" :showConfirmButton="false">
                   <div >
                       <p><span style="font-size: 14px;">1.每日签到可获得日签奖励，在单个周期内连续签到可获得连签奖励，同1个周期内最多可领取一次；</span></p>
                       <p><span style="font-size: 14px;">2.每日最多可签到1次，断签则会重新计算连签天数；</span></p>
                       <p><span style="font-size: 14px;">3.活动以及奖励最终解释归机构所有；</span></p>
                       <button @click="qianshow=false">我知道了</button>
                       </div>
            </van-dialog>
        </div>
           <div class="bodys">
                <ul v-if="haolists">
                <p class="ul_son"><span>好课推荐</span><span>更多<van-icon name="arrow" /></span></p>
                <li v-for="(item,index) in haolists" :key="index" >
                    <img :src="item.cover_img" alt="">
                    <p>
                        <span>{{item.course_name}}</span>
                        <span class="bb">{{item.exchange_price}}积分</span>
                    </p>
                    <p>去兑换</p>
                </li>
            </ul>
            <ul v-if="booklist">
                <p class="ul_son"><span>热门图书</span><span>更多<van-icon name="arrow" /></span></p>
                <li v-for="(item,index) in booklist" :key="index">
                    <img :src="item.cover_img" alt="">
                    <p>
                        <span>{{item.book_name}}</span>
                        <span>{{item.author}}</span>
                        <span class="bb">{{item.exchange_price}}积分</span>
                    </p>
                    <p>去兑换</p>
                </li>
            </ul>
           </div>
    </div>
</template>
<script>
import Calender from '@/components/Calender'
import gos from '@/components/go'
import { hao, wei, userinfo, sig ,ri} from '@/api/user.js'
export default {
  components: { gos, Calender },
  data() {
    return {
      show: true,
      qianshow: false,
      signinfo: [],
      userinf: [],
      booklist: [],
      haolists: [],
      signedDates:[]
    }
  },
  methods: {
    qian() {
      this.qianshow = true
    },
    async ondate(){
      let {data:data}=await ri()
      this.signedDates=data.data
      console.log( this.signedDates,'ri');
    },
    async haolist() {
      let data = await hao({ type: 1 })
      let res = await hao({ type: 2 })
      this.haolists=data.data.data.list
      this.booklist=res.data.data.list
     /*  console.log(data.data.data.list[0])
      console.log(res.data.data.list[0]) */
    },
    async weiz() {
      let { data: data } = await wei()
      console.log(data.data, 'wei')
      this.signinfo = data.data
      document.title = data.data.sign_rules.page_title
      if (data.data.is_sign == 2) {
        let { data: data } = await sig({data:2021-9-1})
        console.log(data, 'sig')
      }
    },
    async usrin() {
      let { data: data } = await userinfo()
      console.log(data, 'user')
      this.userinf = data.data
    }
  },
  created() {
    this.weiz()
    this.haolist()
    this.usrin()
    this.ondate()
  }
}
</script>
<style lang="scss" scoped>
#sig {
  background: white;
}
.header {
  background-image: url('../../assets/img/lgin.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 100%;
  position: relative;
  margin-bottom: 140px;
  .header_1 {
    display: flex;
    align-items: center;
    margin: 0 20px;
    padding: 25px 0;
    justify-content: space-between;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .nam {
      flex: 1;
      margin-left: 15px;
      p {
        font-size: 18px;
        color: white;
      }
      :nth-child(2) {
        font-size: 14px;
      }
    }
    .qian {
      padding: 2px 10px;
      color: white;
      border: 1px solid white;
      border-radius: 25px;
      font-size: 14px;
    }
  }
  .ri {
    width: 100%;
    height: 320px;
    position: absolute;
    top: 100px;
    left: 0;
    padding: 0 20px;
    box-sizing: border-box;
    /* .van-calendar {
      border-radius: 15px;
      box-shadow: 0px 1px 10px 0px #ccc;
      /deep/.van-calendar__day,
      .van-calendar__day--disabled {
        color: #595959;
      }
    } */
  }
}
.van-dialog {
  width: 280px;
  height: 250px;
  border-radius: 10px;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  p {
    color: #8c8c8c;
  }
  button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
    border-top: 1px solid #eaeaea;
    background: white;
    height: 50px;
  }
}
.bodys{
    padding-bottom: 30px;
    ul{
        padding: 0 15px;
        width: 100%;
        box-sizing: border-box;
        
        .ul_son{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-left: 2px solid #e60012;
            padding-left: 10px;
            margin: 10px 0;
            span:nth-child(1){
                font-size: 16px;
                color: #595959;
            }
             span:nth-child(2){
                font-size: 14px;
                color: #b7b7b7;
                display: flex;
                align-items: center;
                i{
                    margin: 0 2px;
                }
            }
        }
        li{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
              box-shadow: 0px 1px 10px 0px #ccc;
            border-radius: 15px;
            padding: 15px;
            img{
                width: 110px;
                height: 75px;
            }
            p:nth-child(2){
                display: flex;
                flex: 1;
                height: 65px;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 8px;
                :nth-child(1){
                    font-size: 14px;
                }
                :nth-child(2){
                    color: #8c8c8c;
                }
                .bb{
                    font-size: 14px;
                    color: #ee1f1f;
                }
            }
             p:nth-child(3){
                 border: 1px solid #b7b7b7;
                 padding: 2px 10px;
                 border-radius: 25px;
                 color: #595959;
             }
        }
    }
}
</style>


