import '@/plugins/compositionApi';
import { reactive } from '@vue/composition-api';
import { Profile } from '@/store/profileModel';
import { update } from '@/store/sharedUser';

export const profileMockData: Profile = {
  userId: 'ryt-okamoto',
  userName: 'Ryota OKamoto',
  nickname: 'Ryota',
  themeColor: '#4caf50',
  hasAvatar: false,
  mailAddress: 'ryt.4.bus@gmail.com',
};

export const profileStore = reactive({ profile: null as Profile | null });

/**
 * ユーザー名更新
 * updateUserName
 *
 * @param userName ユーザー名
 * @return なし
 */
export const updateUserName = (userName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.userName = userName;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

/**
 * ニックネーム更新
 * updateNickname
 *
 * @param nickname ニックネーム
 * @return なし
 */
export const updateNickname = (nickname: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.nickname = nickname;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

/**
 * テーマカラー更新
 * updateThemeColor
 *
 * @param themeColor テーマカラー
 * @return なし
 */
export const updateThemeColor = (themeColor: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.themeColor = themeColor;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};
