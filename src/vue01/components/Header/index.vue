<template>
  <div class="header">
    <div class="hd-container clearfix">
      <Logo />
      <Nav :nav-list="navList" />
      <Search />
      <UserBox />
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
import Logo from './Logo/index.vue';
import Nav from './Nav/index.vue';
import UserBox from './UserBox/index.vue';
const navList = reactive([
  {
    id: 1,
    navLink: '#',
    navTitle: '首页'
  },
  {
    id: 2,
    navLink: '#',
    navTitle: '关于我们'
  },
  {
    id: 3,
    navLink: '#',
    navTitle: '产品中心'
  },
  {
    id: 4,
    navLink: '#',
    navTitle: '新闻中心'
  },
  {
    id: 4,
    navLink: '#',
    navTitle: '联系我们'
  },
]);
</script>


<style lang="scss" scoped>
.header {
  height: 50px;
  min-width: 1400px;
  background-color: #ccc;
}

.hd-container {
  width: 1200px;
  margin: 0 auto;
}
</style>