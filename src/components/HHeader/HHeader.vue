<template>
  <div class="header">
    <div class="h-left h-col"><i class="iconfont icon-size-24px" v-bind:class="licon"></i></div>
    <div class="h-middle h-col">
      <i class="iconfont icon-chushimao icon-size-24px"></i>
      <input type="text" class="header-inp" :placeholder="ctext">
    </div>
    <div class="h-right h-col"><i class="iconfont icon-size-24px" v-bind:class="ricon"></i></div>   
  </div>
</template>
<script>
export default {
  props: ['licon', 'ricon', 'ctext']
}
</script>

<style scoped>
.header{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;/*水平方向对齐方式*/
  align-items: center;/*垂直方向对齐方式*/
  height: 36px;
}
.header .h-middle{
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #efefef;
  border-radius: 4px;
}
.header .h-middle .header-inp{
  height: 24px;
  width: 100%;
  border: none;
  outline: none;
  background-color: #efefef;
}
.header .h-middle i{
  margin: 0 5px;
}
</style>
