<template>
  <div class="user-box">
    <div class="btn-box">
      <button class="suspended-rollup">登录</button>
      <button class="suspended-rollup">注册</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-box {
  width: 200px;
  height: 50px;
  float: left;
}

.btn-box {
  width: 100%;
  height: 100%;
  line-height: 50px;

  button {
    width: 50px;
    height: 30px;
    margin-top: 10px;
    float: left;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }

  button:first-child {
    margin-right: 10px;
  }
}
</style>