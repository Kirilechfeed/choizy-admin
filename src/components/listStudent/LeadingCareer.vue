<template>
  <div class="lending-career">
    <div class="container-career">
      <div class="title-career">Leading career</div>
      <div class="contant-career">
        <div class="chart">
          <div v-for="(item, index) in chartStudent.careerFields" :key="index">
            <ChartFields :title="item.name" :num="item.value" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ChartFields from "@/components/listStudent/ChartFields.vue";
@Component({ components: { ChartFields } })
export default class LeadingCareer extends Vue {
  @Prop({ type: Object }) chartStudent!: object;
}
</script>

<style>
.lending-career {
  background: #fff;
  width: 100%;
  padding: 32px 26px;
  border-radius: 18px;
  margin-top: 30px;
}
.title-career {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.chart {
  display: flex;
  justify-content: space-between;
  flex: 0 1 20%;
  align-items: flex-end;
  height: 228px;
}
.contant-career {
  margin-top: 50px;
}
</style>
