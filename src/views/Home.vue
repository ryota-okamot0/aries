<!-- template -->
<template>
  <div>
    <p>ホーム画面</p>
    <p><router-link to="sign-in">サインイン</router-link></p>
    <p><button @click="calendar">カレンダー</button></p>
    <p><button @click="profile">プロフィール</button></p>
    <p><button @click="share">共有</button></p>
  </div>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
  private calendar() {
    this.$router.push({
      name: "calendar",
      params: { type: { hoge: 123, fuga: "xyz" } } as {}
    });
  }
  private profile() {
    this.$router.push(
      "profile",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    );
  }
  private share() {
    this.$router.push(
      "share",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    );
  }
}
</script>
