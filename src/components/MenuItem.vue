<template>
  <div class="items-menu">
    <div class="item">
      <div class="item-img">
        <IconBase
          width="20"
          height="20"
          viewBox="0 0 20 20"
          :fill="isActive ? '#714CFE' : '#7788AE'"
        >
          <IconOverview v-if="imgIndex === 0" />
          <IconStudent v-if="imgIndex === 1" />
          <IconSetting v-if="imgIndex === 2" />
        </IconBase>
      </div>
      <div class="item-title">
        {{ title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconBase from "@/components/IconBase.vue";
import IconSetting from "@/components/icon/IconSetting.vue";
import IconOverview from "@/components/icon/IconOverview.vue";
import IconStudent from "@/components/icon/IconStudent.vue";

@Component({ components: { IconBase, IconSetting, IconOverview, IconStudent } })
export default class MenuItem extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: Number }) imgIndex!: number;
  @Prop({ type: Boolean }) isActive!: boolean;
}
</script>
<style>
.items-menu {
  padding: 0px 30px;
}
.item {
  display: flex;
  align-items: center;
  padding: 17px 0px 17px 21px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
  border-left: 5px solid rgb(255, 255, 255);
}
.menu-item_active .item {
  display: flex;
  align-items: center;
  padding: 17px 0px 17px 21px;
  background-color: #e6f0ff;
  border-left: 5px solid rgb(0, 5, 157);
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
}
.item:hover {
  background-color: #e5eaf2;
}
.item-img {
  padding-top: 4px;
  margin-right: 17px;
}

.menu-item_active .item-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #714cfe;
}
.item-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #7788ae;
}
</style>
