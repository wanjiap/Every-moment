<template>
    <div>
        <ul>
            <div v-if="pagelists.channel_info">
                <p  class="ul_son1"><span>{{pagelists.channel_info.name}}</span><span>更多
                    <van-icon name="arrow" /></span></p>
            </div>
            <li v-for="(ite,ind) in pagelists.list" :key="ind" @click="dis(ite)">
                <img :src="ite.cover_img" alt="">
                <div>
                    <p><span v-if="ite.is_has_coupon">劵</span>{{ite.title}}</p>
                    <span>{{ite.sales_num}}人已报名</span>
                </div>
                <div>
                    <span v-if="ite.underlined_price==ite.price">免费</span>
                    <p v-else>
                        <span v-show="ite.underlined_price!=0">{{ite.underlined_price/100}}</span>
                        <span>{{ite.price/100}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['pagelists'],
  methods: {
    dis(item) {
      this.$router.push('/Course_detile?id=' + item.id)
    }
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
ul {
  li {
    width: 100%;
    box-sizing: border-box;
    background: white;
    border-radius: 10px;
    margin-bottom: 15px;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    div:nth-of-type(1) {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 70px;
      margin-left: 10px;
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
</style>


