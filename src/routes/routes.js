import LoginPage from '../components/page/LoginPage';
import HomePage from '../components/page/HomePage';
import UserMenu from '../components/modules/UserMenu';
import {NavBar} from '../components/layout/master';

const routes = [
  {
    path: 'login',
    title: 'Trang chủ',
    navBar: NavBar,
    component: LoginPage,
    hideNavBar: true
  },{
    path: 'about_us',
    title: 'Về chúng tôi',
    navBar: NavBar,
    component: HomePage
  },{
    path: 'menu',
    title: 'MENU',
    navBar: NavBar,
    component: UserMenu
  }
]


export default routes