<template>
  <div id="dea">
    <gos></gos>
    <div class="header">
      <img :src="teacher_data.avatar" alt="">
      <p>{{teacher_data.real_name}}</p>
    </div>
    <div class="body">
      <van-tabs v-model="active" @click="tiao">
        <van-tab title="讲师介绍">
          <p class="jian">老师简介</p>
          <p class="shao">{{teacher_data.introduction}}</p>
        </van-tab>
        <van-tab title="主讲课程">
          <div class="content">
            <keList :pagelists='teacher_list'></keList>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { teache, teacherlist, basis } from '@/api/user.js'
import gos from '@/components/go'
import keList from '@/components/kelist'
export default {
  components: { gos,keList },
  data() {
    return {
      teacher_id: this.$route.query.id,
      teacher_data: [],
      teacher_list: {
        list:[]
      },
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
    tiao(i) {
      if (i == 1) {
        this.teachlis()
      }
    },
    async teachlis() {
      let { data: data } = await teacherlist({ teacher_id: this.teacher_id })

      this.teacher_list.list = data.data.list
      console.log(this.teacher_list);
    },
    dis(item) {
      this.$router.push('/Course_detile?id=' + item.id)
    }
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
       padding: 15px;
    }
  }
}
</style>


