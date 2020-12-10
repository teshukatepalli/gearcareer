<template>
  <div>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
      <div class="container">
        <div class="theme-header clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
            </button>
            <a href="index.html" class="navbar-brand"
              ><img src="../assets/gearcareer.png" alt=""
            /></a>
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item dropdown active">
                <router-link
                  to="/"
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/about" class="nav-link"
                      >About</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/jobs" class="nav-link"
                      >Job Page</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/job-details" class="nav-link"
                      >Job Details</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/myresume" class="dropdown-item"
                      >Resume Page</router-link
                    >
                  </li>
                  <li>
                    <!-- <a class="dropdown-item" to="/privacy-policy"
                      >Privacy Policy</a
                    > -->
                    <router-link to="/privacy-policy" class="dropdown-item"
                      >Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/faq" class="dropdown-item"
                      >FAQ</router-link
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="pricing.html"
                      >Pricing Tables</a
                    >
                  </li>
                  <li>
                    <router-link to="/contact" class="dropdown-item"
                      >Contact</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Candidates
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="browse-jobs.html"
                      >Browse Jobs</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="browse-categories.html"
                      >Browse Categories</a
                    >
                  </li>
                  <li>
                    <router-link to="/addresume" class="dropdown-item"
                      >Add Resume</router-link
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="manage-resumes.html"
                      >Manage Resumes</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="job-alerts.html"
                      >Job Alerts</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employers
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="post-job.html">Add Job</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="manage-jobs.html"
                      >Manage Jobs</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="manage-applications.html"
                      >Manage Applications</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="browse-resumes.html"
                      >Browse Resumes</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="blog.html"
                      >Blog - Right Sidebar</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="blog-left-sidebar.html"
                      >Blog - Left Sidebar</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="blog-full-width.html">
                      Blog full width</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="single-post.html"
                      >Blog Single Post</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact</router-link
                >
              </li>
              <li v-if="Profile.name" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{Profile.name}}
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/myresume" class="dropdown-item">
                      <span>Profile</span>
                    </router-link>
                  </li>
                  <li>
                    <a @click="logout()" class="dropdown-item">Log out</a>
                  </li>
                </ul>
              </li>
              <li v-else class="nav-item">
                <router-link to="/login" class="nav-link">
                  <span>Sign In</span>
                </router-link>
              </li>
              <li class="button-group">
                <router-link to="/postjob" class="button btn btn-common"
                  >Post a Job</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
      Authenticate: (state) => state.auth.iSAuthenticated,
    }),
  },
  created() {
    this.$store.dispatch("auth/user");
  },
  methods: {
    async logout() {
      console.log("Logout called");
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0px 0px 3px #ccc;
}
.navbar img {
  width: 60px;
}
.theme-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
