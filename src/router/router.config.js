/**
 * 基础路由
 * @type { *[] }
 */
/* taber路由文件 */
import Taber from './tabers'
/* 我的页面子级页面 */
import My_son from './My_son'
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
    /*   {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }, */
      ...Taber
    ]
  },
  ...My_son
]
