<template>
    <div id="sex">
         <gos></gos>
         <div class="header">
            <p @click="edit(1)"> <span>男</span><van-icon v-show="cid==1" name="checked" /></p>
            <p @click="edit(2)"> <span >女</span><van-icon v-show="cid==2" name="checked" /></p>
            <p @click="edit(3)"> <span >保密</span><van-icon v-show="cid==3" name="checked" /></p>
         </div>
         <div class="foot"><button @click="gets">保存</button></div>
    </div>
</template>
<script>
import gos from '@/components/go'
export default {
  components: { gos },
  data() {
    return {
        sex:JSON.parse(localStorage.getItem('sex')) || '',
        cid: 0
    }
  },
  methods: {
    edit(i) {
      this.cid = i
    },
    gets(){
         if(this.cid==1){
          this.sex='男'
      }else if(this.cid==2){
          this.sex='女'
      }else{
          this.sex='保密'
      }
      localStorage.setItem('sex',JSON.stringify(this.sex))
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
#sex {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
 .foot{
    position: fixed;
    bottom: 0;left: 0;
    background: white;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 90%;
        height: 37px;
        border: none;
        background: #e60012;
        color: white;
        border-radius: 50px;
    }
}
.header {
  padding: 0 15px;
  overflow: hidden;
  background: white;
  p {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      font-size: 22px;
      color: red;
    }
  }
}
</style>



