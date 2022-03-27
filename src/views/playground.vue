<template>
  <div class="container">
    <!-- 主体内容 -->
    <div class="main">
      <!-- banner -->
      <div class="banner">
        <ul>
          <li></li>
        </ul>
      </div>

      <!-- 活动标题 -->
      <div class="title">
        <h4>乐园活动</h4>
      </div>

      <!-- 活动内容 -->
      <section class="item">
        <div class="pic">
          <a>
            <img />
          </a>

          <!-- 收藏图标 -->
          <i class="iconfont icon-shoucang"></i>

          <!-- 进行中 -->
          <div class="active">进行中</div>
        </div>
        <div class="txt">
          <div class="top">
            <h5>疯狂的红包 不一样的撕名牌 大型家庭亲子户外活动</h5>
            <p>免费</p>
          </div>
          <div class="bottom">
            <p>
              <i class="iconfont icon-flag"></i>
              <span>200</span>人已报名
            </p>
            <p>
              <i class="iconfont icon-flag"></i>
              <span>本周六</span>开始
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- 主体内容结束 -->

    <!-- 底部工具栏 -->
    <footer>
      <a href="" class="current">
        <i class="iconfont icon-shouye1"></i>
        <p>首页</p>
      </a>
      <a href="">
        <i class="iconfont icon-wode"></i>
        <p>首页</p>
      </a>
      <a href="">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </a>
    </footer>
    <!-- 底部工具栏 -->
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
@import url(../assets/less/index.less);
</style>
