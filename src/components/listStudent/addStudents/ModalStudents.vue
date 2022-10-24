<template>
  <div class="modal-shadow">
    <div class="modal">
      <div class="container-modal">
        <div class="header-modal">
          <div class="title-modal">Add student</div>
          <div @click="$emit('closeModal')" class="close-modal">
            <img :src="require('@/assets/img/modal/cancel.svg')" alt="" />
          </div>
        </div>
        <div class="body-modal">
          <div class="modal-contant">
            <div class="input-name">
              <div class="title-name">Enter name</div>
              <div class="input-block">
                <input
                  v-model="studentName"
                  class="input"
                  type="text"
                  placeholder="Enter name..."
                />
              </div>
            </div>
            <div class="input-age">
              <div class="title-age">Choise age</div>
              <div class="select-age">
                <select v-model="studentAge" class="select" name="" id="">
                  <option v-for="num in 100" :key="num" value="num">
                    {{ num }}
                  </option>
                </select>
              </div>
            </div>
            <div class="add-student" @click="addStudent">
              <CustomButton :title="'Add student'" />
            </div>
            <div v-if="showError" class="error">Enter name and age student</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CustomButton from "@/components/CustomButton.vue";
import { IClass } from "@/models";
import { mapGetters } from "vuex";
@Component({
  components: { CustomButton },
  computed: {
    ...mapGetters(["allClass"]),
  },
})
export default class ModalStudents extends Vue {
  public allClass!: IClass[];
  studentName = "";
  studentAge = "";
  showError = false;
  getClass = {};
  randomAdvent() {
    return Math.round(Math.random() * (45 - 1) + 1);
  }
  randomCareer() {
    return Math.round(Math.random() * (5 - 1) + 1);
  }

  addStudent() {
    if (this.studentName == "" && this.studentAge == "") {
      this.showError = true;
    } else {
      this.getClass = this.allClass.find(
        (elem) => elem.id == this.$route.params.id
      );
      this.getClass.students.push({
        id: this.getClass.students.length + 1,
        name: this.studentName,
        age: this.studentAge,
        nameAdvent: [
          { name: "Video", value: this.randomAdvent() },
          { name: "Level", value: this.randomAdvent() },
          { name: "Last time active", value: this.randomAdvent() },
        ],
        leadingFields: [
          { name: "Marketing", value: this.randomCareer() },
          { name: "Design", value: this.randomCareer() },
          {
            name: "Supply Chain Management & Transportation",
            value: this.randomCareer(),
          },
          { name: "Architecture & Construction", value: this.randomCareer() },
          { name: "Marketing", value: this.randomCareer() },
        ],
        careerFields: [
          { name: "Digital marketing", value: this.randomCareer() },
          { name: "UI/UX designer", value: this.randomCareer() },
          { name: "Graphic designer", value: this.randomCareer() },
          { name: "Sales manager", value: this.randomCareer() },
          { name: "Librarian", value: this.randomCareer() },
        ],
      });
      this.$emit("closeModal");
    }
  }
}
</script>
<style>
.modal {
  background: rgb(255, 255, 255);
  width: 553px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.39);
  z-index: 3;
  position: fixed;
  overflow-y: scroll;
}
.container-modal {
  padding: 15px 15px;
}
.body-modal {
  display: flex;
  justify-content: space-around;
}
.input-name {
  margin-top: 20px;
}
.title-name {
  font-weight: 600;
  font-size: 12px;
  line-height: 27px;
  color: #0a2864;
}
.input {
  width: 400px;
  padding: 10px;
  border: 1px solid #082051;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 4px rgba(14, 60, 245, 0.179);
}
.input-block {
  margin-top: 5px;
}
.input-age {
}
.title-age {
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 27px;
  color: #0a2864;
}
.select-age {
}
.add-student {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
