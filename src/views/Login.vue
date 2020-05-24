<template>
  <Login :signIn="signIn" :getError="getError" />
</template>

<script>
import Login from "../components/Login.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Login
  },
  methods: {
    ...mapActions(["signIn"])
  },
  computed: mapGetters(["getError"])
};
</script>