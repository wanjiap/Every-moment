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
            <teacherList :pagelists='pagelists[0]'></teacherList>
            <keList :pagelists='pagelists[1]'></keList>
            <teacherList :pagelists='pagelists[2]'></teacherList>
        </div>
    </div>
</template>
<script>
import { banner, nav, pagelist ,basis,teache} from '@/api/user.js'
import teacherList from '@/components/teacher_list'
import keList from '@/components/kelist'
export default {
  components:{teacherList,keList},
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
      console.log(data.data);
    },
    /* 课程详情 */
    async cour(item){
      console.log(item);
    }
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
    padding: 15px;
  }
}
</style>


