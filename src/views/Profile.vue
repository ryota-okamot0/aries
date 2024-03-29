<!-- template -->
<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4" class="text-center">
      <p class="display-1 py-12">プロフィール</p>
      <v-row>
        <v-col cols="12" md="4">
          <!-- v-avatar：アバターを表示する -->
          <v-avatar :color="profile.themeColor" size="72">
            <span class="white--text body-2" v-text="profile.nickname" />
          </v-avatar>
        </v-col>
        <v-col>
          <!-- v-file-input：画像ファイル選択のUI -->
          <v-file-input
            accept="image/png, image/jpeg image/bmp"
            placeholder="画像を選択してください"
            prepend-icon="photo_camera"
            label="アバター"
            @change="saveFileContent"
          />
        </v-col>
      </v-row>
      <label class="v-label theme--light">テーマカラー*</label>
      <!-- v-color-picker：カラー選択のUI -->
      <v-color-picker
        v-model="newThemeColor"
        class="mx-auto mb-4 mt-2"
        hide-canvas
        show-swatches
        swatches-max-height="120px"
      />
      <v-btn small rounded color="primary" @click="saveThemeColor">
        テーマカラーを決定する
      </v-btn>
      <!-- v-text-field：テキストフィールドのUI -->
      <v-text-field
        v-model="profile.userName"
        readonly
        label="ユーザー名*"
        append-outer-icon="edit"
        class="mt-4"
        @click:append-outer.stop="editUserName"
      />
      <!-- v-dialog：ダイアログ表示 -->
      <v-dialog
        v-model="isOpenEditUserNameDialog"
        max-width="600"
        open-on-hover
      >
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field v-model="newUserName" label="ユーザー名*" />
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="closeEditUserNameDialog">
              キャンセル
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveUserName">
              保存する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-text-field
        v-model="profile.nickname"
        readonly
        label="ニックネーム*"
        append-outer-icon="edit"
        class="mt-4"
        @click:append-outer.stop="editNickname"
      />
      <v-dialog
        v-model="isOpenEditNicknameDialog"
        max-width="600"
        open-on-hover
      >
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field v-model="newNickname" label="ニックネーム*" />
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="closeEditNicknameDialog">
              キャンセル
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveNickname">
              保存する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-text-field
        v-model="profile.mailAddress"
        readonly
        label="メールアドレス"
      />
      <small class="float-left">*必須フィールドを示します</small>
    </v-col>
  </v-row>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  profileStore,
  updateThemeColor,
  updateUserName,
  updateNickname,
} from '@/store/profile';

@Component
export default class ProfileComponent extends Vue {
  /**
   * プロフィール
   */
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private profile = profileStore.profile!;

  /**
   * ユーザー名
   */
  private newUserName: string | null = null;

  /**
   * ニックネーム
   */
  private newNickname: string | null = null;

  /**
   * テーマカラー
   */
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private newThemeColor: string = profileStore.profile!.themeColor;

  /**
   * ユーザー名編集ダイアログ表示判定フラグ
   */
  private isOpenEditUserNameDialog = false;

  /**
   * ニックネーム編集ダイアログ表示判定フラグ
   */
  private isOpenEditNicknameDialog = false;

  /**
   * アバター保存
   * saveFileContent
   *
   * @param file アバター画像ファイル
   * @return なし
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  private saveFileContent(file: File) {}

  /**
   * テーマカラー保存
   * saveThemeColor
   *
   * @param なし
   * @return なし
   */
  private saveThemeColor() {
    updateThemeColor(this.newThemeColor);
  }

  /**
   * ユーザー名編集（開始）
   * editUserName
   *
   * @param なし
   * @return なし
   */
  private editUserName() {
    this.newUserName = this.profile.userName;
    this.isOpenEditUserNameDialog = true;
  }

  /**
   * ユーザー名編集（終了）
   * closeEditUserNameDialog
   *
   * @param なし
   * @return なし
   */
  private closeEditUserNameDialog() {
    this.isOpenEditUserNameDialog = false;
  }

  /**
   * ユーザー名保存
   * saveUserName
   *
   * @param なし
   * @return なし
   */
  private saveUserName() {
    if (this.newUserName) {
      updateUserName(this.newUserName);
    }
    this.isOpenEditUserNameDialog = false;
  }

  /**
   * ニックネーム編集（開始）
   * editNickname
   *
   * @param なし
   * @return なし
   */
  private editNickname() {
    this.newNickname = this.profile.nickname;
    this.isOpenEditNicknameDialog = true;
  }

  /**
   * ニックネーム編集（終了）
   * closeEditNicknameDialog
   *
   * @param なし
   * @return なし
   */
  private closeEditNicknameDialog() {
    this.isOpenEditNicknameDialog = false;
  }

  /**
   * ニックネーム保存
   * saveNickname
   *
   * @param なし
   * @return なし
   */
  private saveNickname() {
    if (this.newNickname) {
      updateNickname(this.newNickname);
    }
    this.isOpenEditNicknameDialog = false;
  }
}
</script>
