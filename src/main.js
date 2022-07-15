import Vue from 'vue'
import App from './App.vue'


// router
import VueRouter from 'vue-router'
// import pages
import Wellcome from './components/Wellcome'
import Chat from './components/Chat'

Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    name:'wellcome',
    component:Wellcome
  },
  {
    path:'/chat',
    name:'chat',
    component:Chat,
    props:true,
    beforeEnter:(to,from,next)=>{
      if(to.params.name){
        next()
      }else{
        next({name:'wellcome'})
      }

    }
  }
]

const router=new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
