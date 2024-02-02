import { defineStore } from "pinia";


export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            { id: 1, title: "Buy Some Milk", isFav: false },
            { id: 2, title: "Play Football", isFav: true }
        ],

    }),

    getters: {
        favs: state => state.tasks.filter(t => t.isFav),
        // favs() {
        //     return this.tasks.filter(t => t.isFav)
        // },
        favCount: state => state.tasks.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0),

        // favCount() {
        //     return this.tasks.reduce((p, c) => {
        //         return c.isFav ? p + 1 : p
        //     }, 0)
        // },

        totalCount: state => state.tasks.length

        // totalCount: (state) => {
        //     return state.tasks.length
        // }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        },
    }
})