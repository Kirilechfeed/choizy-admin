<template>
  <div class="container-preview">
    <div class="container-main">
      <div class="preview-img">
        <img alt="preview" :src="require('@/assets/img/preview/preview.svg')" />
      </div>
      <div class="preview-title">
        Welcom to the Choizy dashboard statistic overview will be displayed here
        soon.
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PrevueBoard extends Vue {}
</script>
<style>
.container-preview {
  padding-top: 155px;
}
.container-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.preview-img {
}
.preview-title {
  width: 381px;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #7788ae;
  margin-top: 45px;
}
</style>
