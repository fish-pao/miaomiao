import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mymineRouter from './mymine'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    cinemaRouter,
    mymineRouter,
    {
      path : '/',
      redirect : '/movie'
    }
  ]
})


