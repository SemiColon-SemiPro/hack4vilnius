<template>
  <div class="container">
    <div class="row">
      <h1 class="title">User Login</h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <img id="user-login-img" src="../../images/house.png" alt="nice house">
      </div>
      <div class="col-12 col-md-6">
        <LogIn />
      </div>
    </div>
  </div>
  <!-- <div class="login-holder">
  </div> -->
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
