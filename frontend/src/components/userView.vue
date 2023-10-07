<template>
  <div class="grid-container">
    <!-- To-Do Items & Notification -->
    <div class="todo-notification">
      <div class="notification">You have 2 new tasks!</div>
      <ul>
        <li>Submit the profs from UZT</li>
        <li>Meeting October 9th, 13:25</li>
      </ul>

      <!-- Notification (just an example structure) -->
    </div>

    <!-- Current Number in Waiting List -->
    <div class="waiting-number">
      <span>You are number</span>
      <h2>5</h2>
      <span>in the waiting list</span>
      <!-- This is a placeholder number. Replace with your dynamic data. -->
    </div>
  </div>

  <!-- Application Status -->
  <div class="app-status">
    Your application is pending.
    <!-- Replace with your dynamic data. -->
  </div>
</template>

<style scoped>
span {
  font-size: 32px;
}
.grid-container {
  display: grid;
  grid-template-columns: 30vw 30vw;
  gap: 5vw; /* Adjust as needed for space between the grid items */
}

.todo-notification {
  /* Style as needed */
  border: 1px solid #ccc;
  padding: 20px;
}

.notification {
  /* Add some basic styles */
  background-color: #f2f2f2;
  padding: 10px;
  margin-top: 10px;
}

.waiting-number {
  /* Centering the number */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem; /* Adjust the font size as needed */
  height: 30vh;
  border: 1px solid #ccc;
}

.app-status {
  width: 100vw;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ccc;
  margin-top: 20px; /* Adjust as needed */
}
</style>

<script setup></script>
