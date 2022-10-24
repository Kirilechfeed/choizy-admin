<template>
  <div class="container-title">
    <div class="title-item">
      {{ title }}
    </div>
    <div class="progress-careers">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="persent">{{ progress + "%" }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component
export default class CareersItem extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: Number }) progress!: number;
}
</script>
<style>
.container-title {
  border-bottom: 1px solid #e2e7f0;
  padding-bottom: 24px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-item {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #0a2864;
}

.progress-careers {
  display: flex;
  align-items: center;
}
.progress-bar {
  width: 332px;
  height: 20px;
  border-radius: 6px;
  background: #eff1f9;
  margin-right: 30px;
}
.progress {
  width: 50%;
  height: 100%;
  background: #714cfe;
  border-radius: 6px;
  transition: 1s ease;
}
</style>
