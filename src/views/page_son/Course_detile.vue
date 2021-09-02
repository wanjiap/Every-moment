<template>
  <div id="cour">
    <gos></gos>
    <div class="header" v-if="status">
      <img :src="coudata.info.cover_img" alt="">
      <div class="header_son">
        <p>{{coudata.info.title}}</p>
        <p class="info-com" v-if="coudata.info.course_type == 7">剩余名额：{{coudata.info.store_num}}</p>
        <p class="info-com" v-if="coudata.info.course_type != 7">共{{coudata.info.total_periods}}课时 | {{coudata.info.sales_num}}人已报名</p>
        <p class="info-com" v-if="coudata.info.course_type == 7">报名截止时间：{{coudata.info.enter_end_date | fomartTime('yyyy.MM.dd hh:mm')}}</p>
        <p class="info-com">开课时间：{{coudata.info.start_play_date | fomartTime('yyyy/MM/dd hh:mm')}} - {{coudata.info.end_play_date |fomartTime('yyyy/MM/dd hh:mm')}}</p>
        <p class="info-com" v-if="coudata.info.course_type == 7">开课地点：{{coudata.info.province_name + coudata.info.district_name +coudata.info.address}}</p>
        <div>
          <span v-if="coudata.info.underlined_price==coudata.info.price">免费</span>
          <p v-else>
            <span v-show="coudata.info.underlined_price!=0">{{coudata.info.underlined_price/100+'.00'}}</span>
            <span>{{coudata.info.price/100+'.00'}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="you" v-if=" coudata.couponList.length || coudata.info.service.length">
      <p class="p" v-if="coudata.couponList.length " @click="xian(1)"><span>优惠：</span><span>领取优惠券最多可减<i>{{mex/100}}</i></span><span>领取
          <van-icon name="arrow" /></span></p>
      <div v-if="coudata.info.service.length" @click="xian(2)"><span>服务：</span>
        <p><span v-for="(item,index) in coudata.info.service" :key="index">{{item.name}}</span></p><span>详情
          <van-icon name="arrow" /></span>
      </div>
    </div>
    <div class="jiaoxue">
      <p>教学团队</p>
      <ul>
        <li @click="teacher(item)" v-for="(item,index) in coudata.teachers" :key="index"><a href="javascript:;">
            <img :src="item.avatar" alt="">
            <span>{{item.teacher_name}}</span>
          </a></li>
      </ul>
    </div>

    <div class="nav" v-if="status">
      <van-tabs v-model="active" scrollspy sticky v-if="coudata.info.course_type!=9">
        <van-tab title='课程介绍'>
          <p class="cd-title">课程介绍</p>
          <div class="cd-details" v-html="coudata.info.course_details"></div>
        </van-tab>
        <van-tab title='课程大纲'>
          <p class="cd-title">课程大纲</p>
          <van-collapse v-model="activeNames">
            <van-collapse-item v-for="(item,index) in list" :key="item.id" :title="index+1+'、'+item.title" name="1">
              <div v-for="(ite,ind) in item.child" :key="ind">
                <p><span class="span"></span>
                  <span class="tree-see" v-if="ite.is_try_see && item.course_type != 7">试看</span>
                  <span class="huifang" v-if="(item.course_type == 2 || item.course_type == 3) && ite.play_type == 4 ">回放</span>
                  {{ite.periods_title}}</p>
                <div>
                  <span v-for="(it,inde) in ite.teachers" :key="inde">
                    {{it.teacher_name}}
                  </span>
                  <p class="zhon">{{item.child[0].start_play}}</p>-
                  <p>{{item.child[0].end_play}}</p>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title='课程评价'>
          <p class="cd-title">课程评价</p>
          <div>
            <van-empty class="custom-image" image="http://120.53.31.103:86/img/empty.0d284c2e.png" description="暂无评价" />
          </div>
        </van-tab>
      </van-tabs>
      <van-tabs v-model="active" scrollspy sticky v-else>
        <van-tab title='包含内容'>
          <div>
            <p class="cd-title">包含内容</p>
            <keList :pagelists='keli'></keList>
          </div>
        </van-tab>
        <van-tab title='课程介绍'>
          <p class="cd-title">课程介绍</p>
          <div class="cd-details" v-html="coudata.info.course_details"></div>
        </van-tab>
      </van-tabs>

    </div>
    <div class="but">
      <button>立即报名</button>
    </div>
    <van-popup v-model="show" position="bottom" closeable close-icon="close" round :style="{ height: '60%' }">
      <div class="kefu" v-if="cid==2">
        <p>课程服务</p>
        <div>
          <p v-for="(item,index) in coudata.info.service" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.description}}</span>
          </p>
        </div>
      </div>
      <youlist @getCoupon="getCoupon" v-else :list="coudata.couponList"></youlist>
    </van-popup>
  </div>
