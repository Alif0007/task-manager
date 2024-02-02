<script setup>
import { useTaskStore } from '@/stores/TaskStore';



const taskStore = useTaskStore()


const props= defineProps(['tasks'])
</script>

<template>
    <div class="flex justify-center">
        <div class="flex w-1/2 mb-4 bg-white text-lg font-bold px-4 py-3 justify-between rounded-xl">
            {{ tasks.title }}
            <div>
                <ion-icon @click="taskStore.toggleFav(tasks.id)" class=" cursor-pointer text-xl mx-2" :class="{active:tasks.isFav}" name="heart"></ion-icon>
                <ion-icon @click="taskStore.deleteTask(tasks.id)" class=" cursor-pointer text-xl mx-2" name="trash"></ion-icon>

            </div>

        </div>
    </div>
</template>

<style>
.active{
    color: red;
}
</style>