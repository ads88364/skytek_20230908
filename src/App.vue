<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
// 嘗試做一個連結把顯示區域外包
// import movie from '@/components/movie.vue';

const enter = ref('')
const enter2 = ref('')
const movieData = ref({})
const movieData2 = ref([])
const show = ref(false)
const show2 = ref(true)
const show3 = ref(false)

  
// 一次抓一筆
const searchomdbApi = async () => {
  // 我想做一個當input框沒有輸入值的時候 要跳出查無資料
    const res = await axios.get(`https://www.omdbapi.com/?apikey=8399b8a2&t=${enter.value}`);
    movieData.value = res.data
    // console.log(A.value);
};

const searchbtn = () => {
  show.value = true
  searchomdbApi()
}

// 一次抓多筆
const searchomdbApi2 = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=8399b8a2&s=${enter2.value}`);
  console.log(res)
  movieData2.value = res.data.Search
};

const searchbtn2 = () => {
  searchomdbApi2()
  // console.log(movieData2.value)
} 

// 單筆多筆切換開關
const change = () => {
  show2.value = !show2.value
  show3.value = !show3.value
}

</script>

<template>
 
    <div class="F">
   <button @click="change">單筆&多筆切換</button>
  </div>
  <div class="E">
    <div class="A" v-show = "show2">
    <div>
      <h2>單筆電影查詢</h2>
      <input v-model="enter">
      <button @click="searchbtn">查詢</button>
    </div>
    <div class="B">
      <p v-show = "show">電影名稱:{{movieData.Title}}</p>
      <p v-show = "show">
        上映時間:{{movieData.Released || movieData.Year}}
      </p>
      <img :src="movieData.Poster" :alt="movieData.Poster">
    </div>
  </div>
  <div class="C" v-show = "show3">
    <div>
      <h2>多筆電影查詢</h2>
      <input v-model="enter2">
      <button @click="searchbtn2">查詢</button>
    </div>
    <div class="D" 
      v-for = "item in movieData2" :key="item.imdbID">
      <p>電影名稱:{{item.Title}}</p>
      <p>上映時間:{{item.Year}}</p>
      <img :src="item.Poster" :alt="item.Poster">
    </div>
  </div>
  </div>
 
  
  
</template>
<style>
  .E {
    display: flex;
    flex-direction: column
  }
  .A {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid black */
  }
  .B {
    margin-top : 10px  
  }
  
  .C {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid black */
  }
  .D {
    margin-top : 10px  
  }
  .F {
    display : flex;
    align-items : center;
    justify-content: center;
    margin-bottom : 20px;
    /* border: 1px solid black */
  }
</style>