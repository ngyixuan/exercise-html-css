<template>
  <div class="container">
    <div></div>

    <!-- <div>
      <ul>
        <li>
          <a href="">
            <span class="iconfont icon-gouwuche-tianchong shopping-cart"></span>
            <span>购物车</span>
            <span class="iconfont icon-xiangxia"></span>
          </a>
        </li>
      </ul>
    </div> -->

    <!-- <div class="outer-box">
      <div class="inner-box"></div>
    </div> -->

    <div class="icon-box">
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tongfengfengshan"></use>
      </svg> -->
      <img src="../assets/tire.png" alt="" />
    </div>

    <div class="box"></div>

    <div class="scale-box">
      <img src="../assets/scale.jpg" alt="" />
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
.scale-box {
  width: 200px;
  height: 133px;
  background-color: pink;
  margin: 100px auto;
  overflow: hidden;
}

img {
  width: 200px;
  transition: all 0.5s;
  /* transform-origin: right bottom; */
}

.scale-box:hover img {
  transform: scale(1.2);
}

.icon-box {
  width: 800px;
  height: 200px;
  border: 1px solid black;
  margin: 100px auto;
}

.icon-box:hover img {
  transform: translate(600px) rotate(360deg);
}
.box {
  width: 500px;
  height: 100px;
  margin: 0 auto;
  background-color: pink;
  overflow: hidden;
}
.box::before {
  content: "";
  float: left;
  background: skyblue;
  width: 50%;
  height: 100%;
  transition: all 0.5s;
}
.box::after {
  content: "";
  float: left;
  background: aquamarine;
  width: 50%;
  height: 100%;
  transition: all 0.5s;
}

.box:hover::before {
  transform: translate(-100%);
}
.box:hover::after {
  transform: translate(100%);
}

.shopping-cart {
  font-size: 20px;
  color: #f04;
}
.outer-box {
  width: 600px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
}
.inner-box {
  width: 300px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: pink;
}

a {
  text-decoration: none !important;
}

li {
  list-style-type: none;
}
</style>
