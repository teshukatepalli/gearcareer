<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>Login</h3>
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
                Login
              </h3>
              <div class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      v-model="payload.email"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      v-model="payload.password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Keep Me Signed In</label
                  >
                </div>
                <button class="btn btn-common log-btn" v-on:click="login()">
                  Submit
                </button>
              </div>
              <ul class="form-links">
                <li class="text-center">
                  <router-link to="/signup">Don't have an account?</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      payload: {
        email: "siva@gmail.com",
        password: "teshu143cherry",
      },
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
