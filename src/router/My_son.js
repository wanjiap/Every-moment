export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/every_time_taber/login'),
        meta: { title: '登录', keepAlive: false }
    },
    {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/my_son/personals/personal'),
        meta: { title: '个人中心', keepAlive: false }
    },
    {
        path: '/nickname',
        name: 'nickname',
        component: () => import('@/views/my_son/personals/nickname'),
        meta: { title: '昵称设置', keepAlive: false }
    },
    {
        path: '/sex',
        name: 'sex',
        component: () => import('@/views/my_son/personals/sex'),
        meta: { title: '性别设置', keepAlive: false }
    },
    {
        path: '/Options',
        nema: 'Options',
        component: () => import('@/views/my_son/Options/Options'),
        meta: { title: '设置', keepAlive: false }
    },
    {
        path: '/passerword',
        nema: 'passerword',
        component: () => import('@/views/my_son/Options/passerword'),
        meta: { title: '设置密码', keepAlive: false }
    }
]