import NavItem from './item';

export default {
  props: ['navList'],
  components: {
    NavItem
  },
  template: `
    <div class="nav">
      <nav-item
        v-for="nav of navList"
        :key="nav.id"
        :nav-link="nav.navLink"
        :nav-title="nav.navTitle"
      ></nav-item>
    </div>
  `
}