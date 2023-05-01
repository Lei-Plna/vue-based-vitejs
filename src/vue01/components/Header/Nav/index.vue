<template>
  <div class="nav">
    <template v-for="nav of props.navList" :key="nav.id">
      <nav-item :nav-link="nav.navLink" :nav-title="nav.navTitle"></nav-item>
    </template>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';
import NavItem from './item.vue';
const props = defineProps({
  navList: {
    type: Array,
    required: true
  }
});
</script>


<style scoped lang="scss">
.nav {
  float: left;
  margin-right: 20px;
}
</style>