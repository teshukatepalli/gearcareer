<template>
  <vueSlideoutPanel v-model="show" :widths="['50%']" @close="close()">
    <h3>Education</h3>
    <div
      v-for="(edu, index) in education"
      :key="index"
      class="hidden-overflow p-2"
    >
      <div class="form-group">
        <label class="control-label">Degree</label>
        <input
          type="text"
          class="form-control"
          v-model="edu.degree"
          placeholder="Degree, e.g. Bachelor"
        />
      </div>
      <div class="form-group">
        <label class="control-label">Field of Study</label>
        <input
          type="text"
          class="form-control"
          v-model="edu.field_of_study"
          placeholder="Major, e.g Computer Science"
        />
      </div>
      <div class="form-group">
        <label class="control-label">School</label>
        <input
          type="text"
          class="form-control"
          v-model="edu.school"
          placeholder="School name, e.g. Massachusetts Institute of Technology"
        />
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label class="control-label">From</label>
            <input
              type="text"
              class="form-control"
              v-model="edu.from"
              placeholder="e.g 2014"
            />
          </div>
          <div class="col-md-6">
            <label class="control-label">To</label>
            <input
              type="text"
              class="form-control"
              v-model="edu.to"
              placeholder="e.g 2020"
            />
          </div>
        </div>
      </div>
      <div class="add-post-btn">
        <div class="float-left">
          <a href="#" class="btn-added" @click="addNewEducation()"
            ><i class="ti-plus"></i> Add New Education</a
          >
        </div>
        <div class="float-right">
          <a href="#" class="btn-delete" @click="removeExperience(index)"
            ><i class="ti-trash"></i> Delete This</a
          >
        </div>
      </div>
    </div>
    <button @click="updateUser()" class="btn btn-common">
      Save
    </button>
  </vueSlideoutPanel>
</template>

<script>
import vueSlideoutPanel from "vue-slideout-panel";
import { mapState } from "vuex";
export default {
  components: {
    vueSlideoutPanel,
  },
  props: ["show"],
  data() {
    return {
      education: [
        {
          degree: "",
          field_of_study: "",
          school: "",
          from: "",
          to: "",
        },
      ],
      education_form: {
        degree: "",
        field_of_study: "",
        school: "",
        from: "",
        to: "",
      },
    };
  },
  created() {
    this.checkEducation();
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
    }),
  },
  methods: {
    checkEducation() {
      if (this.Profile.education.length) {
        this.education = JSON.parse(JSON.stringify(this.Profile.education));
      }
    },
    addNewEducation() {
      this.education.push(this.education_form);
    },
    removeEducation(index) {
      console.log(index);
      this.education.splice(index, 1);
    },
    close() {
      this.$emit("closeModel");
    },
    updateUser() {
      //   this.Profile.address.address = this.Address;
      console.log(this.Profile);
      console.log(this.education);
      this.Profile.education = this.education;
      this.$store.dispatch("auth/update", this.Profile);
      this.close();
    },
  },
};
</script>

<style scoped>
.hidden-overflow {
  overflow: hidden;
  color: #000;
}
h3 {
  font-size: 18px;
}
.btn-delete {
  color: red !important;
}
a {
  cursor: pointer;
}
</style>
