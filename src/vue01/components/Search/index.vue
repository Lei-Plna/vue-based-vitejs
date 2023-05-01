<template>
  <div class="search">
    <input type="text" placeholder="请输入关键字" />
    <button class="suspended-rollup">搜索</button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 300px;
  height: 50px;
  line-height: 50px;
  float: left;

  input {
    width: 200px;
    height: 30px;
    padding-left: 10px;
    margin-right: 5px;
    border: 2px solid transparent;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    box-sizing: border-box;
  }

  button {
    width: 80px;
    height: 30px;
    color: #000;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
  }
}
</style>