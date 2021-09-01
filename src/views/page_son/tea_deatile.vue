<template>
    <div id="dea">
        <gos></gos>
        <div class="header">
            <img :src="teacher_data.avatar" alt="">
            <p>{{teacher_data.real_name}}</p>
        </div>
        <div class="body">
            <van-tabs v-model="active" @click="tiao">
                <van-tab title="讲师介绍" >
                    <p class="jian">老师简介</p>
                    <p class="shao">{{teacher_data.introduction}}</p>
                </van-tab>
                <van-tab title="主讲课程">
                    <div class="content">
                        <ul >
                            <li v-for="(ite,ind) in teacher_list" :key="ind"  @click="dis(ite)">
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
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import { teache, teacherlist,basis } from '@/api/user.js'
import gos from '@/components/go'
export default {
    components:{gos},
  data() {
    return {
      teacher_id: this.$route.query.id,
      teacher_data: [],
      teacher_list: [],
      active: 2
    }
  },
  methods: {
    async teach() {
      let { data: data } = await teache(this.teacher_id)
      /*   console.log(data) */
      this.teacher_data = data.data.teacher
      /*  console.log(this.teacher_data) */
    },
    tiao(i){
      if(i==1){
        this.teachlis()
      }
    },
    async teachlis() {
      let { data: data } = await teacherlist({ teacher_id: this.teacher_id })
      console.log(data.data.list, 888)
      this.teacher_list = data.data.list
    },
     dis(item){

        this.$router.push('/Course_detile?id='+item.id)
    },
  },
  created() {
    this.teach()
    this.teachlis()
  }
}
</script>
<style lang="scss" scoped>
#dea {
  background: white;
  height: 100%;
  .header {
    display: flex;
    padding: 20px 30px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    p {
      font-size: 16px;
      margin-top: 15px;
      margin-left: 15px;
    }
  }
  .body {
    /deep/.van-tabs__wrap {
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      margin: 0 15px;
    }
    /deep/.van-tabs__line {
      width: 23px;
      height: 4px;
    }
    /deep/.van-tab__text {
      font-size: 16px;
    }
    .jian {
      color: #b7b7b7;
      margin: 15px 15px;
    }
    .shao {
      font-size: 14px;
      margin: 0 15px;
    }
    .content {
         background: white;
      ul {
          width: 100%;
          padding:15px 20px;
          box-sizing: border-box;
          overflow: hidden;
        li {
          height: 100px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
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
          div:nth-of-type(2) {
            span {
              color: #44a426;
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
    }
  }
}
</style>


