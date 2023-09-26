<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
// 引入useCounterStore 
import {useCounterStore} from '@/stores/counter.ts'

// 查詢按鈕宣告
const enter2 = ref('')
  
// counter.ts 引用 useCounterStore功能
const counterTs = useCounterStore()

// 點擊查詢
const searchbtn2 = () => {
  counterTs.searchomdbApi2(enter2.value)
  }

// 點擊加入收藏
const addCart = (item) => {
  counterTs.addToCart(item)
}
 
</script>

<template>
  <button><router-link to="/cart">收藏清單{{counterTs.total}}</router-link></button>
<div class="E">
  <div class="C">
    <div>
      <h2>多筆電影查詢</h2>
      <input v-model="enter2">
      <button @click="searchbtn2">查詢</button>
    </div>
    <div class="D" 
      v-for = "item in counterTs.movieData2" :key="item.imdbID">
      <button @click="addCart(item)">加入收藏</button>
      <p>電影名稱:{{item.Title}}</p>
      <p>上映時間:{{item.Year}}</p>
      <img :src="item.Poster" :alt="item.Poster">
    </div>
  </div>
</div>
</template>

<style scoped></style>
