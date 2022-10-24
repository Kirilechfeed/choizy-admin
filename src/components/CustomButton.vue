<template>
  <div class="section-button">
    <button class="custom-button">{{ title }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CustomButton extends Vue {
  @Prop({ type: String }) title!: string;
}
</script>

<style>
.section-button {
  display: flex;
  justify-content: center;
}
.custom-button {
  align-self: stretch;
  padding: 4px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #714cfe;
  border-radius: 6px;
  border: 0px;
  cursor: pointer;
}
.custom-button:hover {
  background: #5f37ff;
}
</style>
