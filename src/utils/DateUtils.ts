import { parseDate } from 'vuetify/lib/components/VCalendar/util/timestamp';
import constant from '@/consts/const';

export class DateUtils {
  /**
   * 日付取得
   * getToday
   *
   * 本日の日付を取得する
   *
   * @param なし
   * @return object
   *   日付オブジェクト
   */
  static getToday() {
    return parseDate(new Date());
  }

  /**
   * 曜日取得
   * displayWeekday
   *
   * 本日の曜日を取得する
   *
   * @param なし
   * @return string
   *   曜日
   */
  static getWeekday() {
    // 本日の日付を取得
    const today = DateUtils.getToday();

    // 曜日を返す
    return [
      constant.DAY_OF_WEEK_SUN,
      constant.DAY_OF_WEEK_MON,
      constant.DAY_OF_WEEK_TUE,
      constant.DAY_OF_WEEK_WED,
      constant.DAY_OF_WEEK_THU,
      constant.DAY_OF_WEEK_FRI,
      constant.DAY_OF_WEEK_SAT,
    ][today.weekday];
  }
}
