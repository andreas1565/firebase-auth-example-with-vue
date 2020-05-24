<template>
  <div>
    <Signup :signUp="signUp" :getError="getError" />
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Signup
  },
  methods: {
    ...mapActions(["signUp"])
  },
  computed: mapGetters(["getError"])
};
</script>

<style>
</style>