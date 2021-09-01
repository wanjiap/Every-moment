<template>
    <div id="edi">
        <img :src="list.thumb_img" alt="">
        <p class="h1">{{list.title}}</p>
        <p class="time"><span>{{list.click_rate}}次预览</span><span>{{list.created_at | fomartTime("MM-dd")}}</span></p>
        <p class="name"><span>{{list.description}}</span></p>
        <div class="bottom" v-html="list.content">

        </div>
    </div>
</template>
<script>
import { zidetil} from '@/api/user.js'
export default {
    data(){
        return{
            id:this.$route.query.id,
            list:[]
        }
    },
    methods:{
        async deta(){
            let {data:data}=await zidetil({information_id: this.id})
            console.log(data);
            this.list=data.data
        }
    },
    created(){
        console.log(this.id);
        this.deta()
    }
}
</script>
<style lang="scss" scoped>
#edi{
    background: white;
}
img{
    width: 100%;
    height: 375px;
}
.h1{
    font-size: 22px;
    padding-left: 20px;
}
.time{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    color: #b7b7b7;
    font-size: 14px;
}
.name{
    text-align: center;
    padding: 30px 0;
    span{
        font-size: 16px;
        color: #999;
        border-bottom: 1px solid #ededed99;
        padding: 30px 30px;
    }
}
.bottom{
    font-size: 17px;
    padding: 15px;
}
</style>


