<template>
  <div class="grid">
      <ul class="grid-list">
          <li class="grid-item" v-for="(gridData, i) in gridDatas" :key="i">
              <i class="iconfont item-icon" :class="gridData.icon"></i>
              <p class="item-text">{{gridData.text}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ['gridDatas']
}
</script>
<style scoped>
.grid-list{
    display: flex;
    /*排列方式*/
    flex-direction: row;
    justify-content: space-around;
    /*如果内容超出盒子，换行处理*/
    flex-wrap: wrap;
}
.grid-list .grid-item{
    padding: 10px 0;
    display: flex;
    width: 25%;
    flex-direction: column;
    /*主轴方向*/
    justify-content: flex-start;
    /*侧轴方向*/
    align-items: center;
}
.grid-item .item-icon{
    font-size: 36px;
    color: pink;
}
.grid-item .item-text{
    font-size: 14px;
}
</style>
