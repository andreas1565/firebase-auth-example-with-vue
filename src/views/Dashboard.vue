<template>
  <Dashboard :GetUserName="GetUserName" :email="email" />
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
import { auth } from "../firebase";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      email: auth.currentUser.email
    };
  },
  components: {
    Dashboard
  },
  methods: {
    ...mapActions(["GetUserNickName", "initRealtimeListeners"])
  },
  computed: mapGetters(["GetUserName"]),
  created() {
    this.initRealtimeListeners();
    this.GetUserNickName(auth.currentUser.uid);
  }
};
</script>