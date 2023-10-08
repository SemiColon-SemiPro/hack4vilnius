<template>
  <h1 class="title">User Login</h1>
  <div class="login-holder">
    <img id="user-login-img" src="../../images/house.png" alt="nice house">
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

#user-login-img {
  margin: 30px;
  min-height: 100px;
  min-width: 100px;
  max-width: 400px;
}

</style>
