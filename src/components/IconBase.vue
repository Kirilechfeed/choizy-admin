<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class IconBase extends Vue {
  @Prop({ type: Number }) width!: number;
  @Prop({ type: Number }) height!: number;
  @Prop({ type: String }) iconName!: string;
  @Prop({ type: String }) iconColor!: string;
  @Prop({ type: Boolean }) isActive!: boolean;
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
