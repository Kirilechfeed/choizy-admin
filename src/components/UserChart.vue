<template>
  <div class="user-chart">
    <h2 class="user-chart__title">{{ chartTitle }}</h2>
    <div class="chart-wrapper">
      <Bar
        class="chart-bar"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

@Component({ components: { Bar } })
export default class UserChart extends Vue {
  @Prop({ type: String }) chartTitle!: string;
  @Prop({ type: String, default: "bar-chart" }) chartId!: string;
  @Prop({ type: String, default: "label" }) datasetIdKey!: string;
  @Prop({ type: Number, default: 100 }) width!: number;
  @Prop({ type: Number, default: 30 }) height!: number;
  @Prop({ type: String, default: "" }) cssClasses!: string;

  chartData = {
    labels: [
      "Marketing",
      "Design",
      "Supply Chain Management & Transportation",
      "Architecture & Construction",
      "Librarian",
    ],
    datasets: [{ data: [5, 3, 1, 1, 1] }],
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        grid: { display: false, drawBorder: false },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          display: false,
        },
      },
    },
  };
}
</script>

<style lang="scss">
.user-chart {
  height: 358px;
  background-color: #fff;
  padding: 32px 26px;
  border-radius: 18px;
  &__title {
    font-weight: 700;
    font-size: 20px;
  }

  .chart-wrapper {
    margin-top: 40px;
  }

  .chart-bar {
    width: 100%;
    flex: 0 0 auto;
    height: 222px;
  }
}
</style>
