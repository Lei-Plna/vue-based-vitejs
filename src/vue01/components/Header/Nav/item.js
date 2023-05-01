export default {
  props: ['navLink', 'navTitle'],
  template: `
    <li class="nav-item">
      <a :href="navLink">{{ navTitle }}</a>
    </li>
  `
}