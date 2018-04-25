<template>
  <div class="market">
    <h-header/>
    <grid
      :grid-datas="gridDatas"
    />
      <h1>market page</h1>
  </div>
</template>
<script>
import HHeader from '@/components/HHeader/HHeader'
import Grid from '@/components/Grid/Grid'
export default {
  data () {
    return {
      gridDatas: [
        {
          icon: 'icon-pisa',
          text: '烘焙'
        },
        {
          icon: 'icon-mianbao',
          text: '果蔬生鲜'
        },
        {
          icon: 'icon-chuanchuanwanzi',
          text: '器具'
        },
        {
          icon: 'icon-niunai',
          text: '领卷'
        },
        {
          icon: 'icon-shuihu',
          text: '方便食品'
        },
        {
          icon: 'icon-zhazhiji',
          text: '进口零食'
        },
        {
          icon: 'icon-yinliao',
          text: '时令鲜食'
        },
        {
          icon: 'icon-zhuguo',
          text: '全部分类'
        }
      ]
    }
  },
  components: {
    HHeader,
    Grid
  }
}
</script>

<style scoped>
.market{
  width: 90%;
  margin: 0 auto;
}
</style>