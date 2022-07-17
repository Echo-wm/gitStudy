import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
import Layout from '@/components/HelloWorld.vue'

// 匹配路由规则
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'home',
        component:Layout
    }，
    {
        path:'/person',
        name:'person',
        component:Layout
    }
]

// 创建路由
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
