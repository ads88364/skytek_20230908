import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios'

// 把所有function都寫在useCounterStore
export const useCounterStore = defineStore('counter', () => {
  // 暫存API資料
  const movieData2 = ref([])
  
  // 一次抓多筆
  const searchomdbApi2 = async (input) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=14e57704&s=${input}`);
  movieData2.value = res.data.Search
  };
  
  // 加入收藏
  const movieCart = ref([])
  const addToCart = (item) => {
    movieCart.value.push(item);
    console.log(total.value)
  }
  
  // 移除收藏
  const removeFromCart = (item) => {
    //indexOf尋找是否有符合的元素
    const index = movieCart.value.indexOf(item);
    //回傳 -1，表示找不到
    if(index !== -1) {
      movieCart.value.splice(index,1);
    }
  }
  
  // 計算購物車數量
  const total =  computed(() => movieCart.value.length)


  
  // 有製作的功能都要return出去
  return { movieData2, searchomdbApi2, addToCart, movieCart, removeFromCart, total };
});
