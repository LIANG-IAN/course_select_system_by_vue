<script>
import {RouterLink} from "vue-router"

export default {
  components: {},
  data() {
    return {
      session: false,
    }
  }, created() {
    this.checkSession();
  },
  methods: {
    checkSession() {
      const storedSession = sessionStorage.getItem("obj");
      this.session = storedSession !== null;
    },
    signOut(){
      sessionStorage.removeItem("obj");
      this.checkSession();
    }
  }

}
</script>

<template>

  <header>
    <img src="../../public/logo.png" alt="">
    <div class="nav">
      <RouterLink class="item" to="/" @click="signOut">登入</RouterLink>
      <RouterLink class="item" to="/home" v-if="session">首頁</RouterLink>
      <RouterLink class="item" to="/course-search&selection" v-if="session">查詢/選修課程</RouterLink>
      <RouterLink class="item" to="/drop-course" v-if="session">退選課程</RouterLink>
    </div>
  </header>

</template>

<style lang="scss" scoped>
header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  width: 100%;
  padding: 1rem 5rem;
  background-color: #d1fbf9;

  img {
    width: 100px;
    height: 100px;
  }

  .nav {

    .item {
      color: blue;
      padding: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #bffa51;
        box-shadow: 3px 3px 3px grey;
      }
    }
  }
}
</style>