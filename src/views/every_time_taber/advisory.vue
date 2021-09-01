<template>
    <div class="advisory">
        <van-tabs v-model="active" @click="tiao">
            <van-tab v-for="(item,index) in classify" :key="index" :title="item.name">
              <ul v-show="show">
                <li v-for="(ite,ind) in list" :key="ind" @click="$router.push('/editl?id='+ite.id)">
                    <img :src="ite.thumb_img" alt="">
                    <div class="son">
                        <p>{{ite.title}}</p>
                        <span>{{ite.description}}</span>
                        <div>
                          <span><van-icon name="eye-o" />{{ite.click_rate}}</span>
                        <p><van-icon name="underway-o" />{{ite.created_at | fomartTime("yyyy/MM/dd hh:mm")}}</p>
                    </div>
                    </div>
                </li>
                <div class="van-list__finished-text">没有更多了</div>
            </ul>
            <van-empty
            v-show='!show'
             class="custom-image"
             image="http://120.53.31.103:86/img/empty.0d284c2e.png"
             description="暂无咨询"
            />
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { zifen ,zilist} from '@/api/user.js'
export default {
  data() {
    return {
      active: 0,
      classify: [],
      frim:{
          classify_id:0,
          page:1,
          limit:10
      },
      list:[],
      show:false
    }
  },
  methods: {
    async zife() {
      let { data: data } = await zifen()
      this.classify = data.data
      this.classify.unshift({
        id: 0,
        name: '全部',
        parent_id: 0
      })
       console.log( this.classify)
    },
    tiao(i) {
      this.show=false
      this.frim.classify_id=this.classify[i].id
      this.changedata()
    },
   async changedata(){
       let {data:data}=await zilist(this.frim)
       console.log(data.data.list,44);
       this.list=data.data.list
       if(this.list.length>=1){
         this.show=true
       }else{
         this.show=false
       }
    },
  },
  created() {
    this.zife()
    this.changedata()
  },
}
</script>
<style lang="scss" scoped>
.advisory{
  background: white;
}
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
/deep/.van-tabs__wrap{
  border-bottom:1px solid #f1f1f1;
  .van-tabs__line{
    width: 20px;
    height: 1px;
  }
  .van-tab--active{
    color: #e60012;
  }
  .van-tab{
    font-size: 15px;
  }
}
.van-list__finished-text{
  height: 20px;
  line-height: 20px;
}
ul{
  padding:0 15px;
  li {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:2px 10px;
        margin: 15px 0;
        box-shadow: 1px 1px 20px 0 #eaeaea;
        box-sizing: border-box;
        border-radius: 15px;
        .son {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 70px;
          margin-left: 15px;
          p {
            font-size: 14px;
          }
          span {
            color: rgba(0, 0, 0, 0.45);
          }
          div{
            display: flex;
            justify-content: space-between;
            span{
              display: flex;
              align-items: center;
              i{
                font-size: 14px;
                color: #ccc;
                font-weight: 700;
                margin-right: 5px;
              }
            }
            p{
              color: #999;
              display: flex;
              align-items: center;
              font-size: 12px;
              i{
                color: #ccc;
                font-weight: 700;
                font-size: 8px;
                margin-right: 5px;
              }
            }
          }
        }
        img {
          width: 100px;
          height: 65px;
        }
      }
}
</style>


