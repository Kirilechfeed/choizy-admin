<template>
  <div class="card-class">
    <div class="card-class-body">
      <div class="card-class-conrainer">
        <div class="container-class__title">{{ className }}</div>
        <div class="container-class__grafick">
          <img
            alt="grafick"
            :src="require('@/assets/img/body/card-class/grafick.svg')"
          />
        </div>
        <div class="container-class__info">
          <div class="info-student">
            <img
              alt="user"
              :src="require('@/assets/img/body/card-class/users.svg')"
            />
            <div class="student-count">{{ kolStudent }} students</div>
          </div>
          <div class="info-data">Created: 12.08.2022</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardClass extends Vue {
  @Prop({ type: String }) className!: string;
  @Prop({ type: String }) kolStudent!: string;
}
</script>

<style>
.card-class {
  display: flex;
}
.card-class-body {
  background: #fff;
  border-radius: 20px;
}
.card-class-body:hover {
  cursor: pointer;
  background: rgb(247, 247, 247);
}
.card-class-conrainer {
  padding: 20px 23px 22px;
}
.container-class__title {
  font-weight: 700;
  font-size: 63.1429px;
  line-height: 86px;
  color: #0a2864;
  margin-bottom: 27px;
}
.container-class__grafick {
}
.container-class__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info-student {
  display: flex;
  align-items: center;
}
.student-count {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #7788ae;
  padding-left: 6px;
}
.info-data {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #7788ae;
}
</style>
