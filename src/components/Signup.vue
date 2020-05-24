<template>
  <section class="container mt-2">
    <form class="form-signin w-25 mx-auto" @submit.prevent="onSubmit">
      <h3 class="h3 mb-3 font-weight-normal">Please sign up</h3>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          class="form-control"
          autofocus
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          name="password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="nickname">nickname</label>
        <input type="text" name="nickname" class="form-control" v-model="nickname" id="nickname" />
      </div>
      <span class="help-block with-errors text-danger mt-2">{{ getError }}</span>
      <span
        v-for="error in errors"
        :key="`${error}-${Math.random()}`"
        class="d-block mt-2 alert alert-danger"
      >{{ error }}</span>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ["signUp", "getError"],
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      nickname: "",
      errors: []
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.email) {
        this.errors.push("email must not be empty");
        return false;
      }
      if (!this.password) {
        this.errors.push("password must not be empty");
        return false;
      }
      if (!this.nickname) {
        this.errors.push("nickname must not be empty");
      }

      if (!this.errors.length) {
        const formData = {
          email: this.email,
          password: this.password,
          nickname: this.nickname
        };
        this.signUp(formData);
      }
    }
  }
};
</script>