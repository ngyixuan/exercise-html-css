<template>
  <div class="container">
    <div class="box"></div>
    <div class="nav">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.box {
  width: 180px;
  height: 350px;
  background: pink;
  background-image: url(../assets/walking.jpg);
  animation: animation 2s steps(6) infinite, runningToRight 5s linear forwards;
}

@keyframes animation {
  /* 动画的开始状态和盒子的默认样式相同的，可以省略开始状态的代码 */
  /* from {
    background-position: 0 0;
  } */
  to {
    background-position: -1094px 0;
  }
}

@keyframes runningToRight {
  /* from {
    transform: translateX(0px);
  } */
  to {
    transform: translateX(1094px);
  }
}
</style>
