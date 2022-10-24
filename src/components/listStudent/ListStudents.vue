<template>
  <div class="list-students">
    <div
      v-for="item in student"
      :key="item.id"
      class="item-students"
      :class="{ 'student-item_active': currentTab === item.id }"
      @click="setActiveStudent(item.id), $emit('getId', item)"
    >
      <StudentsItem :name="item.name" :id="item.id" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import StudentsItem from "@/components/listStudent/StudentsItem.vue";
import { mapGetters } from "vuex";
import { IStudent } from "@/models";

@Component({
  components: { StudentsItem },
  computed: {
    ...mapGetters(["allClass"]),
  },
  // created() {
  //   this.currentTab = 1;
  //   this.$emit("getId", 2);
  // },
})
export default class ListStudents extends Vue {
  @Prop({ type: Array }) student!: IStudent[];

  currentTab = 0;

  setActiveStudent(index: number) {
    this.currentTab = index;
  }
}
</script>

<style>
.list-students {
  display: flex;
  flex-direction: column;
}
</style>
