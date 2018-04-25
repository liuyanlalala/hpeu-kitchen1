<template>
  <div class="slider-wrapper" ref="sWrapper">
    <ul class="slider-content">
      <li class="slider-item" v-for="(sliderData , i) in sliderDatas" :key="i">
        <slider-cell
          :imgUrl="sliderData.imgUrl"
          :badge="sliderData.badge"
          :text1="sliderData.text1"
          :text2="sliderData.text2"
        />
      </li>
    </ul>
  </div>
</template>
<script>
// 按页切换的组件
// 1.引入better-scroll框架
// 2.在确定的执行时机下绑定
import BetterScroll from 'better-scroll'
import SliderCell from './SliderCell'
let sliderDatas = [
  {
    imgUrl: "static/image/jidanzai.jpg",
    badge: "菜谱合集",
    text1: "不趁青梅尝煮酒",
    text2: "要看细雨熟黄梅"
  },
  {
    imgUrl: "static/image/shaomai.jpg",
    badge: "菜谱合集",
    text1: "不趁青梅尝煮酒",
    text2: "要看细雨熟黄梅"
  },
  {
    imgUrl: "static/image/xiangchong.png",
    badge: "菜谱合集",
    text1: "不趁青梅尝煮酒",
    text2: "要看细雨熟黄梅"
  },
  {
    imgUrl: "static/image/yinliao.jpg",
    badge: "菜谱合集",
    text1: "不趁青梅尝煮酒",
    text2: "要看细雨熟黄梅"
  }

];
export default {
  data () {
    return {
      slider: null,
      sliderDatas
    }
  },
  components: {
    SliderCell
  },
  mounted () {
    this.slider = new BetterScroll(this.$refs.sWrapper, {
      scrollX: true,
      snap: {
        loop: true,// 循环，无缝轮播
        threshold: 0.5// 移动多少百分比的时候切换页面
      }
    });
  }
}
</script>

<style scoped>

.slider-wrapper{
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.slider-wrapper .slider-content{
  width: 600%;
  height: 100%;
  overflow: hidden;
}
.slider-content .slider-item{
  height: 100%;
  float: left;
  width: 16.675%;
}
</style>

