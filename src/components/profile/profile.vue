<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-header">
              <h3 v-if="Profile.name">{{ Profile.name }}</h3>
              <h3 v-else>Name</h3>
              <p v-if="Profile.email">{{ Profile.email }}</p>
              <p v-else>email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Start Content -->
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
            <div class="right-sideabr">
              <h4>Manage Account</h4>
              {{Profile}}
              <ul v-if="Profile.role === 'user'" class="list-item">
                <li>
                  <router-link
                    to="/myresume"
                    :class="{ active: $route.name === 'myresume' }"
                    >My Resume</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/bookmarked"
                    :class="{ active: $route.name === 'bookmarked' }"
                    >Bookmarked Jobs</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/notifications"
                    :class="{ active: $route.name === 'notifications' }"
                    >Notifications
                    <span class="notinumber">2</span></router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/manage-applications"
                    :class="{ active: $route.name === 'manage-applications' }"
                    >Manage Applications</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/job-alerts"
                    :class="{ active: $route.name === 'job-alertsd' }"
                    >Job Alerts</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/change-password"
                    :class="{ active: $route.name === 'change-password' }"
                    >Change Password</router-link
                  >
                </li>
                <li><a @click="logout()">Sing Out</a></li>
              </ul>
              <ul v-else class="list-item">
                <li>
                  <router-link
                    to="/my-company"
                    :class="{ active: $route.name === 'my-company' }"
                    >My Company</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/postjob"
                    :class="{ active: $route.name === 'postjob' }"
                    >Add Job</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/manage-jobs"
                    :class="{ active: $route.name === 'manage-jobs' }"
                    >Manage Jobs</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/manage-applications"
                    :class="{ active: $route.name === 'manage-applications' }"
                    >Manage Applications</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/browseresumes"
                    :class="{ active: $route.name === 'browseresumes' }"
                    >Browse Resumes</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/change-password"
                    :class="{ active: $route.name === 'change-password' }"
                    >Change Password</router-link
                  >
                </li>
                <li><a @click="logout()">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-xs-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {
    // if (this.Profile.user !== "user") {
    //   this.$router.currentRoute.path !== "/my-company"
    //     ? this.$router.push("/my-company")
    //     : "";
    // }
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
      Authenticate: (state) => state.auth.iSAuthenticated,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style lang="scss" scoped></style>
