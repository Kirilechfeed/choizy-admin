<template>
  <div class="block-each-student">
    <div class="each-student">
      <div class="number-student">{{ id }}</div>
      <div class="name-student">{{ name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class StudentsItem extends Vue {
  @Prop({ type: Number }) id!: number;
  @Prop({ type: String }) name!: string;
}
</script>
<style>
.block-each-student {
  padding: 6px 0px;
  border-bottom: 1px solid #e2e7f0;
  display: inline-block;
}
.student-item_active .each-student {
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 281px;
  border-radius: 6px;
}
.each-student {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 281px;
}
.each-student:hover {
  background: rgb(234, 234, 255);
  border-radius: 6px;
}
.student-item_active .number-student {
  display: flex;
  align-items: center;
  text-align: center;
  background: #714cfe;
  padding: 10px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-right: 26px;
}
.number-student {
  display: flex;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #0a2864;
  margin-right: 26px;
}

.name-student {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #0a2864;
}
</style>
