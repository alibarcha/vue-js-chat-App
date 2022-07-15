<template>
  <div class="wellcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Wellcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wellcome",
  data() {
    return {
      name: null,
      feedback:null,
    };
  },
  methods: {
    enterChat() {
      if(this.name){
        this.$router.push({name:'chat',params:{name:this.name}})
      }
      else{
        this.feedback="You must enter name to join"
      }

      this.name = "";
    },
  },
};
</script>

<style scoped>
.wellcome {
  max-width: 400px;
  margin-top: 100px;
}
.wellcome h2 {
  font-size: 3em;
}
.wellcome button {
  margin: 30px auto;
}
</style>