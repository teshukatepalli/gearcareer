<template>
  <div>
    <Hero />
    <Categories />
    <FeaturedJobs />
    <SearchJob />
    <HowItWorks />
    <LatestJobs />
    <Review />
    <Pricing />
    <BlogPost />
  </div>
</template>

<script>
import Hero from "../components/hero.vue";
import Categories from "../components/categories.vue";
import FeaturedJobs from "../components/FeaturedJobs.vue";
import SearchJob from "../components/SearchJobs.vue";
import HowItWorks from "../components/HowItWorks.vue";
import LatestJobs from "../components/LatestJobs.vue";
import Review from "../components/Testmonial.vue";
import Pricing from "../components/Pricing.vue";
import BlogPost from "../components/BlogSpot.vue";
import Modal from "../components/modal.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    Hero,
    Categories,
    FeaturedJobs,
    SearchJob,
    HowItWorks,
    LatestJobs,
    Review,
    Pricing,
    BlogPost,
    Modal,
  },
};
</script>

<style scoped></style>
