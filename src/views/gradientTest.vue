<template>
  <div class="container">
    <div class="box">
      <ul>
        <li v-for="item in 2" :key="item.index">
          <a href="">
            <div class="pic">
              <img src="../assets/scale.jpg" alt="" />
            </div>
            <div class="txt">
              <h4>产品</h4>
              <h5>这里是大标题这里是大标题这里是大标题</h5>
              <p>
                <span>了解更多</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-arrow-alt-circle-right"></use>
                </svg>
              </p>
            </div>
            <div class="mask"></div>
          </a>
        </li>
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
* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  vertical-align: middle;
}

.box {
  width: 80%;
  height: 200px;
  margin: 20px auto;
}

.box li {
  float: left;
  position: relative;
  margin-right: 20px;
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.box li:last-child {
  margin-right: 0px;
}

.box .txt h4 {
  font-size: 15px;
}

.box .txt h5 {
  font-size: 20px;
  padding-bottom: 65px;
}

.box .txt p svg {
  vertical-align: middle;
  font-size: 14px;
  color: greenyellow;
}

.box .txt p {
  font-size: 14px;
}

/* 字体向上移动 */
.box .txt {
  position: absolute;
  left: 0;
  bottom: -80px;
  width: 250px;
  height: auto;
  padding: 20px 25px;
  color: white;
  z-index: 2;
  transition: transform 0.5s;
}
.box li:hover .txt {
  transform: translateY(-80px);
}

/* 背景颜色渐变 */

.box .mask {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 300px;
  height: 200px;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  transition: all 0.5s;
}
.box li:hover .mask {
  opacity: 1;
}

/* 图片放大效果 */
.box li img {
  transition: all 0.4s;
}
.box li:hover img {
  transform: scale(1.2);
}
</style>