</template>
<script>
import { basis, keda, lingyou, neirong } from '@/api/user.js'

import gos from '@/components/go'
import youlist from '@/components/youlist'
import keList from '@/components/kelist'
import { log } from 'util'
export default {
  components: { gos, youlist, keList },
  data() {
    return {
      id: 0,
      coudata: [],
      status: false,
      mex: 0,
      active: 0,
      activeNames: ['0'],
      list: [],
      show: false,
      cid: 0,
      keli: {
        list: []
      }
    }
  },
  methods: {
    async xian(i) {
      this.show = true
      this.cid = i
      if (i == 1) {
        let { data: data } = await basis(this.id)
        this.coudata = data.data
        console.log(11)
      }
    },
    async detil() {
      let { data: data } = await basis(this.id)
      console.log(data.data, 777)
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
        this.mex = max_price
        //  console.log(this.coudata.info,77);
      }
    },
    async teacher(item) {
      this.$router.push('/tea_deatile?id=' + item.teacher_id)
    },
    async bao() {
      let { data: data } = await neirong({ id: this.id })
      this.keli.list = data.data
    },
    async kedalis() {
      let { data: data } = await keda({ id: this.id })
      this.list = data.data
      console.log(data.data, 77)
    },
    async getCoupon(i) {
      console.log(this.coudata.couponList[i].id)
      let { data: data } = await lingyou(this.coudata.couponList[i].id)
      console.log(data)
      if (data.code != 200) {
        this.$toast(data.msg)
      } else {
        this.$toast.success('成功')
        this.show = false
      }
    },
    init() {
      this.id = this.$route.query.id
      this.detil()
      this.kedalis()
      this.bao()
    }
  },
  watch: {
    $route(val, old) {
      if (val.query.id != old.query.id) {
        this.init()
      }
    }
  },
  created() {
    this.init()
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
      .info-com {
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
    margin-top: 15px;
    padding: 10px 15px;
    .p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      span:nth-child(2) {
        flex: 1;
        color: #595959;
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
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        flex: 1;
        span {
          color: #595959;
          display: initial;
          margin-right: 5px;
        }
      }
      span {
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
    margin-top: 15px;
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
        margin-top: 10px;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
          span {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
  .but {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #e60012;
      border: none;
      width: 90%;
      height: 35px;
      border-radius: 25px;
      color: white;
      font-size: 14px;
    }
  }
  .nav {
    margin-top: 10px;
    /deep/.van-tabs__content {
      width: 100%;
      .van-tab__pane:nth-child(2) {
        margin: 10px 0;
      }
      .van-tab__pane {
        padding: 15px;
        background: white;
        .cd-details {
          padding: 10px;
          p {
            font-size: 14px;
            margin: 2px 0;
          }
        }
        .van-cell__title {
          font-size: 16px;
        }
        .van-empty {
          padding: 15px 0;
        }
      }
      .cd-title {
        font-size: 15px;
      }
    }
  }
}
/deep/[class*='van-hairline']::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: none;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
}
/deep/ {
  .van-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0.42667rem;
    bottom: 0;
    border-bottom: 0.02667rem solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
/deep/.van-collapse-item__content {
  padding: 20px 40px;
  div {
    p {
      display: flex;
      align-items: center;
      .huifang {
        background: #ea7a2f;
        color: white;
        padding: 1px 5px;
        margin-right: 10px;
        font-size: 12x;
        border-radius: 2px;
      }
      .span {
        height: 5px;
        width: 5px;
        background: #e60012;
        margin-right: 10px;
      }
      font-size: 12px;
      color: #595959;
    }
    div {
      display: flex;
      align-items: center;
      padding-left: 30px;
      font-size: 12px;
      color: #8c8c8c;
      margin-top: 15px;
      .zhon {
        margin-left: 5px;
      }
      p {
        color: #8c8c8c;
      }
      span {
        margin-right: 5px;
      }
    }
  }
}
/deep/.van-tab--active {
  span {
    color: #e60012;
  }
}
/deep/.van-tabs__line {
  display: none;
}
/deep/.van-tab {
  font-size: 16px;
  color: #8c8c8c;
}
.kefu {
  margin-top: 20px;
  width: 100%;
  p {
    text-align: center;
    font-size: 18px;
  }
  div {
    margin-top: 16px;
    padding: 0 15px;
    p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 10px 0;
      span {
        font-size: 14px;
        margin: 5px 0;
      }
    }
  }
}
</style>


