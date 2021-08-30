export default [
    {
        path: '/tea_deatile',
        name: 'tea_deatile',
        component: () => import('@/views/page_son/tea_deatile'),
        meta: { title: '老师详情', keepAlive: false }
    },
    {
        path: '/Course_detile',
        name: 'Course_detile',
        component: () => import('@/views/page_son/Course_detile'),
        meta: { title: '课程详情', keepAlive: false }
    },
]