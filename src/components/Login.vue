<template>
  <div>
    <form class="form-signin w-25 mx-auto" @submit.prevent="onSubmit">
      <h3 class="h3 mb-3 font-weight-normal">Login</h3>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          class="form-control"
          placeholder="Email address"
          autofocus
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          name="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <span class="help-block with-errors text-danger mt-2">{{ getError }}</span>
      <span
        v-for="error in errors"
        :key="`${error}-${Math.random()}`"
        class="d-block mt-2 alert alert-danger"
      >{{ error }}</span>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["signIn", "getError"],
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
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
      if (!this.errors.length) {
        const formData = {
          email: this.email,
          password: this.password
        };
        this.signIn(formData);
      }
    }
  }
};
</script>