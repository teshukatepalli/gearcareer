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
              <div class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="signup.username"
                      placeholder="Username"
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
                      v-model="verifyPassword"
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
        username: "",
        email: "",
        password: "",
      },
      verifyPassword: "",
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    register() {
      this.$store.dispatch("auth/signup", this.signup);
    },
  },
};
</script>

<style lang="scss" scoped></style>
