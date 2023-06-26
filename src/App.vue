<!-- template -->
<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterComponent from "@/components/Footer.vue";

@Component({
  components: {
    Footer: FooterComponent
  }
})
export default class AppComponent extends Vue {}
</script>
