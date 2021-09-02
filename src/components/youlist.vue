<template>
    <div>
        <div class="youhui">
            <p class="p">优惠券</p>
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{'hui':item.is_can_get == 0}">
                    <div>
                        <p>
                            <span>{{item.discounted_price | toFixPrice(0)}}</span>
                            <font>满{{item.full_reduction | toFixPrice(0)}}可用</font>
                        </p>
                        <p v-if="item.dis_type==1">{{item.scope_type==1?'全部课程':item.scope_type==2?'指定分类':'指定课程'}}可用</p>
                        <p v-else-if="item.dis_type==4">{{item.scope_type==1?'全部约课':item.scope_type==2?'指定讲师':''}}</p>
                        <p v-else-if="item.dis_type==2">{{item.scope_type==1?'全部图书':item.scope_type==2?'指定图书':'指定图书'}}</p>
                        <p>
                            <span v-if="item.valid_type==1">自领取之日起{{item.valid_day}}天内有效</span>
                            <span v-if="item.valid_type==2">有效至：{{item.valid_start | fomartTime('yyyy.MM.dd')}} - {{item.valid_end | fomartTime('yyyy.MM.dd')}}</span>
                        </p>
                    </div>
                    <div v-if="comType == 'course_detail' || comType == 'book_detail'"  class="l-right" @click="getCoupon(index)">{{item.is_can_get == 0? '无法领取':'立即领取'}}</div>
                    <div v-else class="l-right" >立即使用</div>
                </li>
            </ul>
            <p class="bot" v-if="comType == 'course_detail'"><van-icon name="warning" />使用规则说明</p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    },
    comType: {
      type: String,
      default: 'course_detail'
    }
  },
  methods:{
      getCoupon(i){
          this.$emit("getCoupon",i)
      }
  }
}
</script>
<style lang="scss" scoped>
.youhui {
  margin-top: 20px;
  width: 100%;
  .p {
    font-size: 18px;
    padding-left: 15px;
  }
  ul {
    padding: 5px 10px;
    height: 320px;
    overflow-y: scroll;
    li {
      background: #ffc9bc;
      color: #e14641;
      margin: 20px 0;
      padding-left: 15px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-child(1) {
        flex: 1;
        padding: 5px 0;
        p:nth-child(1) {
          font-size: 18px;
          display: flex;
          align-items: center;
          font-weight: 400;
          span {
            font-size: 30px;
          }
        }
        p:nth-child(2) {
          margin: 2px 0;
        }
      }
      .l-right {
        border-left: 1px dashed #e14641;
        height: 100%;
        flex: none;
        height: 75px;
        line-height: 85px;
        text-align: center;
        width: 28%;
        font-weight: 400;
        font-size: 15px;
      }
    }
    .hui{
    color: #8c8c8c;
    background: #d9d9d9;
}
  }
  .bot{
      text-align: right;
      color: #8c8c8c;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      font-size: 14px;
      i{
          color: #ccc;
          margin-right: 5px;
      }
  }
}
</style>
