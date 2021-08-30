<template>
    <div id="cour">
         <gos></gos>
        <div class="header" v-if="status">
            <img  :src="coudata.info.cover_img" alt="">
            <div class="header_son">
                <p>{{coudata.info.title}}</p>
                <p >共{{coudata.info.total_periods}}课时 | {{coudata.info.sales_num}}人已报名</p>
                <p>开课时间：{{coudata.info.start_play_date | formatTimer}} - {{coudata.info.end_play_date | formatTimer}}</p>
                <div>
                        <span  v-if="coudata.info.underlined_price==coudata.info.price">免费</span>
                        <p v-else>
                            <span v-show="coudata.info.underlined_price!=0">{{coudata.info.underlined_price/100+'.00'}}</span>
                            <span >{{coudata.info.price/100+'.00'}}</span>
                        </p>
                    </div>
            </div>
        </div>
        <div class="you" v-if="status">
                <p v-if="coudata.couponList.length"><span>优惠：</span><span>领取优惠券最多可减<i>{{mex/100}}</i></span><span>领取<van-icon name="arrow" /></span></p>
                <p><span>服务：</span><span>{{coudata.info.service[0].name}}</span><span>详情<van-icon name="arrow" /></span></p>
            </div>
            <div class="jiaoxue">
                <p>教学团队</p>
                <ul>
                    <li  @click="teacher(item)" v-for="(item,index) in coudata.teachers" :key="index"><a href="javascript:;">
                        <img :src="item.avatar" alt="">
                        <span>{{item.teacher_name}}</span>
                        </a></li>
                </ul>
            </div>
            <div class="nav" v-if="status">
                <ul v-if="coudata.info.course_type!=9">
                    <li>课程介绍</li>
                    <li>课程大纲</li>
                    <li>课程评价</li>
                </ul>
                <ul v-else>
                    <li>包含内容</li>
                    <li>课程介绍</li>
                </ul>
            </div>
            <div class="but">
                <button>立即报名</button>
            </div>
    </div>
</template>
<script>
import { basis } from '@/api/user.js'
import gos from '@/components/go'
export default {
  components: { gos },
  data() {
    return {
      id: this.$route.query.id,
      coudata: [],
      status: false,
      mex: 0
    }
  },
  methods: {
    async detil() {
      let { data: data } = await basis(this.id)
      console.log(data.data)
      this.coudata = data.data
      this.status = true
      if (data.data.couponList.length) {
        let max_price = 0
        console.log(data.data)
        data.data.couponList.forEach(item => {
          if (max_price < item.discounted_price) {
            max_price = item.discounted_price
          }
        })
        console.log(max_price)
        this.mex = max_price
      }
    },
    async teacher(item){
      this.$router.push("/tea_deatile?id="+item.teacher_id)
    }
  },
  created() {
    this.detil()
  },
  filters: {
    formatTimer: function(value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '/' + MM + '/' + d + ' ' + h + ':' + m
    }
  }
}
</script>
<style lang="scss" scoped>
#cour {
  background: #f0f2f5;
  padding-bottom: 50px;
  .header {
    img {
      height: 220px;
      width: 220px;
    }
    .header_son {
      background: white;
      padding: 15px;
      p:nth-child(1) {
        font-size: 16px;
      }
      p:nth-child(2) {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        margin: 10px 0;
      }
      p:nth-child(3) {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        margin: 10px 0;
      }
      div {
        span {
          color: #e60012;
          font-size: 15px;
        }
        p {
          :nth-child(1) {
            color: #999;
            text-decoration: line-through;
            font-size: 12px;
          }
          :nth-child(2) {
            color: #ee1f1f;
            font-size: 18px;
          }
        }
      }
    }
  }
  .you {
    background: white;
    margin: 15px 0;
    padding: 10px 15px;
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      span:nth-child(2) {
          color: #595959;
        flex: 1;
        font-size: 12px;
        i {
          color: #ea7a2f;
          font-style: normal;
        }
      }
      span:nth-child(1) {
        color: #8c8c8c;
        font-size: 12px;
      }
      span:nth-child(3) {
        color: #8c8c8c;
        font-size: 12px;
        display: flex;
        align-items: center;
        i {
          font-size: 14px;
        }
      }
    }
  }
  .jiaoxue {
    padding: 15px;
    background: white;
    p {
      font-size: 15px;
    }
    ul {
      display: flex;
      padding-left: 15px;
      margin-top: 10px;
      flex-wrap: wrap;
      li {
         margin-right: 25px;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
          span{
              margin-top: 10px;
              font-size: 14px;
          }
        }
      }
    }
  }
  .but{
      position: fixed;
      bottom: 0;left: 0;
      width: 100%;
      height: 50px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
          background: #e60012;
          border: none;
          width: 90%;
          height: 35px;
          border-radius: 25px;
          color: white;
          font-size: 14px;
      }
  }
}
</style>


