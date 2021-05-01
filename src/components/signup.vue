<template>
  <div>
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Create Your account</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Content section Start -->
    <section id="content" class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6 col-xs-12">
            <div class="page-login-form box">
              <h3>
                Create Your account
              </h3>
              <div class="flex-space-even text-center pb-4">
                <a :class="{ active: !employer }" @click="isEmployer(false)"
                  >Employe</a
                >
                <a :class="{ active: employer }" @click="isEmployer(true)"
                  >Employer</a
                >
              </div>
              <div class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="signup.name"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-envelope"></i>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      v-model="signup.email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      v-model="signup.password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-unlock"></i>
                    <input
                      type="password"
                      class="form-control"
                      v-model="signup.passwordConfirm"
                      placeholder="Retype Password"
                    />
                  </div>
                </div>
                <button
                  class="btn btn-common log-btn mt-3"
                  v-on:click="register()"
                >
                  Register
                </button>
                <p class="text-center">
                  Already have an account?
                  <router-link to="/login">Sign In</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content section End -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      signup: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      employer: false,
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    register() {
      this.$store.dispatch("auth/signup", this.signup);
    },
    isEmployer(value) {
      value
        ? ((this.signup.role = "employer"), (this.employer = true))
        : (this.employer = false);
    },
  },
};
</script>

<style scoped>
.active {
  border-bottom: 2px solid #26ae61;
  padding-bottom: 5px;
}
.flex-space-even {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
