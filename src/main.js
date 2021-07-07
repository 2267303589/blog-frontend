// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 加载全局样式
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/css/index.css'
import './assets/css/styles.css'

import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data(){
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.use(ElementUI)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
