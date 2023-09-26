<script setup lang="ts">
import { ref, onMounted } from 'vue';
// 引入useCounterStore 
import {useCounterStore} from '@/stores/counter.ts'
  
// counter.ts 引用 useCounterStore功能
const counterTs = useCounterStore()

// 從 useCounterStore 引用 removeFromCart移除功能
const del = (item) => {
  counterTs.removeFromCart(item)
}
  
</script>

<template>
  <button><router-link to="/">Home</router-link></button>
    <h2>收藏</h2>
    <ul>
      <li v-for="item in counterTs.movieCart" :key="item.id">
        {{ item.Title }} - {{ item.Year }}
        <button @click ="del(item)">移除</button>
      </li>
    </ul>
</template>