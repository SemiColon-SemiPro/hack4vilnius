<template>
  <h1 class="title">Worker Login</h1>
  <div class="login-holder">
    <img id="worker-login-img" src="../../images/worker.png" alt="good worker">
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
.title {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #231557 0%, #006eff 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 60px;
}

#worker-login-img {
  margin: 30px;
  min-height: 100px;
  min-width: 100px;
  max-width: 400px;
}

.login-holder {
  min-height: 37vh;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
