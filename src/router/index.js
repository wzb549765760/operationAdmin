import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },{
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login'),
    },{
      path:"/index",
      name:"Index",
      component:()=>import('@/view/Index'),
      children:[
        {
          path:"/businessInquiry",
          name:"商户查询",
          component:()=>import('@/components/BusinessInquiry'),
        },{
          path:'/businessInformationMaintenance',
          name:"商户池信息维护",
          component:()=>import('@/components/BusinessInformationMaintenance')
        }
      ]
    }
  ]
});

router.afterEach(route => {
  if(route.path == "/login"){
    router.app.$store.dispatch("removeTarget");
  }else {
    if(route.path !="/index"){
      router.app.$store.dispatch("addTarget",{
        name:route.name,
        url:route.path
      })
    }
  }
});
export default router;

