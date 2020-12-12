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
      <h4>UI/UX Designer</h4>
      <h5>Bannana INC.</h5>
      <span class="date">Fab 2017-Present(5year)</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero,
        dolores, officia quibusdam architecto sapiente eos voluptas odit ab
        veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque
        incidunt!
      </p>
      <p><a href="#">4 Projects</a></p>
      <br />
      <h4>UI Designer</h4>
      <h5>Whale Creative</h5>
      <span class="date">Fab 2017-Present(2year)</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero,
        dolores, officia quibusdam architecto sapiente eos voluptas odit ab
        veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque
        incidunt!
      </p>
      <p><a href="#">4 Projects</a></p>
    </div>
    <WorkExperience :show="workExperience" @closeModel="editWorkExperience" />
    <div class="education item">
      <h3>Education</h3>
      <h4>Massachusetts Institute Of Technology</h4>
      <p>Bachelor of Computer Science</p>
      <span class="date">2010-2014</span>
      <br />
      <h4>Massachusetts Institute Of Technology</h4>
      <p>Bachelor of Computer Science</p>
      <span class="date">2010-2014</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import editprofile from "./editProfile.vue";
import WorkExperience from "./WorkExperience.vue";
export default {
  name: "profile",
  components: {
    editprofile,
    WorkExperience,
  },
  data() {
    return {
      profileModel: false,
      workExperience: false,
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
  },
};
</script>

<style scoped>
a {
  color: #26ae61;
}
</style>
