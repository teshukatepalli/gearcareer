<template>
  <vueSlideoutPanel v-model="show" :widths="['50%']" @close="close()">
    <h3 class="text-center pb-2 post-header">Skills</h3>
    <div class="hidden-overflow p-2">
      <div class="row">
        <div class="col-md-5">
          <label class="control-label">Skill Name</label>
        </div>
        <div class="col-md-5">
          <label class="control-label">% (1-100)</label>
        </div>
      </div>
    </div>
    <div
      v-for="(skill, index) in skills"
      :key="index"
      class="hidden-overflow p-2"
    >
      <div class="form-group">
        <div class="row">
          <div class="col-md-5">
            <input
              class="form-control"
              v-model="skill.name"
              placeholder="Skill name, e.g. HTML"
              type="text"
            />
          </div>
          <div class="col-md-3">
            <input
              class="form-control"
              v-model="skill.percentage"
              placeholder="Skill proficiency, e.g. 90"
              type="text"
            />
          </div>
          <div class="add-post-btn pb-0 col-md-3 custom-delete">
            <a href="#" class="btn-delete" @click="removeSkill(index)"
              ><i class="ti-trash"></i> Delete This</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="add-post-btn">
      <div class="float-left">
        <a href="#" class="btn-added" @click="addNewSkill()"
          ><i class="ti-plus"></i> Add New Skills</a
        >
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
      skills: [
        {
          name: "",
          percentage: "",
        },
      ],
      skill_form: {
        name: "",
        percentage: "",
      },
    };
  },
  created() {
    this.checkSkills();
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
    }),
  },
  methods: {
    checkSkills() {
      if (this.Profile.skills.length) {
        this.skills = JSON.parse(JSON.stringify(this.Profile.skills));
      }
    },
    addNewSkill() {
      this.skills.push(JSON.parse(JSON.stringify(this.skill_form)));
    },
    removeSkill(index) {
      console.log(index);
      this.skills.splice(index, 1);
    },
    close() {
      this.$emit("closeModel");
    },
    updateUser() {
      //   this.Profile.address.address = this.Address;
      console.log(this.Profile);
      console.log(this.skills);
      this.Profile.skills = this.skills;
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
.custom-delete {
  display: flex;
  align-items: center;
  padding: 0px;
}
</style>
