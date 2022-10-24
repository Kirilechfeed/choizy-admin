<template>
  <div class="container-careers">
    <div class="list-careers">
      <div class="header-careers-list">
        <div class="title-careers">Most popular careers</div>
        <div class="button-classes">
          <div class="item-button">school</div>
          <div
            @click="getStatistik(0)"
            :class="isActive === 0 ? 'item-button' : 'item-button-active'"
          >
            9 class
          </div>
          <div
            @click="getStatistik(1)"
            :class="isActive === 1 ? 'item-button' : 'item-button-active'"
          >
            10 class
          </div>
          <div
            @click="getStatistik(2)"
            :class="isActive === 2 ? 'item-button' : 'item-button-active'"
          >
            11 class
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in careersTitle"
        :key="index"
        class="items-careers-list"
      >
        <CareersItem :title="item.title" :progress="item.class[number]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CareersItem from "@/components/owerview/CareersItem.vue";
@Component({ components: { CareersItem } })
export default class CareersList extends Vue {
  number = 0;
  isActive = 0;
  careersTitle = [
    { title: "Design", class: [20, 30, 75] },
    { title: "Marketing", class: [20, 60, 15] },
    { title: "Supply Chain", class: [13, 90, 75] },
    { title: "Architecture & Construction", class: [96, 30, 43] },
    { title: "Management & Transportation", class: [56, 11, 80] },
    { title: "Supply Chain Management & Transportation", class: [78, 25, 39] },
  ];
  getStatistik(num) {
    this.number = num;
    this.isActive = num;
  }
}
</script>

<style>
.container-careers {
}
.list-careers {
  background: #fff;
  padding: 32px 26px;
  border-radius: 18px;
}
.header-careers-list {
  justify-content: space-between;
  display: flex;
  padding-bottom: 40px;
}
.title-careers {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.button-classes {
  display: flex;
  background: #eff1f9;
  border-radius: 4px;
  align-items: center;
  padding: 5px 12px;
}
.item-button {
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #1c4cb4;
  cursor: pointer;
}

.item-button-active {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7788ae;
  cursor: pointer;
}

.item-button,
.item-button-active:not(:first-child) {
  margin-left: 26px;
}
</style>
