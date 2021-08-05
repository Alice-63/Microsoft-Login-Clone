const app= new Vue({
    el:"#app",
    data:{
        step:1
    },
    methods:
    {
        next(){
            app.step++
        }
    }
})