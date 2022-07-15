<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter message for <span class="name teal-text ">{{this.name }}</span> ) :</label>
            <input type="text" name="new-message"  v-bind:placeholder='name'  v-model="newMessage">
        </form>

    </div>
</template>

<script>
export default {
    name:'NewMessage',
    props:['name'],
    data(){
        return {
            newMessage:null
        }
    },
    methods:{
        addMessage(){
            console.log(this.newMessage,this.name,Date.now())
        }
    }

}
</script>

<style scoped>
.name{
    font-size: 20px;
    padding: 0 6px;
}

</style>