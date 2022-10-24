<template>
  <div class="main-menu">
    <div class="header-menu menu-header">
      <div class="menu-header__clouse">
        <img
          :src="require('@/assets/img/menu/header/close-menu.svg')"
          alt="close-menu"
        />
      </div>
      <div class="menu-header__logo">
        <img
          :src="require('@/assets/img/menu/header/logo_choizy.png')"
          alt="logo"
        />
      </div>
    </div>
    <div class="item-menu menu-items">
      <div
        v-for="(item, index) in menus"
        :key="index"
        class="menu-item"
        :class="{ 'menu-item_active': currentTab === index }"
        @click="handleMenuClick(item, index)"
      >
        <MenuItem
          :isActive="currentTab === index"
          :imgIndex="index"
          :title="item.title"
        />
      </div>
    </div>
    <div class="button-support">
      <div class="support-img">
        <img :src="require('@/assets/img/menu/support/support.svg')" alt="" />
      </div>
      <div class="support-button">
        <CustomButton :title="'Contact support'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuItem from "@/components/MenuItem.vue";
import CustomButton from "@/components/CustomButton.vue";
import { IMenu } from "@/models";

@Component({ components: { MenuItem, CustomButton } })
export default class CustomMenu extends Vue {
  // @Prop({ type: String }) str!: string;
  currentTab = 0;
  menus: IMenu[] = [
    { img: "1.svg", title: "Overview", to: "/overview" },
    { img: "2.svg", title: "Students", to: "/students" },
    { img: "3.svg", title: "Settings", to: "/setting" },
  ];
  handleMenuClick(item: IMenu, indx: number) {
    this.currentTab = indx;
    this.$router.push(item.to);
  }
}
</script>
<style>
.main-menu {
}
.header-menu {
  padding: 50px 49px 0px;
}
.menu-header {
  display: flex;
  align-items: center;
}
.menu-header__clouse {
  padding-right: 17px;
}
.menu-header__logo {
  display: flex;
}
.item-menu {
  margin-top: 62px;
}
.button-support {
  padding: 116px 48px 0px;
}
.support-img {
}
.support-button {
  margin-top: -15px;
  z-index: 2;
  position: relative;
}
</style>
