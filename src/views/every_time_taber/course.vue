<template>
    <div id="course">
        <ul>
                <li v-for="(ite,ind) in pagelist" :key="ind"  @click="teacher(ite)">
                    <img :src="ite.avatar" alt="">
                    <div>
                        <p>{{ite.real_name}}</p>
                        <span>{{ite.introduction}}</span>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
import { ke } from '@/api/user.js'
export default {
  data() {
    return {
      pagenu: {
        page: 1,
        limit: 10
      },
      pagelist:[]
    }
  },
  methods:{
      async kelist(){
          let {data:data}=await ke(this.pagenu)
          console.log(data.data.list);
          this.pagelist=data.data.list
      },
      teacher(item){
      this.$router.push("/tea_deatile?id="+item.id)
    },
  },
  created(){
      this.kelist()
  }
}
</script>
<style lang="scss" scoped>
#course{
    height: 100%;
    background: #f7f8fa;
}
ul{
    padding: 0 15px;
    margin: 20px 0;
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
</style>


