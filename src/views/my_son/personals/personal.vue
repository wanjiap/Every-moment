<template>
    <div class="per">
        <gos></gos>
        <ul>
            <li>
                <span>头像</span>
                 <span><img src="../../../assets/img/blue.jpg" alt=""><van-icon name="arrow" /></span>
            </li>
            <li @click="$router.push('/nickname')">
                <span>昵称</span>
                <span>{{data.data.nickname}}<van-icon name="arrow" /></span>
            </li>
            <li>
                <span>手机号</span>
                <span>{{data.data.mobile}}<van-icon name="" /></span>
            </li>
            <li @click="$router.push('/sex')">
                <span>性别</span>
                <span>{{sex}}<van-icon name="arrow" /></span>
            </li>
             <li @click="onChangeInfo('data')">
                <span>出生日期</span>
                <span>{{currentDate|formatTimer}}<van-icon name="arrow" /></span>
            </li>
             <li @click="onChangeInfo('address')">
                <span>所在城市</span>
                <span>{{ressdi}}<van-icon name="arrow" /></span>
            </li>
        </ul>
        <van-popup  v-model="flag" position="bottom" >
            <div class="wrapper" @click.stop>
                   <van-datetime-picker
                   class="data"
                    v-show="dataFlag"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="flag=false"
                    @confirm="adddata"
          />
              </div>
              <van-area v-show="addressflag" title="选择地址" :area-list="areaList" @cancel="flag=false" @confirm="addres"/>
          </van-popup >
          
    </div>
</template>
<script>
import { areaList } from '@vant/area-data';
import gos from '@/components/go'
import { uses } from '@/api/user.js'
export default {
  components: { gos },
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || [],
      sex: JSON.parse(localStorage.getItem('sex')) || '保密',
      minDate: new Date(1901, 1, 1),
      maxDate: new Date(),
      currentDate:0,
      ressdi:'请选择',
      dataFlag: false,
      addressflag:false,
      flag:false,
      areaList
    }
  },
  methods: {
    onChangeInfo(item){
      this.flag=true
      if(item=='data'){
        this.dataFlag=true
        this.addressflag=false
      }else{
        this.dataFlag=false
        this.addressflag=true
      }
    },
    adddata(val){
       this.flag = false;
       /* console.log(val.format("yyyy-MM-dd")); */
     /*  this.requestUpdateUserInfo({ birthday: val.format("yyyy-MM-dd") }); */
    },
    addres(val){
      this.flag = false;
      this.ressdi=''
      val.forEach(item=>[
        this.ressdi+=item.name+','
      ])
      console.log(this.ressdi);
    }
  },
  watch:{
  },
  created() {
    console.log(this.data)
  },
  filters: {
    formatTimer: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      return y + "-" + MM + "-" + d ;
    }
  },
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
        i {
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


