<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";

export default {
  components:{
    HeaderView,
    FooterView
  },
  data(){
    return{
      path:"",
      isLogin:true
    }
  },
  mounted() {
      // this.path = this.$route.path;
      // if (this.path === "/"){
      //   this.isLogin= false;
      // }
  }
}

</script>

<template>
  <HeaderView v-if="isLogin"/>
    <div class="wrapper">
    <RouterView/>
    </div>
  <FooterView v-if="isLogin"/>
</template>

<style scoped>
.wrapper{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
}

</style>
