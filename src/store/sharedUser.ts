import '@/plugins/compositionApi';
import { reactive } from '@vue/composition-api';
import { SharedUser } from '@/store/sharedUserModel';
import { Profile } from '@/store/profileModel';

export const sharedUserMockData: SharedUser[] = [
  {
    userId: 'test-user-1',
    userName: 'namihei',
    nickname: '浪平',
    themeColor: '#4caf50',
    hasAvatar: false,
    display: true,
  },
  {
    userId: 'test-user-2',
    userName: 'fune',
    nickname: 'フネ',
    themeColor: '#ff9800',
    hasAvatar: false,
    display: true,
  },
  {
    userId: 'test-user-3',
    userName: 'katuo',
    nickname: 'カツオ',
    themeColor: '#2196f3',
    hasAvatar: false,
    display: true,
  },
  {
    userId: 'test-user-4',
    userName: 'wakame',
    nickname: 'ワカメ',
    themeColor: '#e91e63',
    hasAvatar: false,
    display: true,
  },
];

export const sharedUserStore = reactive({
  sharedUsers: sharedUserMockData,
});

/**
 * ユーザープロフィール更新
 * update
 *
 * @param profile 更新対象ユーザープロフィール
 * @return なし
 */
export const update = (profile: Profile) => {
  const filteredUser = sharedUserStore.sharedUsers.filter(
    user => user.userId === profile.userId,
  );

  if (!filteredUser || filteredUser.length === 0) {
    return;
  }

  const targetUser = filteredUser[0];
  targetUser.userName = profile.userName;
  targetUser.nickname = profile.nickname;
  targetUser.themeColor = profile.themeColor;
  targetUser.hasAvatar = profile.hasAvatar;
};

/**
 * ニックネームの部分一致検索
 * searchUsers
 *
 * @param partOfNickname 部分一致検索ニックネーム
 * @return sharedUserStore
 */
export const searchUsers = (partOfNickname: string) => {
  return sharedUserStore.sharedUsers.filter(user =>
    user.nickname.startsWith(partOfNickname),
  );
};
