<template>
  <div class="lending-fields">
    <div class="container-fields">
      <div class="title-fields">Leading fields</div>
      <div class="contant-fields">
        <div class="chart">
          <div v-for="(item, index) in chartStudent.leadingFields" :key="index">
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

@Component({
  components: { ChartFields },
  created() {
    console.log(this.chartStudent);
  },
})
export default class LeadingFields extends Vue {
  @Prop({ type: Object }) chartStudent!: object;
}
</script>

<style>
.lending-fields {
  background: #fff;
  width: 100%;
  padding: 32px 26px;
  border-radius: 18px;
  margin-top: 60px;
}
.title-fields {
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
.contant-fields {
  margin-top: 50px;
}
</style>
