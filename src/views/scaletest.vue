<template>
  <div class="container">
    <div class="play-box">
      <img src="../assets/scale.jpg" alt="" />
    </div>
    <p class="text">点击播放视频</p>
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
* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}
.play-box {
  width: 300px;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
}

.play-box::after {
  /* 播放按钮定位在图片上面 */
  content: "";
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  /* margin定位 */
  /* margin-left: -100px;
  margin-top: -100px; */
  /* translate */
  transform: translate(-50%, -50%) scale(2);
  background-image: url(../assets/play.png);
  transition: all 0.3s;
  opacity: 0;
}
.play-box:hover::after {
  /* transform: scale(0.3); */
  transform: translate(-50%, -50%) scale(0.3);
  opacity: 1;
}

.text {
  text-align: center;
}
</style>
