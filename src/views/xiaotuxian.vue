<template>
  <div class="container">
    <div class="xtx-body">
      <div class="wrapper">
        <div class="aside">1</div>
        <div class="main">
          <!-- 用户账户概览 -->
          <div class="overview">
            <div>
              <a href="">
                <i class="iconfont icon-VIP"></i>
                <p>会员中心</p>
              </a>
              <a href="">
                <i class="iconfont icon-VIP"></i>
                <p>会员中心</p>
              </a>
              <a href="">
                <i class="iconfont icon-VIP"></i>
                <p>会员中心</p>
              </a>
            </div>
            <div>
              <a href="">
                <span>6</span>
                <p>优惠劵</p>
              </a>
              <a href="">
                <span>6</span>
                <p>优惠劵</p>
              </a>
              <a href="">
                <span>6</span>
                <p>优惠劵</p>
              </a>
            </div>
          </div>
          <!-- 用户账户概览 -->

          <!-- 订单 -->
          <div class="pannel orders">
            <div class="pannel-title">
              <h4>我的订单</h4>
              <a href="">查看更多></a>
            </div>
            <div class="content">
              <ul>
                <li>
                  <div class="goods">
                    <div class="pic">
                      <a class="goods-pic" href="#"></a>
                    </div>
                    <div class="txt">
                      <h5>
                        大拉夫劳伦T恤男正品短袖 大拉夫劳伦T恤男正品短袖
                        大拉夫劳伦T恤男正品短袖
                      </h5>
                      <p>颜色:白色 尺码：M 数量：1</p>
                    </div>
                  </div>
                  <div class="status">待付款</div>
                  <div class="price common">
                    <p>$99.00</p>
                    <p>(含运费：￥10.00元)</p>
                    <p>在线支付</p>
                  </div>
                  <div class="action common">
                    <a href="">立即付款</a>
                    <a href="">查看详情</a>
                    <a href="">取消订单</a>
                  </div>
                </li>
                <li>2</li>
              </ul>
            </div>
          </div>
          <!-- 订单 -->
        </div>
      </div>
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
a {
  text-decoration: none;
  color: black;
}
li {
  list-style-type: none;
}
.xtx-body {
  padding: 30px 0 85px;
  background-color: #f6f6f6;
}

.xtx-body .wrapper {
  display: flex;
}

/* 侧边栏 */
.xtx-body .aside {
  width: 227px;
  min-height: 500px;
  margin-right: 18px;
  background-color: pink;
}

/* 主体内容 */
.xtx-body .main {
  flex: 1;
  min-height: 500px;
}

.overview {
  display: flex;
  height: 132px;
  padding: 20px 0px;
  background-color: #fff;
  margin-bottom: 10px;
}

.overview div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  text-align: center;
}
.overview div:first-child {
  border-right: 1px solid #f4f4f4;
}

.overview div span {
  font-size: 25px;
  color: #e05e30;
  display: block;
  margin-bottom: 10px;
}
.icon-VIP {
  display: block;
  font-size: 25px;
  margin-bottom: 10px;
}

/* 订单 */
.pannel {
  padding: 28px 20px;
  margin-bottom: 20px;
  background-color: #fff;
}
.pannel .pannel-title {
  display: flex;
  justify-content: space-between;
  height: 45px;
  border-bottom: 1px solid #f4f4f4;
}

.pannel .pannel-title h4 {
  font-size: 22px;
  color: #333;
  font-weight: 400;
}

.pannel .pannel-title a {
  margin-top: 8px;
  font-size: 16px;
  color: #999;
}

.orders li {
  height: 137px;
  /* 往上移动1像素，让border不重叠 */
  margin-top: -1px;
  margin-bottom: 20px;
  border: 1px solid #f4f4f4;
  display: flex;
}
.orders li:last-child {
  margin-bottom: 0px;
}

.orders li .goods {
  display: flex;
  align-items: center;
  padding: 17px 0 14px 12px;
  flex: 1;
  margin-right: 120px;
}
.orders li .goods .pic .goods-pic {
  display: block;
  width: 107px;
  height: 107px;
  background-color: pink;
}

/* 在父级控制溢出的时候要显示省略号 */
/* 弹性盒子的尺寸可以被内容撑开，为了保证不换行加上width：0 */
/* flex：1 是去除图片以后剩下的位置都留给文字*/
.orders li .goods .txt {
  flex: 1;
  width: 0;
}
/* 在子级控制句子长度变成省略号 */
.orders li .goods .txt h5 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.orders li .status {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orders li .price {
  width: 200px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
}

.orders li .action {
  width: 180px;
}

/* 订单内容 */
.orders li .common {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.orders li .action a:first-child {
  width: 100px;
  height: 30px;
  background-color: #39b091;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
}
</style>
