<script setup>
  import { ref, computed } from 'vue'
  // 表單資料
  const lists= ref([{text:'Learn HTML',number:123,done: true}
                   ,{text:'Learn CSS',number:456,done: true}
                   ,{text:'Learn JavaScript',number:798,done: false}
                   ,{text:'Learn Vue',number:101112,done: false}])
  // 單項刪除
  const remove = (list) => {
      lists.value = lists.value.filter((e) => { return e !== list})
    }

  // 新增
  const newlist = ref('') // 可以去除 不必多設定一組 方向:解構
  const addList = () => {
    lists.value.push({text:newlist.value,done:false})
     newlist.value = '';
  }

  // 顯示&隱藏
  const hideCompleted = ref(false)
  const changebutton = () => {
     hideCompleted.value = !hideCompleted.value;
  }

  const filteredTodos = computed(() => {
  return hideCompleted.value ?
    lists.value.filter((list) => !list.done) : lists.value
  })


</script>

<template>
  <div class="A">
    
    <h1>Todo List</h1>
    
    <div class="B">
      <form @submit.prevent="addList">       
        <input v-model="newlist">
        <button>add</button>
      </form>
      
      <ul class="D">
         <li v-for="list in filteredTodos">
           <input type="checkbox" v-model="list.done">
           <span :class="{'text-underline': list.done}">
             {{list.text}}
           </span>
           <button @click="remove(list)">X</button>
         </li>
      </ul>
      
    </div>

    <div class="C">
    　<button @click="changebutton">
       {{ hideCompleted ? 'show all' : 'hide completed' }}
     </button>
    </div>
    
  </div>
  
</template>





<style scoped>
  
  .A{
    left:50%;
    width:500px;
    height:500px;
    display:flex;
    border:1px solid black;
    justify-content: center;
    align-items: center;
    flex-direction: column
  }
  .B{
    margin-top:20px;
  }
  .C{
    margin-top:20px;
  }
  .D{
    margin-top:20px;
  }

  .text-underline {
  text-decoration: line-through;
  }
</style>
