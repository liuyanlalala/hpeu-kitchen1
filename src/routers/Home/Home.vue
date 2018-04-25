<template>
  <div class="home">
    <h-header
      licon="icon-zengjia"
      ricon="icon-gouwu"
      ctext="搜索菜谱、食材"
    />
    <grid
      :grid-datas="gridDatas"
    />
    <div class="content">
      <div class="cube-wrapper">
        <cube
          imgUrl="static/image/jizhua.jpg"
          time="本周"
          des="流行菜谱"
        />
      </div>
      <div class="cube-wrapper">
        <cube
          imgUrl="static/image/jizhua.jpg"
          time=""
          des="关注动态"
        />
      </div>
    </div>
    <div class="banner-wrapper">
      <slider/>
    </div>
    <h1>home page</h1>
  </div>
</template>
<script>
// @表示当前的src目录
import HHeader from '@/components/HHeader/HHeader'
import Grid from '@/components/Grid/Grid'
import Cube from '@/components/Home/Cube'
// 导入轮播图组件
import Slider from '@/components/Slider/Slider'
export default {
  data () {
    return {
      gridDatas: [
        {
          icon: 'icon-pisa',
          text: '厨房好物'
        },
        {
          icon: 'icon-mianbao',
          text: '发现新菜'
        },
        {
          icon: 'icon-chuanchuanwanzi',
          text: '排行榜'
        },
        {
          icon: 'icon-niunai',
          text: '菜谱分类'
        }
      ]
    }
  },
  components: {
    HHeader,
    Grid,
    Cube,
    Slider
  }
}
</script>

<style scoped>
.home{
  width: 90%;
  margin: 0 auto;
}
.home .content{
  display: flex;
}
.home .content .cube-wrapper{
  width: 50%;
}
.home .content .cube-wrapper:nth-child(1){
  margin-right: 15px;
}
.home .banner-wrapper{
  margin-top: 20px;
}
.slider-img{
  width: 100%;
}

</style>
