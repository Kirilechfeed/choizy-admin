<template>
  <div class="main">
    <AddClass v-if="isShowModal" @closeModal="closeModal" />
    <div class="your-class">
      <div class="title-class">Your classes</div>
      <div @click="showModal" class="add-class">
        <CustomButton :title="'Add class'" />
      </div>
    </div>
    <div class="container-cards">
      <div
        v-for="(item, indx) in allClass"
        :key="indx"
        class="list-card-student"
      >
        <div>
          <CardClass
            :className="item.name"
            :kolStudent="item.students.length"
            @click.native="$router.push(`/students/class/${item.id}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardClass from "@/components/students/CardClass.vue";
import CustomButton from "@/components/CustomButton.vue";
import AddClass from "@/components/students/modalAddClass/AddClass.vue";
import { mapGetters } from "vuex";
import { IClass } from "@/models";

@Component({
  components: { CardClass, CustomButton, AddClass },
  computed: {
    ...mapGetters(["allClass"]),
  },
})
export default class StudentsCard extends Vue {
  public allClass!: IClass[];
  isShowModal = false;
  showModal() {
    this.isShowModal = true;
  }
  closeModal() {
    this.isShowModal = false;
  }
}
</script>
<style>
.container-cards {
  display: flex;
  flex-wrap: wrap;
}
.list-card-student {
  display: flex;
  flex: 0 1 33.33%;
  justify-content: center;
  margin-bottom: 50px;
}
.your-class {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;
}
.title-class {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.add-class {
}
</style>
