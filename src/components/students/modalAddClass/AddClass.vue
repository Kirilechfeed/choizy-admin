<template>
  <div class="modal-shadow">
    <div class="modal">
      <div class="container-modal">
        <div class="header-modal">
          <div class="title-modal">Add class</div>
          <div @click="$emit('closeModal')" class="close-modal">
            <img :src="require('@/assets/img/modal/cancel.svg')" alt="" />
          </div>
        </div>
        <div class="input-class">
          <div class="contant-select">
            <div class="title-select">Number class</div>
            <select v-model="numberClass" class="select number-class">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
          </div>
          <div class="contant-select">
            <div class="title-select">Char class</div>
            <select v-model="charClass" class="select char-class">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        <div @click="AddClasses" class="button-add-class">
          <CustomButton :title="'Add class'" />
        </div>
        <div v-if="showError" class="error">
          <div>Pleas chois class name</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CustomButton from "@/components/CustomButton.vue";
import { mapMutations } from "vuex";
@Component({
  components: { CustomButton },
  methods: {
    ...mapMutations(["createClass"]),
  },
})
export default class AddClass extends Vue {
  numberClass = "";
  charClass = "";
  showError = false;
  AddClasses() {
    if (this.numberClass == "" && this.charClass == "") {
      this.showError = true;
    } else {
      this.createClass({
        id: this.numberClass + this.charClass.toLowerCase(),
        name:
          this.numberClass +
          `${this.charClass == "" ? "" : "-"}` +
          this.charClass,
        dataCreate: "15.02.2022",
        students: [],
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
.header-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-modal {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #0a2864;
}
.close-modal {
  cursor: pointer;
}

.input-class {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.button-add-class {
  margin-top: 80px;
  margin-bottom: 30px;
}
.exemple {
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(10, 40, 100, 0.66);
}
.select {
  width: 200px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 15px;
  color: rgb(42, 10, 130);
  border: 2px solid;
}
.title-select {
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  color: #0a2864;
}
.error {
  display: flex;
  justify-content: space-around;
  color: red;
  font-size: 12px;
}
</style>
