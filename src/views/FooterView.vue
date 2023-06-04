<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterView"
})
</script>

<template>
<footer>
<div class="info-area">
  <p>校本部</p>
  <p>高雄市84001大樹區學城路一段1號 TEL:(07)6577711　FAX:(07)6577056</p>
  <p>醫學院區</p>
  <p>高雄市82445燕巢區義大路8號 TEL:(07)6151100　FAX:(07)615515</p>
</div>
</footer>
</template>

<style scoped lang="scss">
footer{
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 15%;
  width: 100%;
  padding: 1rem 5rem;
  background-color: #d1fbf9;

  .info-area{

    p{
      line-height: 1.5;
      margin: 0;
    }
  }
}
</style>