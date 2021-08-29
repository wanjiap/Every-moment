export default[
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/every_time_taber/home_page'),
        meta: { title: '首页', keepAlive: false }
      } ,
      {
        path: '/course',
        name: 'course',
        component: () => import('@/views/every_time_taber/course'),
        meta: { title: '课程', keepAlive: false }
      } ,
      {
        path: '/advisory',
        name: 'advisory',
        component: () => import('@/views/every_time_taber/advisory'),
        meta: { title: '咨询', keepAlive: false }
      } ,
      {
        path: '/books',
        name: 'books',
        component: () => import('@/views/every_time_taber/books'),
        meta: { title: '图书', keepAlive: false }
      } ,
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/every_time_taber/my'),
        meta: { title: '我的', keepAlive: false },
      } 
]