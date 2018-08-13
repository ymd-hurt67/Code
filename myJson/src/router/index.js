import Vue from 'vue'
import Router from 'vue-router'
import Error from '../components/Error.vue'
import Home from '../components/Home.vue'
import ToJson from '../components/ToJson.vue'
import Definition from '../components/Definition.vue'
import Doc from '../components/Doc.vue'
import Assembly from '../components/Assembly.vue'

Vue.use(Router)

const routes = [
  { 
    path: '/',
    component: Home,
    redirect: '/json',
    children: [
      {
        path: '/json',
        name:'Json',
        component: ToJson
      },
      {
        path: '/definition',
        name:'definition',
        component: Definition
      },
      {
        path: '/document',
        name:'document',
        component: Doc
      },
      {
        path: '/assembly',
        name:'assembly',
        component: Assembly
      }
    ]
  },
  {
    path: '*',
    name:'Error',
    component: Error
  }

]

export default new Router({
  routes,
  mode: 'history'
})