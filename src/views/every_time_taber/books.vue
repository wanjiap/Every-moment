<template>
    <div class="books">
        <van-tabs v-model="active"  @click="bian">
            <van-tab v-for="(item,index) in navlist" :key="index" :title="item.name">
                <ul class="bb" v-if="item.child">
                    <li :class="{'city' :cid==ind}" v-for="(ite,ind) in item.child" :key="ind" @click="dian(ind)">
                        {{ite.name}}
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
        <div class="pai">
            <p :class="{'xuan' :paiId==1}" @click="paied(1)">按时间</p>
            <p :class="{'xuan' :paiId==2}" @click="paied(2)">按热度</p>
            <p :class="{'xuan' :paiId==3}" @click="paied(3)">铵价格
                <span class="span">
                    <van-icon name="arrow-up" :class="{'yan' :paison==2}" />
                    <van-icon name="arrow-down" :class="{'yan' :paison==1}" />
                </span>
            </p>
        </div>
    </div>
</template>
<script>
import { booknav, booklist } from '@/api/user.js'
export default {
  data() {
    return {
      active: 0,
      navlist: [],
      cid: 0,
      paiId: 1,
      paison: 0,
      from: {
        page: 1,
        limit: 10,
        order: 'id',
        id: 0,
      }
    }
  },
  methods: {
    async boklis() {
      let data = await booklist(this.from)
      console.log(data);
    },
    paied(i) {
      this.paiId = i
      if (i == 3) {
        if (this.paison != 0) {
          this.paison = 2
        } else {
          this.paison = 1
        }
      }
      console.log(this.paison)
    },
    dian(i) {
      this.cid = i
    },
    bian(i){
        this.from.id=this.navlist[i].id
        this.boklis()
    },
    async nav() {
      let { data: data } = await booknav()
      console.log(data)
      this.navlist = data.data
    }
  },
  created() {
    this.nav()
    this.boklis()
  }
}
</script>
<style lang="scss" scoped>
/deep/.van-tabs {
  background: white;
  .van-tabs__wrap {
    border-bottom: 1px solid #ebedf0;
  }
}
.bb {
  display: flex;
  background: white;
  padding: 15px 0;
  overflow-x: scroll;
  li {
    margin-left: 15px;
    background: #ededed;
    color: #595959;
    font-size: 14px;
    padding: 2px 15px;
    flex: none;
    border-radius: 25px;
  }
  .city {
    color: #e60012;
  }
}
.pai {
  display: flex;
  width: 100%;
  background: white;
  height: 40px;
  align-items: center;
  p {
    height: 100%;
    margin: 0 15px;
    font-size: 15px;
    color: #595959;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    .span {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      i {
        font-size: 10px;
        font-weight: 900;
        color: #595959;
      }
      .yan {
        color: #e60012;
      }
    }
  }
  .xuan {
    color: #e60012;
    border-bottom: 2px solid #e60012;
  }
}
</style>


