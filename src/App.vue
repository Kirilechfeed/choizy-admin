<template>
  <div id="app">
    <div class="wrapper">
      <div class="custom-menu">
        <CustomMenu />
      </div>
      <div class="main-page">
        <div class="header-section">
          <HeaderSection />
        </div>
        <div class="nav-router-section">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CustomMenu from "@/components/CustomMenu.vue";
import HeaderSection from "@/components/HeaderSection.vue";

@Component({
  components: {
    CustomMenu,
    HeaderSection,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/reset.css";

* {
  box-sizing: border-box;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  display: flex;
  min-height: 100%;
}
.main-page {
  align-self: stretch;
  width: 100%;
}
.nav-router-section {
  background: #eff1f9;
  padding: 0px 50px;

  min-height: 100%;
}
</style>
