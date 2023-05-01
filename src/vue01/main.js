// import './css/global.css';
// const Logo = {
//   template: `
//     <div class="logo">logo</div>
//   `
// }

// const NavItem = {
//   props: ['navLink', 'navTitle'],
//   template: `
//     <li class="nav-item">
//       <a :href="navLink">{{ navTitle }}</a>
//     </li>
//   `
// }

// const Nav = {
//   props: ['navList'],
//   components: {
//     NavItem
//   },
//   template: `
//     <div class="nav">
//       <nav-item
//         v-for="nav of navList"
//         :key="nav.id"
//         :nav-link="nav.navLink"
//         :nav-title="nav.navTitle"
//       ></nav-item>
//     </div>
//   `
// }

// const Search = {
//   template: `
//     <div class="search">
//       <input type="text" placeholder="请输入关键字" />
//       <button class="suspended-rollup">搜索</button>
//     </div>
//   `
// }

// const UserBox = {
//   template: `
//     <div class="user-box">
//       <div class="btn-box">
//         <button class="suspended-rollup">登录</button>
//         <button class="suspended-rollup">注册</button>
//       </div>
//     </div>
//   `
// }

/**
 * 将组件代码导入到 main.js 中
 */
// import Logo from './components/Header/Logo/index.js';
// import Nav from './components/Header/Nav/index.js';
// import Search from './components/Header/Search/index.js';
// import UserBox from './components/Header/UserBox/index.js';

// const Header = {
//   components: {
//     Logo,
//     Nav,
//     Search,
//     UserBox
//   },
//   data() {
//     return{
//       navList: [
//         {
//           id: 1,
//           navLink: '#',
//           navTitle: '首页'
//         },
//         {
//           id: 2,
//           navLink: '#',
//           navTitle: '关于我们'
//         },
//         {
//           id: 3,
//           navLink: '#',
//           navTitle: '产品中心'
//         },
//         {
//           id: 4,
//           navLink: '#',
//           navTitle: '新闻中心'
//         },
//         {
//           id: 4,
//           navLink: '#',
//           navTitle: '联系我们'
//         },
//       ]
//     }
//   },
//   template: `
//     <div class="header">
//       <div class="hd-container clearfix">
//         <Logo />
//         <Nav :nav-list="navList"/>
//         <Search />
//         <UserBox />
//       </div>
//     </div>
//   `
// }


/* const App = {
  template: `
    <div class="header">
      <div class="hd-container clearfix">
        <div class="logo">logo</div>
        <div class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#">首页</a>
            </li>
            <li class="nav-item">
              <a href="#">关于我们</a>
            </li>
            <li class="nav-item">
              <a href="#">产品中心</a>
            </li>
            <li class="nav-item">
              <a href="#">新闻中心</a>
            </li>
            <li class="nav-item">
              <a href="#">联系我们</a>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入关键字" />
          <button class="suspended-rollup">搜索</button>
        </div>
        <div class="user-box">
          <div class="btn-box">
            <button class="suspended-rollup">登录</button>
            <button class="suspended-rollup">注册</button>
          </div>
        </div>
      </div>
    </div>
  `
} */
import { createApp } from 'vue';
import './css/variable.scss';
import Header from './components/Header';
import { registerComponent } from './plugins';
const app = createApp(Header);
registerComponent(app);
app.mount('#app')