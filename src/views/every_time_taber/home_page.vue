<template>
    <div class="page">
        <!-- 头部布局部分 -->
        <div class="header">
            <!-- 搜索部分布局 -->
            <div class="serch">
                <!-- 搜索左边图片 -->
                <img src="../../assets/img/page_left.png" alt="">
                <!-- 搜索框部分 -->
                <p><input type="text" name="" id="" placeholder="搜索"><van-icon name="search" /></p>
                <!-- 搜索右边图片 -->
                <img src="../../assets/img/page_right.png" alt="">
            </div>
            <!-- 轮播图布局 -->
             <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in banners" :key="index">
                 <img :src="require('../../assets/img/'+item+'.jpg')" alt="">
                </van-swipe-item>
            </van-swipe>
            <!-- nav部分布局(接口返回数据只有一个) -->
            <van-grid :border="false">
                 <van-grid-item v-for="(item,index) in navs" :key="index">
                  <img :src="item.nav_img" alt="">
                  <span>{{item.name}}</span>
                </van-grid-item>
            </van-grid>
        </div>
        <!-- 首页列表布局 -->
        <div class="content" v-if="status">
            <!-- 首页列表一级列表布局 -->
            <ul>
                <p class="ul_son1"><span>{{pagelists[0].channel_info.name}}</span><span>更多<van-icon name="arrow" /></span></p>
                <li v-for="(ite,ind) in pagelists[0].list" :key="ind" @click="teacher(ite)">
                    <img :src="ite.teacher_avatar" alt="">
                    <div>
                        <p>{{ite.teacher_name}}</p>
                        <span>{{ite.introduction}}</span>
                    </div>
                </li>
            </ul>
            <ul >
                <p class="ul_son1"><span>{{pagelists[1].channel_info.name}}</span><span>更多<van-icon name="arrow" /></span></p>
                <li v-for="(ite,ind) in pagelists[1].list" :key="ind" @click="dis(ite)">
                    <img :src="ite.cover_img" alt="">
                    <div>
                        <p><span v-if="ite.underlined_price!=0">劵</span>{{ite.title}}</p>
                        <span>{{ite.sales_num}}人已报名</span>
                    </div>
                    <div>
                        <span  v-if="ite.underlined_price==ite.price">免费</span>
                        <p v-else>
                            <span v-show="ite.underlined_price!=0">{{ite.underlined_price/100}}</span>
                            <span >{{ite.price/100}}</span>
                        </p>
                    </div>
                </li>
            </ul>
            <ul >
                <p class="ul_son1"><span>{{pagelists[2].channel_info.name}}</span><span>更多<van-icon name="arrow" /></span></p>
                <li v-for="(ite,ind) in pagelists[2].list" :key="ind"  @click="teacher(ite)">
                    <img :src="ite.teacher_avatar" alt="">
                    <div>
                        <p>{{ite.teacher_name}}</p>
                        <span>{{ite.introduction}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { banner, nav, pagelist ,basis,teache} from '@/api/user.js'
export default {
  data() {
    return {
      banners: ['banner1', 'banner2', 'banner3', 'banner4'] /* banner图数据 */,
      navs: [] /* nav数据 */,
      pagelists: [] /* 数据列表 */,
      status:false
    }
  },
  methods: {
    /* 获取banner图方法(banner数据为空 ) */
    async bannerList() {
      let data = await banner()
      /* console.log(data) */
    },
    /* 获取nav数据方法 (接口返回数据只有一个)*/
    async getNav() {
      let { data: data } = await nav()
      /* console.log(data); */
      this.navs = data.data
    },
    /* 获取首页列表数据 */
    async getPagelist() {
      let { data: data } = await pagelist()
      this.pagelists = data.data
      this.status=true
    },
    /* 课程详情 */
    async cour(item){
      console.log(item);
    },
    async teacher(item){
      this.$router.push("/tea_deatile?id="+item.teacher_id)
    },
     dis(item){
        this.$router.push('/Course_detile?id='+item.id)
    },
  },
  /* 生命周期调用方法 */
  created() {
    this.bannerList()
    this.getNav()
    this.getPagelist()
  }
}
</script>
<style lang="scss" scoped>
.page {
  color: #595959;
  background: #f7f8fa;
  /* 首页头部样式 */
  .header {
    background: white;
    padding-bottom: 10px;
    /* 搜索部分样式 */
    .serch {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0 18px;
      img:nth-child(1) {
        width: 30px;
        height: 30px;
      }
      img:nth-child(3) {
        width: 22px;
        height: 20px;
      }
      p {
        width: 80%;
        background: white;
        height: 30px;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        box-shadow: 2px 2px 10px 2px #eaeaea;
        input {
          border: none;
          font-size: 13px;
        }
        i {
          font-size: 18px;
        }
        input::-webkit-input-placeholder {
          color: rgb(184, 183, 183);
        }
      }
    }
    /* 轮播部分样式 */
    .my-swipe .van-swipe-item {
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    /* nav样式 */
    .van-grid {
      margin-top: 20px;
      .van-grid-item__content {
        img {
          width: 21px;
          height: 21px;
        }
        span {
          margin-top: 10px;
          color: #8c8c8c;
        }
      }
    }
  }
  /* 首页列表样式 */
  .content {
    ul:nth-of-type(2) {
      li {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px;
        div:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 70px;
          margin-right: 70px;
          p {
            font-size: 14px;
            span {
              background: #e74d3d;
              color: #fff;
              padding: 2px;
              border-radius: 2px;
              margin-right: 5px;
            }
          }
          span {
            color: rgba(0, 0, 0, 0.45);
          }
        }
         div:nth-of-type(2){
             span{
                color:#44a426;
                font-size: 15px;
             }
             p{
                 :nth-child(1){
                     color: #999;
                    text-decoration: line-through;
                    font-size: 12px;
                 }
                 :nth-child(2){
                     color: #ee1f1f;
                     font-size: 16px;
                 }
             }
         }
        img {
          width: 120px;
          height: 70px;
        }
      }
    }
    padding: 15px;
    .ul_son1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 3px solid #e60012;
      padding-left: 10px;
      margin-bottom: 15px;
      :nth-child(1) {
        font-size: 16px;
      }
      :nth-child(2) {
        display: flex;
        align-items: center;
        font-size: 14px;
        i {
        }
      }
    }
    li {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      background: white;
      border-radius: 10px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      padding: 15px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      div {
        p {
          font-size: 16px;
          margin-bottom: 5px;
        }
        span {
          color: #b7b7b7;
          font-size: 12px;
        }
      }
    }
  }
}
</style>


