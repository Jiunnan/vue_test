import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherView from '../views/OtherView.vue'
import SettingView from '../views/SettingView.vue'
import TestView from '../views/TestView.vue'
import TestTabView from '../views/TestTabView.vue'
import SlotGameView from '../views/SlotGameView.vue'
import LineLiffSTPTestView from '../views/LineLiffSTPTestView.vue'
import TwoButtonView from '../views/TwoButtonView.vue'
import ScssTestView from '../views/ScssTestView.vue'
import IndexView from '../views/IndexView.vue'
import ScratchGameView from '../views/ScratchGameView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/other/:testValue',
    name: "other",
    component: OtherView
  },
  {
    path: '/gameView',
    name: 'gameView',
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/settingView',
    name: 'settingView',
    component: SettingView
  },
  {
    path: '/testView/:settingValue',
    name: 'testView',
    component: TestView
  },
  {
    path: '/testTab',
    name: 'testTab',
    component: TestTabView
  },
  {
    path: '/slotGame',
    name: 'slotGame',
    component: SlotGameView
  },
  {
    path: '/lineLiffSTPTestView',
    name: 'lineLiffSTPTestView',
    component: LineLiffSTPTestView
  },
  {
    path: '/twoButtonView',
    name: 'twoButtonView',
    component: TwoButtonView
  },
  {
    path: '/scssTestView',
    name: 'scssTestView',
    component: ScssTestView
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView
  },
  {
    path: '/ScratchGameView',
    name: 'ScratchGameView',
    component: ScratchGameView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  //初始設定，如果要接Git Page就要選擇此設定
  // history: createWebHashHistory(), //要讓router路徑可以正確讀取，必須將createWebHistory改為createWebHashHistory，不然點到分頁還是會出現錯誤
  routes
})

export default router
