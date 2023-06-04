<script>
import Login from "@/components/Login.vue";

export default {
  components: {
    Login
  },
  data() {
    return {
      userInfo:{
        studentID:"",
        password:""
      }
    }
  },
  methods: {
    getInfo(params) {
      this.userInfo.studentID = params.studentID;
      this.userInfo.password = params.password;
      this.saveInfo(this.userInfo);
    },
    saveInfo(userInfo){
      const stringify = JSON.stringify(userInfo);
      // 存
      sessionStorage.setItem('obj', stringify);
      // 查
      console.log(sessionStorage.getItem('obj'));
    }
  }
}
</script>

<template>
  <Login @callOutside="getInfo"/>
</template>

<style lang="scss" scoped>
</style>