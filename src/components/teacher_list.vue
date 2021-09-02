<template>
    <div>
        <ul>
             <div v-if="pagelists.channel_info">
                <p  class="ul_son1"><span>{{pagelists.channel_info.name}}</span><span>更多
                    <van-icon name="arrow" /></span></p>
            </div>
            <li v-for="(ite,ind) in pagelists.list" :key="ind" @click="teacher(ite)">
                <img :src="ite.teacher_avatar" alt="">
                <div>
                    <p>{{ite.teacher_name}}</p>
                    <span>{{ite.introduction}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['pagelists'],
  methods:{
       teacher(item){
      this.$router.push("/tea_deatile?id="+item.teacher_id)
    },
  }
}
</script>
<style lang="scss" scoped>
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
</style>


