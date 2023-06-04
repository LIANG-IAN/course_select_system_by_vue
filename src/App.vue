<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";

export default {
  components:{
    HeaderView,
    FooterView
  }
}
</script>

<template>
  <HeaderView/>
    <div class="wrapper">
    <RouterView/>
    </div>
  <FooterView/>
</template>

<style scoped>
.wrapper{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 65%;
  justify-content: center;
  align-items: center;
}
</style>
