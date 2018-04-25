<template>
  <div class="slider-cell">
    <img class="slider-bg" :src="imgUrl" alt="">
    <p class="badge-wrapper"><span class="badge">{{badge}}</span></p>
    <p class="text-1">{{text1}}</p>
    <p class="text-2">{{text2}}</p>
  </div>
</template>
<script>
export default {
  props: ['imgUrl', 'badge', 'text1', 'text2']
}
</script>

<style scoped>
.slider-cell{
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.slider-cell .slider-bg{
  position: absolute;
  width: 100%;
  z-index: -1;
}
.slider-cell .badge-wrapper{
  margin-bottom: 10px;
}
.badge-wrapper .badge{
  margin-left: 10px;
  border-radius: 4px;
  background-color: #fff;
  color: #2d2d2d;
  font-size: 14px;
  padding: 3px 5px;
}
.slider-cell .text-1, .slider-cell .text-2{
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.slider-cell .text-2{
  margin-bottom: 30px;
}
</style>
