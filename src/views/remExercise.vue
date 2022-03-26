<template>
  <div class="container">
    <div class="box"></div>
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
html {
  font-size: 20px;
}
.box {
  width: 5rem;
  height: 3rem;
  background-color: pink;
}

/* 不同的视口，HTML标签字号不同，字号是视口宽度的1/10 */
@media (width: 320px) {
  html {
    font-size: 32px;
  }
}
@media (width: 375px) {
  html {
    font-size: 37.5px;
  }
}
@media (width: 414px) {
  html {
    font-size: 41.4px;
  }
}
</style>
