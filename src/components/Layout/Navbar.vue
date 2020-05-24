<template>
  <b-navbar toggleable="lg" type="dark" variant="info" id="menu">
    <b-navbar-brand href="#">auth example</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="!isLoggedIn" to="/login" exact exact-active-class="active">Login</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" to="/signup" exact exact-active-class="active">Signup</b-nav-item>
        <b-nav-item v-if="isLoggedIn" @click="onClick">Logout</b-nav-item>
        <b-nav-item v-if="isLoggedIn" to="/dashboard" exact exact-active-class="active">Dashboard</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { auth } from "../../firebase";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    if (auth.currentUser) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    onClick() {
      this.logout();
      this.$router.go({ path: this.$router.path });
    }
  }
};
</script>