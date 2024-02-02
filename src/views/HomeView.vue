<script setup>
import { ref } from "vue";
import { useTaskStore} from "../stores/TaskStore"
import TaskList from "@/components/TaskList.vue"
import TaskForm from "@/components/TaskForm.vue"

const taskStore = useTaskStore()
const filter = ref('all')

</script>

<template>
  <main>
    <div class="bg-gray-100" style="height: 100vh;">
      <h1 class="text-3xl font-bold text-center pt-4 mb-8">Task Manager</h1>

      <div>
        <TaskForm/>
      </div>

      <div class="text-right font-semibold mr-80 mb-6">
        <button @click="filter='all'" class="w-24 mr-3 py-1 border bg-blue-200 hover:bg-blue-300 rounded">All</button>
        <button @click="filter='favs'" class="w-24 py-1 bg-blue-300 hover:bg-blue-400 border rounded">Favourite</button>
      </div>

      <div v-if= "filter=='all'">

        <p class="text-lg text-gray-500 text-center mb-4">You Have {{ taskStore.totalCount }} Tasks Remaining</p>
      <div v-for="task in taskStore.tasks" >
        <TaskList :tasks="task"/>
      </div>
      </div>
      
      <div v-if= "filter=='favs'">
        <p class="text-lg text-gray-500 text-center mb-4">You Have {{ taskStore.favCount }} Favourite Task Remaining</p>
      <div v-for="task in taskStore.favs" >
        <TaskList :tasks="task"/>
      </div>
      </div>
      
    </div>

  </main>
</template>

<style>


</style>
