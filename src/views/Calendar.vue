<!-- template -->
<template>
  <div>カレンダー[{{ type.hoge }}]</div>
</template>

<!-- TypeScript -->
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CalendarComponent extends Vue {
  @Prop({
    required: true,
    validator: (value: string) => {
      return ["month", "week", "day"].includes(value);
    }
  })
  private type!: string;
}
</script>
