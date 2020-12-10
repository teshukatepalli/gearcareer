<template>
  <div class="inner-box my-resume">
    <div class="author-resume">
      <div class="thumb">
        <img src="assets/img/resume/img-1.png" alt="" />
      </div>
      <div class="author-info">
        <a @click="editProfile" class="btn-added float-right"
          ><i class="ti-plus"></i>edit
        </a>
        <h3>{{Profile.name}}</h3>
        <p class="sub-title">UI/UX Designer</p>
        <p>
          <span class="address" v-if="checkAddress(Profile.address)"
            ><i class="lni-map-marker"></i>{{checkAddress(Profile.address)}}</span>
          <span><i class="ti-phone"></i>(+01) 211-123-5678</span>
        </p>
        <div class="social-link">
          <a href="#" class="Twitter"><i class="lni-twitter-filled"></i></a>
          <a href="#" class="facebook"><i class="lni-facebook-filled"></i></a>
          <a href="#" class="google"><i class="lni-google-plus"></i></a>
          <a href="#" class="linkedin"><i class="lni-linkedin-fill"></i></a>
        </div>
      </div>
    </div>
    <div class="about-me item">
      <h3>About Me</h3>
      <p>
        Nullam semper erat arcu, ac tincidunt sem venenatis vel. Curabitur a
        dolor ac ligula fermentum eusmod ac ullamcorper nulla. Integer blandit
        uitricies aliquam. Pellentesque quis dui varius, dapibus vilit id,
        ipsum. Morbi ac eros feugiat, lacinia elit ut, elementum turpis.
        Curabitur justo sapien, tempus sit amet ruturm eu, commodo eu lacus.
        Morbi in ligula nibh. Maecenas ut mi at odio hendririt eleif end tempor
        vitae augue. Fusce eget arcu et nibh dapibus maximus consectetur in est.
        Sed iaculis Luctus nibh sed veneatis.
      </p>
    </div>
    <div class="work-experence item">
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
export default {
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
      Authenticate: (state) => state.auth.iSAuthenticated,
    }),
  },
  methods:{
    editProfile() {
      console.log("Edit called");
    },
    checkAddress(address) {
      return address.address ? address.address : null
    }
  }
};
</script>

<style scoped>
a {
  color: #26ae61;
}
</style>
