<template>
  <div class="container">
    <!-- 导航栏 -->
    <header>
      <div class="top">
        <div class="left">
          <a href="">
            <i class="iconfont icon-Navbar-logo"></i>
          </a>
        </div>
        <div class="right">
          <a href="">
            <i class="iconfont icon-search"></i>
          </a>
          <a class="login">
            <img src="../assets/login.png" alt="" />
          </a>
          <a class="download">
            <img src="../assets/openApp.png" alt="" />
          </a>
        </div>
      </div>
      <div class="bottom">
        <div class="tab">
          <ul>
            <li><a href="" class="current">首页</a></li>
            <li><a href="">首页</a></li>
            <li><a href="">首页</a></li>
            <li><a href="">首页</a></li>
            <li><a href="">首页</a></li>
          </ul>
        </div>
        <div class="more">
          <a href="">
            <i class="iconfont icon-xiangxia"></i>
          </a>
        </div>
      </div>
    </header>
    <!-- 视频 -->
    <!-- 视频取域布局 -->
    <section class="video-content">
      <!-- 一份视频，共计有5个菜单，应该有5份视频的div -->
      <div class="video-list">
        <a href="" v-for="(index, key) in 10" :key="key">
          <div class="pic">
            <img src="" alt="" />
            <div class="count">
              <span>
                <i class="iconfont icon-bofangshu"></i>
                132万
              </span>
              <span>
                <i class="iconfont icon-danmushu"></i>
                2.4万
              </span>
            </div>
          </div>
          <!-- 溢出省略号 -->
          <div class="txt ellipses-2">
            文字文字文字文字文字文字文字文字文字文字文字文字字文字文字文字文字
          </div>
        </a>
        <a href="">2</a>
      </div>
    </section>
    <!-- 底部区域 -->
    <div class="home-float-openapp">
      <i class="iconfont icon-Navbar-logo"></i>
      <span>打开App，看你感兴趣的视频</span>
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

<style scoped lang="less">
@import url("../assets/less/bilibili.less");
</style>
