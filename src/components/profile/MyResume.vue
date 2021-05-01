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
        <h3>{{ Profile.name }}</h3>
        <p class="sub-title">{{ Profile.profession }}</p>
        <p>
          <span class="address" v-if="checkAddress(Profile.address)"
            ><i class="lni-map-marker"></i
            >{{ checkAddress(Profile.address) }}</span
          >
          <span><i class="ti-phone"></i>{{ Profile.mobile }}</span>
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
      <a @click="editProfile" class="btn-added float-right"
        ><i class="ti-plus"></i>edit
      </a>
      <h3>About Me</h3>
      <p>
        {{ Profile.about }}
      </p>
    </div>
    <div class="work-experence item">
      <a @click="editWorkExperience" class="btn-added float-right"
        ><i class="ti-plus"></i>edit
      </a>
      <h3>Work Experience</h3>
      <div v-for="(experience, index) in Profile.experience" :key="index">
        <h4>{{ experience.title }}</h4>
        <h5>{{ experience.company_name }}</h5>
        <span class="date"
          >{{ experience.date_from }} - {{ experience.date_to }}</span
        >
        <p>
          {{ experience.work_experience }}
        </p>
        <!-- <p><a href="#">4 Projects</a></p> -->
        <br />
      </div>
      <p v-if="!Profile.experience.length" class="text-center">
        Add work experience here....
      </p>
    </div>
    <WorkExperience :show="workExperience" @closeModel="editWorkExperience" />
    <div class="education item">
      <a @click="editEdicationBlock" class="btn-added float-right"
        ><i class="ti-plus"></i>edit
      </a>
      <h3>Education</h3>
      <div v-for="(edu, index) in Profile.education" :key="index">
        <h4>{{ edu.degree }}</h4>
        <p>{{ edu.field_of_study }}</p>
        <span class="date">{{ edu.from }} - {{ edu.to }}</span>
        <br />
      </div>
    </div>
    <EditEducation :show="editEducation" @closeModel="editEdicationBlock" />
    <div class="education item">
      <a @click="editSkillsBlock" class="btn-added float-right"
        ><i class="ti-plus"></i>edit
      </a>
      <h3>Skills</h3>
      <div v-for="(skill, index) in Profile.skills" :key="index">
        <div class="row">
          <div class="col-md-6">
            <p>{{ skill.name }}</p>
          </div>
          <div class="col-md-6">
            <div class="bar" :style="{ width: skill.percentage }">
              {{ skill.percentage }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="(edu, index) in Profile.education" :key="index">
        <h4>{{ edu.degree }}</h4>
        <p>{{ edu.field_of_study }}</p>
        <span class="date">{{ edu.from }} - {{ edu.to }}</span>
        <br />
      </div> -->
    </div>
    <editSkill :show="editSkills" @closeModel="editSkillsBlock" />
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
