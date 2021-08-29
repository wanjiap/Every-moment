<template>
    <div id="nick">
         <p> <input type="text" v-model="data.data.nickname" placeholder="最多可输入15个字"></p>
         <div><button @click="edit">保存</button></div>
    </div>
</template>
<script>
import gos from '@/components/go'
export default {
  components: { gos },
  data() {
    return {
      data: JSON.parse(localStorage.getItem('data')) || []
    }
  },
  methods:{
      edit(){
      localStorage.setItem("data",JSON.stringify(this.data))
      this.$router.go(-1)
  }
  }
}
</script>
<style lang="scss" scoped>
#nick {
  height: 100%;
  background: #f7f8fa;
  div{
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
}
p{
    background: white;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    font-size: 16px;
    input{
        border: none;
    }
}
</style>



