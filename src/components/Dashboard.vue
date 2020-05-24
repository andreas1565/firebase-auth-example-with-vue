<template>
  <div>
    <b-jumbotron class="mt-2" header="BootstrapVue" lead="welcome to dashboard">
      <p>Email: {{email}}</p>
      <p>Nickname: {{GetUserName}}</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: ["GetUserName", "email"],
  name: "Dashboard"
};
</script>