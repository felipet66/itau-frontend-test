/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Home.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Presentation from "views/Presentation";
import RoboVip from "views/RoboVip";
import MyLinks from "views/MyLinks";
import Mentoria from "views/Mentoria";
import Login from "views/Login";
import Register from "views/Register";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "/auth",
    redirect: true
  },
  {
    path: "/register/:role",
    name: "Register",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Register,
    layout: "/auth",
    redirect: true
  },
  {
    path: "/presentation",
    name: "Apresentação",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Presentation,
    layout: "/auth",
    redirect: true
  },
  {
    path: "/my-links",
    name: "Meus Links",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: MyLinks,
    layout: "/auth",
    redirect: true
  },
  {
    path: "/mentoria",
    name: "Mentoria",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Mentoria,
    layout: "/auth",
    redirect: true
  },
  {
    path: "/bot-teleco-vip",
    name: "Robo VIP",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: RoboVip,
    layout: "/auth",
    redirect: true
  }
];
export default routes;
