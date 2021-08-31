const api = {
  /* 登录 */
  Login: '/app/login',
  /* 获取验证码 */
  Phone:'/app/smsCode' ,
  /* 个人信息 */
  UserInfo: '/app/userInfo',
  /* banner图 */
  Banner:'/app/banner',
  /* 导航栏 */
  Nav:'/app/nav',
  /* 首页列表 */
  PageList:'/app/recommend/appIndex',
  /* 设置密码 */
  Password:'/app/password',
  /*  */
  User:'/app/user',
  /* 课程详情 */
  Basis:'/app/courseInfo/basis_id=',
  /* 老师详情 */
  Teacher:'/app/teacher/',
  /* 主讲课程 */
  Teachetlist:'/app/teacher/mainCourse',
  /* 主讲课程详情 */
  Distr:'/app/distribute/item/bind/',
  /* 好课推荐 */
  Hao:'/integral/shop/index',
  /* 是否签到 */
  Wei:'/app/user/integral/isSign',
  /* 未知 */
  Sig:'/app/user/integral/sign',
  /* 我的nav积分 */
  Mine:'app/getUCenterInfo'
}

export default api
