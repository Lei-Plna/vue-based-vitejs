<template>
  <li class="nav-item">
    <a :href="props.navLink">
      {{ props.navTitle }}
    </a>
  </li>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  navTitle: String,
  navLink: String,
});
</script>


<style scoped lang="scss">
.nav-item {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  float: left;

  &:hover {
    background-color: #999;
  }

  &:hover a {
    color: #fff;
  }
}
</style>