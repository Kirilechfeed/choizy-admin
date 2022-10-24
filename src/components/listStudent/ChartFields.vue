<template>
  <div class="column-chart">
    <div class="contant-chart">
      <div class="title-chart">{{ title }}</div>
      <div class="decor-chart"></div>
      <div :class="`body-chart chart-height_${num}`"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class ChartFields extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: Number }) num!: number;
}
</script>
<style>
.column-chart {
  margin-top: 40px;
}
.title-chart {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #0a2864;
}
.contant-chart {
  width: 114px;
}
.decor-chart {
  border-bottom: 4px solid #888dff;
  border-radius: 4px;
  margin: 8px 0px;
}
.body-chart {
  background: rgb(45, 54, 250);
  background: linear-gradient(180deg, #e6f0ff 0%, rgba(230, 240, 255, 0) 100%);
}
.chart-height_1 {
  height: 36.4px;
  transition: 1s ease;
}
.chart-height_2 {
  height: 72.8px;
  transition: 1s ease;
}
.chart-height_3 {
  height: 109.2px;
  transition: 1s ease;
}
.chart-height_4 {
  height: 145.6px;
  transition: 1s ease;
}
.chart-height_5 {
  height: 182px;
  transition: 1s ease;
}
</style>
