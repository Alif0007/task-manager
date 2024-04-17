<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';
const taskStore = useTaskStore()
const newTask = ref('')

function add(){
    if(!newTask.value) return;
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 1000)
        })
    
    newTask.value = ''
}

</script>

<template>

    <div class="flex justify-center mb-12 ">
        <input class="pl-3 h-12 w-96 text-lg outline-0" 
        type="text"
        placeholder="Write your new task"
        v-model="newTask"
        >
        <button @click="add" class="font-bold bg-green-200 py-1 px-6">ADD</button>
    </div>
</template>


<style>
</style>