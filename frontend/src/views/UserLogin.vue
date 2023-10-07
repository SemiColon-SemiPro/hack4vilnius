<template>
  <h1 class="title">User Login</h1>
  <div class="login-holder">
    <div>will need to find a good pic here</div>
    <LogIn />
  </div>
</template>

<script setup lang="ts">
import LogIn from "../components/LogIn.vue";
</script>
<style>
.login-holder {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
