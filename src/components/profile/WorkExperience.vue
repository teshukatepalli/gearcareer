<template>
  <vueSlideoutPanel v-model="show" :widths="['50%']" @close="close()">
    <h3 class="text-center pb-2 post-header">Work Experience</h3>
    <div
      v-for="(exp, index) in experience"
      :key="index"
      class="hidden-overflow p-2"
    >
      <div class="form-group">
        <label class="control-label">Company Name</label>
        <input
          type="text"
          class="form-control"
          v-model="exp.company_name"
          placeholder="Company name"
        />
      </div>
      <div class="form-group">
        <label class="control-label">Title</label>
        <input
          type="text"
          v-model="exp.title"
          class="form-control"
          placeholder="e.g UI/UX Researcher"
        />
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label class="control-label">Date Form</label>
            <input
              type="text"
              v-model="exp.date_from"
              class="form-control"
              placeholder="e.g 2014"
            />
          </div>
          <div class="col-md-6">
            <label class="control-label">Date To</label>
            <input
              type="text"
              v-model="exp.date_to"
              class="form-control"
              placeholder="e.g 2020"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">Work Description</label>
        <textarea
          class="form-control p-3"
          v-model="exp.work_experience"
          rows="7"
        ></textarea>
      </div>
      <div class="add-post-btn">
        <div class="float-left">
          <a @click="addNewExperience()" class="btn-added"
            ><i class="ti-plus"></i> Add New Experience</a
          >
        </div>
        <div class="float-right">
          <a @click="removeExperience(index)" class="btn-delete"
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
      experience: [
        {
          company_name: "",
          title: "",
          date_from: "",
          date_to: "",
          work_experience: "",
        },
      ],
      experience_form: {
        company_name: "",
        title: "",
        date_from: "",
        date_to: "",
        work_experience: "",
      },
    };
  },
  created() {
    this.checkExperience();
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
    }),
  },
  methods: {
    checkExperience() {
      if (this.Profile.experience.length) {
        this.experience = JSON.parse(JSON.stringify(this.Profile.experience));
      }
    },
    addNewExperience() {
      this.experience.push(this.experience_form);
    },
    removeExperience(index) {
      console.log(index);
      this.experience.splice(index, 1);
    },
    close() {
      this.$emit("closeModel");
    },
    updateUser() {
      //   this.Profile.address.address = this.Address;
      console.log(this.Profile);
      console.log(this.experience);
      this.Profile.experience = this.experience;
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
