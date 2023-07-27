<!-- template -->
<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-row class="py-12" align="center" justify="center">
        <!-- 日付を表示 -->
        <span class="font-weight-thin title" v-text="`${today.year}/`" />
        <span class="pl-2 display-1" v-text="`${today.month}/${today.day}`" />
        <!-- v-chip：チップを表示する -->
        <!-- 本日の曜日とカレンダーを共有しているユーザーを表示 -->
        <v-chip
          class="ml-2 pt-0 title"
          color="pink"
          text-color="white"
          v-text="displayWeekday"
        />
      </v-row>
      <div v-for="(event, index) in filteredEvents" :key="index">
        <!-- v-chip：チップを表示する -->
        <v-chip
          class="mt-2"
          :color="getEventColor(event)"
          text-color="white"
          label
          v-text="event.name"
        />
      </div>
      <v-divider class="my-4" />
      <v-timeline v-if="displayTimeline" class="mb-12">
        <v-timeline-item
          v-for="(event, index) in filteredEventsHasTime"
          :key="index"
          class="text-left"
          right
          :color="getEventColor(event)"
        >
          <template v-slot:opposite>
            <span v-text="event.startTime" />
          </template>
          <span class="pl-4" v-text="event.name" />
        </v-timeline-item>
      </v-timeline>
      <v-row align="center" justify="center">
        <v-switch
          v-for="(sharedUser, index) in sharedUsers"
          :key="index"
          v-model="sharedUser.display"
          class="ml-4 pt-0"
          :color="sharedUser.themeColor"
          :label="sharedUser.nickname"
          hide-details
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CalendarEvent } from 'vuetify';
import { todayCalendarEventMockData } from '@/store/calendarEvent';
import { sharedUserStore, getThemeColor } from '@/store/sharedUser';
import { DateUtils } from '@/utils/DateUtils';

@Component
export default class HomeComponent extends Vue {
  /**
   * カレンダー共有ユーザー
   */
  private sharedUsers = sharedUserStore.sharedUsers;

  /**
   * 本日の日付
   */
  private today = DateUtils.getToday();

  /**
   * 曜日取得
   * displayWeekday
   *
   * 本日の曜日を取得する
   *
   * @param なし
   * @return DateUtils.getWeekday
   *   曜日文字列
   */
  private get displayWeekday() {
    // 曜日を返す
    return DateUtils.getWeekday();
  }

  /**
   * 時間指定なしイベント取得
   * filteredEvents
   *
   * 時間指定のないイベントを取得する
   * スイッチによってフィルタリングを行う
   *
   * @param なし
   * @return
   */
  private get filteredEvents() {
    const displayUserIds = this.sharedUsers
      .filter(user => user.display)
      .map(user => user.userId);

    return todayCalendarEventMockData.filter(
      event => displayUserIds.includes(event.userId) && !event.startTime,
    );
  }

  /**
   * 時間指定なしイベント取得
   * filteredEvents
   *
   * 時間指定のないイベントを取得する
   * スイッチによってフィルタリングを行う
   *
   * @param なし
   * @return
   */
  private get filteredEventsHasTime() {
    const displayUserIds = this.sharedUsers
      .filter(user => user.display)
      .map(user => user.userId);

    return todayCalendarEventMockData.filter(
      event => displayUserIds.includes(event.userId) && event.startTime,
    );
  }

  /**
   * displayTimeline
   */
  private get displayTimeline() {
    console.log(this.filteredEventsHasTime);
    return this.filteredEventsHasTime.length > 0;
  }

  /**
   * イベントカラー取得
   * getEventColor
   *
   * イベントの色を取得する
   * @param object event
   *   CalendarEventオブジェクト
   * @return string
   *    カラーコード
   */
  private getEventColor(event: CalendarEvent) {
    // イベントがなければ何も返さない
    if (!event) {
      return;
    }

    return getThemeColor(event.userId);
  }
}
</script>
