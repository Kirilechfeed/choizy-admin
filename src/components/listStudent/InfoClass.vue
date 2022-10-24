<template>
  <div>
    <ModalStudents v-if="showModal" @closeModal="closeModal" />
    <div class="container-info">
      <div class="class-name">{{ nameClass }} class</div>
      <div @click="showModal = true" class="add-student">
        <CustomButton :title="'Add students'" />
      </div>
    </div>
    <div class="student-info">
      <ListStudents :student="getClass" @getId="getId" />
      <div class="container-each-student">
        <div class="circle-loader-advent">
          <div
            v-for="(item, index) in aboutStudent.nameAdvent"
            :key="index"
            class=""
          >
            <CirclLoader :title="item.name" :value="item.value" />
          </div>
        </div>
        <div v-if="showField">
          <LeadingFields :chartStudent="aboutStudent" />
          <LeadingCareer :chartStudent="aboutStudent" />
          <div class="soft-skill">
            <div class="title-skill">Soft skill test</div>
          </div>
          <div class="report">
            <div class="title-report">Report</div>
            <div class="download-report">
              <CustomButton :title="'Download'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListStudents from "@/components/listStudent/ListStudents.vue";
import CustomButton from "@/components/CustomButton.vue";
import LeadingFields from "@/components/listStudent/LeadingFields.vue";
import CirclLoader from "@/components/CirclLoader.vue";
import LeadingCareer from "@/components/listStudent/LeadingCareer.vue";
import ModalStudents from "@/components/listStudent/addStudents/ModalStudents.vue";
import { mapGetters } from "vuex";
import { IClass, IStudent } from "@/models";
@Component({
  components: {
    ListStudents,
    CustomButton,
    CirclLoader,
    LeadingFields,
    LeadingCareer,
    ModalStudents,
  },
  computed: {
    ...mapGetters(["allClass"]),
  },
})
export default class InfoClass extends Vue {
  public allClass!: IClass[];
  public infoStudent!: IStudent[];
  showModal = false;
  className = "";
  showField = false;
  aboutStudent = {};
  closeModal() {
    this.showModal = false;
  }

  getId(n) {
    this.aboutStudent = n;
    this.showField = true;
  }
  get getClass() {
    this.allClass.forEach((elem) => {
      if (elem.id == this.$route.params.id) {
        this.infoStudent = elem.students;
      }
    });
    return this.infoStudent;
  }

  get nameClass() {
    this.allClass.forEach((elem) => {
      if (elem.id == this.$route.params.id) {
        this.className = elem.name;
      }
    });
    return this.className;
  }
}
</script>
<style>
.container-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
.class-name {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.student-info {
  display: flex;
}
.container-each-student {
  width: 100%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
}
.circle-loader-advent {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.student-achievement {
  border: 1px solid red;
}
.soft-skill {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
  margin-top: 30px;
  display: flex;
}
.title-skill {
  background: #fff;
  padding: 32px 26px;
  border-radius: 18px;
}
.report {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 32px 26px;
  border-radius: 18px;
  align-items: center;
  margin-top: 30px;
}
.title-report {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.download-report {
}
</style>
