<template>
  <div class="container">
    <div class="box">
      <div>
        <h5>配送方式</h5>
        <p>顺丰快递</p>
      </div>
      <div>
        <h5>下单备注</h5>
        <p>尽快发货</p>
      </div>
      <div>
        <h5>配送方式</h5>
        <p>顺丰快递</p>
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
.box {
  /* align-items: stretch; */
  /* align-items: center; */
  width: 500px;
  margin: auto;
  border: 1px solid black;
}
.box div {
  display: flex;
}

/* .box div:nth-child(1) {
  background: skyblue;
  width: 50px;
}

.box div:nth-child(2) {
  background: greenyellow;
  flex: 3;
}

.box div:nth-child(3) {
  background: pink;
  flex: 1;
} */
</style>
