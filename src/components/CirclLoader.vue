<template>
  <div class="progres-circl">
    <div class="bg-circle">
      <div class="circle-out">
        <div class="circle-wrap">
          <div class="circle-inside">{{ value }}</div>
        </div>
      </div>
      <div class="title-progres">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class CirclLoader extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: Number }) value!: number;
}
</script>
<style>
.progres-circl {
}
.circle-out {
  width: 110px;
  height: 110px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 16px;
  top: -20px;
}
.circle-wrap {
  width: 86px;
  height: 86px;
  background: #714cfeda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-image: conic-gradient(
    #fff 15deg,
    #714cfeda 150deg,
    #714cfeda 210deg
  );
}
.circle-inside {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a2864;
  font-size: 30px;
  font-weight: 700;
}
.bg-circle {
  background: #ffffff;
  width: 227px;
  height: 67px;
  position: relative;
  display: flex;
  border-radius: 10px;
}
.title-progres {
  display: flex;
  margin-left: 130px;
  font-weight: 600;
  font-size: 16px;
  color: #0a2864;
  align-items: center;
}
</style>
