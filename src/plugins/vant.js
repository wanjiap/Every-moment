// 按需全局引入 vant组件
import Vue from 'vue'
import {  Grid, GridItem,Button, List, Cell, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Toast, Icon, NavBar, Swipe, SwipeItem } from 'vant'
Vue.use(Button)
Vue.use(Toast);
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);