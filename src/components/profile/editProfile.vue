<template>
  <vueSlideoutPanel v-model="show" :widths="['50%']" @close="close()">
    <div class="hidden-overflow p-2">
      <h3 class="text-center pb-2 post-header">Profile information</h3>
      <div class="form-group">
        <label class="control-label">Name</label>
        <input
          type="text"
          v-model="Profile.name"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label class="control-label"></label>
        <label class="control-label">Email</label>
        <input
          type="text"
          v-model="Profile.email"
          class="form-control"
          placeholder="Your@domain.com"
        />
      </div>
      <div class="form-group">
        <label class="control-label"></label>
        <label class="control-label">Phone number</label>
        <input
          type="text"
          v-model="Profile.mobile"
          class="form-control"
          placeholder="Mobile number"
        />
      </div>
      <div class="form-group">
        <label class="control-label">About me</label>
        <textarea
          class="form-control p-3"
          v-model="Profile.about"
          rows="7"
        ></textarea>
      </div>
      <div class="form-group">
        <label class="control-label">Profession Title</label>
        <input
          type="text"
          v-model="Profile.profession"
          class="form-control"
          placeholder="Headline (e.g. Front-end developer)"
        />
      </div>
      <div class="form-group">
        <h3>Address</h3>
        <div class="row">
          <div class="form-group col-md-6">
            <label class="control-label">Door No</label>
            <input
              type="text"
              v-model="address.door_no"
              class="form-control"
              placeholder="Door no"
            />
          </div>
          <div class="from-group col-md-6">
            <label class="control-label">Street</label>
            <input
              type="text"
              v-model="address.street"
              class="form-control"
              placeholder="Street"
            />
          </div>
          <div class="from-group col-md-6">
            <label class="control-label">City</label>
            <input
              type="text"
              v-model="address.city"
              class="form-control"
              placeholder="City"
            />
          </div>
          <div class="from-group col-md-6">
            <label class="control-label">State / Province</label>
            <input
              type="text"
              v-model="address.state"
              class="form-control"
              placeholder="State / Province"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="form-group col-md-6">
            <label class="control-label">Postal / Zip Code</label>
            <input
              type="text"
              v-model="address.zipcode"
              class="form-control"
              placeholder="Postal /Zip Code"
            />
          </div>
          <div class="from-group col-md-6">
            <label class="control-label">Country</label>
            <input
              type="text"
              v-model="address.country"
              class="form-control"
              placeholder="Country"
            />
          </div>
        </div>
      </div>
      <h3>Social Links</h3>
      <div class="form-group">
        <label class="control-label">Linkedin</label>
        <input
          type="text"
          v-model="Profile.name"
          class="form-control"
          placeholder="http://"
        />
      </div>
    </div>
    <button @click="updateUser()" class="btn btn-common">
      Save
    </button>
  </vueSlideoutPanel>
</template>

<script>
import vueSlideoutPanel from "vue-slideout-panel";
import { mapState } from "vuex";
export default {
  components: {
    vueSlideoutPanel,
  },
  props: ["show"],
  data() {
    return {
      address: {
        door_no: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
    };
  },
  computed: {
    ...mapState({
      Profile: (state) => state.auth.profile,
    }),
  },
  methods: {
    close() {
      console.log("close called");
      this.$emit("closeModel");
    },
    updateUser() {
      console.log(this.Profile);
      this.Profile.address.address = this.Address;
      this.$store.dispatch("auth/update", this.Profile);
      this.close();
    },
  },
};
</script>

<style scoped>
.hidden-overflow {
  overflow: hidden;
  color: #000;
}
h3 {
  font-size: 18px;
}
</style>
