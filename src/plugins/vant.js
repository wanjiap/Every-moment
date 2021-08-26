// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Toast ,Icon } from 'vant'
Vue.use(Button)
Vue.use(Toast);
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Icon)