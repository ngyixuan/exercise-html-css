<template>
  <div class="container">
    <div class="box">
      <ul>
        <li class="green"></li>
        <li class="yellow"></li>
        <li class="pink"></li>
        <li class="blue"></li>
        <li class="skyblue"></li>
        <li class="green"></li>
        <li class="yellow"></li>
        <li class="pink"></li>
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
.box {
  width: 600px;
  height: 90px;
  margin: 100px auto;
  border: 1px solid black;
  overflow: hidden;
}
.box ul {
  width: 1600px;
  animation: move 5s linear infinite;
}
.box:hover ul {
  animation-play-state: paused;
}
.box li {
  width: 200px;
  height: 90px;
  float: left;
  list-style-type: none;
}

@keyframes move {
  to {
    transform: translateX(-1000px);
  }
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.pink {
  background-color: pink;
}
.blue {
  background-color: blue;
}
.skyblue {
  background-color: skyblue;
}
</style>
