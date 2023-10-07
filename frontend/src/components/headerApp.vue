<script setup lang="ts"></script>

<template>
  <div class="header">
    <header id="header">
      <nav id="navigation">
        <RouterLink :to="{ name: 'WorkerLogin' }">Employee LogIn</RouterLink>
        <RouterLink :to="{ name: 'ApplicantLogin' }">User LogIn</RouterLink>
        <RouterLink :to="{ name: 'Regist' }">Create an Application</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style>
a {
  white-space: nowrap;
}
.header {
  padding-top: 2%;
  min-height: 100px;
  width: 100%;
  display: flex;
  background: linear-gradient(to right, rgb(1, 86, 189), black);
}

#navigation {
  display: flex;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

#navigation a.router-link-exact-active {
  color: rgb(2, 2, 2);
}

#navigation a.router-link-exact-active:hover {
  background-color: transparent;
}

#navigation a {
  color: rgb(246, 244, 244);
  display: inline-block;
  padding: 10px;
  border-left: 1mm solid rgb(244, 242, 242);
  font-size: 32px;
}
#navigation {
  text-align: left;
  font-size: 1rem;
  margin-left: 83px;
  padding: 1rem 0;
  margin-top: 1rem;
}

#navigation a:first-of-type {
  border: 0;
}
</style>
