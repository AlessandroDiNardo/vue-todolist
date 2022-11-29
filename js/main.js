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
                this.tasks.unshift({text:this.newTask});
                this.error = false;
            }
            this.newTask = '';
        },
        
        removeTask(index){
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app')