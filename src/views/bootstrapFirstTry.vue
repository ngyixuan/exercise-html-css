<template>
  <div class="container">
    <!-- <div class="col-lg-3 col-md-6 col-sm-12">1</div>
    <div class="col-lg-3 col-md-6 col-sm-12">1</div>
    <div class="col-lg-3 col-md-6 col-sm-12">1</div>
    <div class="col-lg-3 col-md-6 col-sm-12">1</div>
    <div class="col-lg-3 col-md-6 col-sm-12">1</div> -->
    <!-- <div>
      <table class="table table-hover table-bordered table-striped">
        <tbody>
          <tr>
            <th>数字1</th>
            <th>数字2</th>
            <th>数字3</th>
          </tr>
          <tr>
            <td class="active">数字1</td>
            <td>数字2</td>
            <td>数字3</td>
          </tr>
          <tr>
            <td>数字1</td>
            <td>数字2</td>
            <td>数字3</td>
          </tr>
          <tr>
            <td>数字1</td>
            <td>数字2</td>
            <td>数字3</td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <div class="dropdown">
      <button
        id="dLabel"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown trigger
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dLabel">
        <li>1123</li>
      </ul>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-default"
        data-container="body"
        data-toggle="popover"
        data-placement="top"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      >
        Popover on 顶部
      </button>
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
.container {
  div {
    // width: 100%;
    // height: 50px;
    // background-color: pink;
  }
}
</style>
