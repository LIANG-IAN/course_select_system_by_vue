<script>
export default {
  data() {
    return {
      studentID: null,
      password: null
    }
  },
computed: {
  isInputValid() {
    return this.studentID && this.password;
  },
},
  methods: {
    push() {
      this.$emit("callOutside", {
        studentID: this.studentID,
        password: this.password
      });
    },

  }
}
</script>

<template>
  <div class="login">
    <label for="studentID">學號</label>
    <input type="text" id="studentID" autocomplete="none" v-model="studentID">
    <br>
    <label for="password">密碼</label>
    <input type="password" id="password" autocomplete="none" v-model="password">
    <br>
    <RouterLink :to="{ name: 'home' }">
      <button type="button" @click="push" :disabled="!isInputValid" >登入</button>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: fit-content;
  border: 1px solid black;
  padding: 2rem;

  input {
    margin-bottom: 2rem;
    margin-left: 1rem;
  }

  button {
    display: block;
    margin: 0 auto;
  }
}
</style>