import { createRouter, createWebHistory } from 'vue-router';

// 設定要渲染的頁面 有HomeView&cart兩個
import HomeView from '@/views/HomeView.vue';
import cart from '@/views/cart.vue'


// 設定路徑 '/' '/cart' 分別代表兩個頁面
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      // 首頁
      { path: '/', name: 'home', component: HomeView },
      // 收藏清單頁面
      { path: '/cart', name: 'cart', component: cart }],
    });

export default router;
