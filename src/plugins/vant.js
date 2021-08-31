// 按需全局引入 vant组件
import Vue from 'vue'
import {  Grid, GridItem,Button, List, Cell, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Toast, Icon, NavBar, Swipe, SwipeItem , DatetimePicker,Overlay,ShareSheet,Popup, Area ,Tab, Tabs, Calendar,Dialog } from 'vant'
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
Vue.use(DatetimePicker);
Vue.use(Overlay);
Vue.use(ShareSheet);
Vue.use(Popup);
Vue.use(Area);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Calendar);
Vue.use(Dialog);