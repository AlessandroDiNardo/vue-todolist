const { createApp } = Vue;

createApp({
    data() {
        return {
            logoImg: './img/todolist.png',
            error: false,
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask(){
            if(this.newTask.length < 5 || this.newTask === '') {
                this.error = true;
            }else{
                this.tasks.unshift({text: this.newTask, done: false});
                this.error = false;
            }
            this.newTask = '';
        },

        removeTask(index){
            this.tasks.splice(index, 1);
        },

        doneTask(index){
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app')