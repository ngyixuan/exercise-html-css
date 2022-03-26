<template>
  <div class="container">
    <div class="navs">
      <ul>
        <li>
          <a href="#">登录</a>
          <a href="#">login</a>
        </li>
        <li>
          <a href="#">注册</a>
          <a href="#">register</a>
        </li>
        <li>
          <a href="#">登出</a>
          <a href="#">logout</a>
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
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navs {
  width: 300px;
  height: 40px;
  margin: 50px auto;
}

.navs li {
  position: relative;
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  transition: all 0.5s;
  transform-style: preserve-3d;
  /* 写代码过程中方便看到盒子调试 */
  /* transform: rotateX(-20deg) rotateY(20deg); */

  transform: scale3d(0.5, 1, 2);
}

.navs li a {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #fff;
}

.navs li a:first-child {
  background-color: green;
  transform: translateZ(20px);
}

.navs li a:last-child {
  background-color: orange;
  /* 躺平x轴旋转， 立方体的顶部， 位移z轴*/
  transform: rotateX(90deg) translateZ(20px);
}

.navs li:hover {
  transform: rotateX(-90deg);
}
</style>
