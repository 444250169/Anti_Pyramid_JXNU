import Vue from 'vue'
import App from './user'

const app = new Vue(App)
app.$mount()
wx.cloud.init({
  traceUser: true
})
