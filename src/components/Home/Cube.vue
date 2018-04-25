<template>
<div class="cube">
  <img :src="imgUrl" alt="" class="cube-bg">
  <p class="time">{{time}}</p>
  <p class="des">{{des}}</p>
</div>
</template>

<script>
export default {
  props: ['imgUrl', 'time', 'des']
}
</script>

<style scoped>
.cube{
  overflow: hidden;
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.cube .cube-bg{
  height: 100%;
  position: absolute;
  z-index: -1;
}
.cube .des, .cube .time{
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
}
.cube .des{
  margin-bottom: 10px;
}
</style>
