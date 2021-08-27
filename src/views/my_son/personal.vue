<template>
    <div class="per">
        <gos></gos>
        <ul>
            <li>
                <span>头像</span>
                 <span><img src="../../assets/img/blue.jpg" alt=""><van-icon name="arrow" /></span>
            </li>
            <li>
                <span>昵称</span>
                <span>{{data.data.nickname}}<van-icon name="arrow" /></span>
            </li>
            <li>
                <span>手机号</span>
                <span>{{data.data.mobile}}<van-icon name="" /></span>
            </li>
            <li>
                <span>性别</span>
                <span>保密<van-icon name="arrow" /></span>
            </li>
             <li>
                <span>出生日期</span>
                <span>0<van-icon name="arrow" /></span>
            </li>
             <li>
                <span>所在城市</span>
                <span>请选择<van-icon name="arrow" /></span>
            </li>
        </ul>
    </div>
</template>
<script>
import gos from "@/components/go"
export default {
    components:{gos},
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || []
    }
  },
  created() {
    console.log(this.data)
  }
}
</script>
<style lang="scss" scoped>
.per {
  ul {
    padding: 5px 15px;
    background: white;
    :last-child {
      border: none;
    }
    :nth-child(1) {
      :nth-child(2) {
        position: relative;
        img {
          height: 37px;
          width: 37px;
          border: 2px solid #bdcdf1;
          border-radius: 50%;
        }
        i{
            position: absolute;
            right: -35px;
        }
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      font-size: 14px;
      border-bottom: 1px solid #f5f5f5;
      :nth-child(2) {
        color: #8c8c8c;
        display: flex;
        align-items: center;
        margin-right: 15px;
        position: relative;
        i {
          position: absolute;
          right: -20px;
          font-size: 20px;
          color: #b7b7b7;
        }
      }
    }
  }
}
</style>


