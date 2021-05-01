<template>
  <div class="inner-box my-resume">
    <div class="author-resume">
      <div class="thumb">
        <!-- <img src="assets/img/resume/img-1.png" alt="" /> -->
        <img src="@/assets/gearcareer.png" alt="Profile picture" />
      </div>
      <div class="author-info">
        <a @click="editProfile" class="btn-added float-right"
          ><i class="ti-plus"></i>edit
        </a>
        <!-- <h3>{{ Profile }}</h3> -->
        <h3>Company name</h3>
        <p class="sub-title">Category</p>
        <p>
          <span class="address"><i class="lni-map-marker"></i>Address</span>
        </p>
        <p>
          <span class="address"><i class="ti-phone"></i>Phone</span>
        </p>
        <div class="social-link">
          <a href="#" class="Twitter"><i class="lni-twitter-filled"></i></a>
          <a href="#" class="facebook"><i class="lni-facebook-filled"></i></a>
          <a href="#" class="google"><i class="lni-google-plus"></i></a>
          <a href="#" class="linkedin"><i class="lni-linkedin-fill"></i></a>
        </div>
      </div>
      <editprofile :show="profileModel" @closeModel="editProfile" />
    </div>
    <div class="about-me item">
      <h3>About Company</h3>
      <p>
        This is the company information
      </p>
    </div>
    <div class="about-me item">
      <h3>Website</h3>
      <p>
        https://gearcareer.com
      </p>
    </div>
    <div class="about-me item">
      <h3>Company size</h3>
      <p>
        100 - 200 employees
      </p>
    </div>
    <div class="about-me item">
      <h3>Headquarters</h3>
      <p>
        Hyderabd, telangana
      </p>
    </div>
    <div class="about-me item">
      <h3>Founded</h3>
      <p>
        2020
      </p>
    </div>
    <div class="about-me item">
      <h3>Technologies & Practices</h3>
      <p>
        HTML, CSS, JavaScript, Vue, React, Angular, Backbone, meteor js
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import editprofile from "./editProfile.vue";
import WorkExperience from "./WorkExperience.vue";
import EditEducation from "./EditEducation.vue";
import editSkill from "./editSkills.vue";
export default {
  name: "profile",
  components: {
    editprofile,
    WorkExperience,
    EditEducation,
    editSkill,
  },
  data() {
    return {
      profileModel: false,
      workExperience: false,
      editEducation: false,
      editSkills: false,
    };
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
      Authenticate: (state) => state.auth.iSAuthenticated,
    }),
  },
  methods: {
    editProfile() {
      console.log("Edit called");
      this.profileModel = !this.profileModel;
    },
    checkAddress(address) {
      return address.address ? address.address : null;
    },
    editWorkExperience() {
      console.log("Work Experience called");
      this.workExperience = !this.workExperience;
    },
    editEdicationBlock() {
      console.log("Education callled");
      this.editEducation = !this.editEducation;
    },
    editSkillsBlock() {
      console.log("Skills called");
      this.editSkills = !this.editSkills;
    },
  },
};
</script>

<style scoped>
a {
  color: #27b062;
  cursor: pointer;
}
.bar {
  height: 18px;
  width: 100%;
  padding-left: 1em;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #27b062;
  border-radius: 1em;
}
</style>
