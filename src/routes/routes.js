import LoginPage from '../components/page/LoginPage';
import {HomePage} from '../components/page/HomePage';
import {NavBar} from '../components/layout/master';

const routes = [
  {
    path: 'home',
    title: 'Trang chủ',
    navBar: NavBar,
    component: LoginPage,
    hideNavBar: true
  },{
    path: 'about_us',
    title: 'Về chúng tôi',
    navBar: NavBar,
    component: HomePage
  }
]


export default routes