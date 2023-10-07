<template>
  <h1 class="title">User number: 3009209110</h1>

  <UserView />
  <div class="links-to-lists">
    <RouterLink :to="{ name: 'UserList' }" class="btn btn-primary"
      >Check out your position in the waiting list</RouterLink
    >
    <RouterLink :to="{ name: 'HouseList' }" class="btn btn-primary"
      >Check out the list of available properties</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import UserView from "../components/userView.vue";
</script>
<style>
.links-to-lists {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
</style>
