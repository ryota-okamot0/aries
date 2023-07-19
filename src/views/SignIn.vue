<!-- template -->
<template>
  <v-row justify="center">
    <v-col cols="12" md="6" class="text-line" align="center">
      <p class="display-1 py-12">Sign In To Aries.</p>
      <div>
        <v-btn
          width="300"
          large
          color="#1DA1F2"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS1
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#DD2A7B"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS2
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#3B5998"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS3
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { profileStore, profileMockData } from '@/store/profile';
import constant from '@/consts/const';

@Component
export default class SignInComponent extends Vue {
  /**
   * サインイン
   *
   * @param なし
   * @return なし
   */
  private signIn() {
    profileStore.profile = profileMockData;
    this.$router.push(constant.DIR_HOME);
  }
}
</script>
