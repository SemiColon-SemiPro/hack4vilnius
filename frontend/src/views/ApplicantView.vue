<template>
  <h1 class="title">User number: 3009209110</h1>

  <UserView />
  <div class="links-to-lists">
    <RouterLink :to="{ name: 'UserList' }"
      >Check out the list of available properties</RouterLink
    >
    <RouterLink :to="{ name: 'HouseList' }"
      >Check out the list of applicatnts</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import UserView from '../components/userView.vue';
</script>
