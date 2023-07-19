import '@/plugins/compositionApi';
import { reactive } from '@vue/composition-api';
import { Profile } from '@/store/profileModel';

export const profileMockData: Profile = {
  userId: 'ryt-okamoto',
  userName: 'Ryota OKamoto',
  nickname: 'Ryota',
  themeColor: '#4caf50',
  hasAvatar: false,
  mailAddress: 'ryt.4.bus@gmail.com',
};

export const profileStore = reactive({ profile: null as Profile | null });
