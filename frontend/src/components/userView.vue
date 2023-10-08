<template>
  <div id="dates">
    <div id="submit-date">
      Submission date: {{ formatDate(dateOfSubmission) }}
    </div>
    <div>You have been in line for {{ daysInLine }} days</div>
  </div>
  <div class="grid-container">
    <div class="todo-notification">
      <h3 class="notification">You have 2 notifications</h3>
      <ul>
        <li>Submit ID of all members of your family</li>
        <li>Get UZT approval</li>
      </ul>
    </div>
    <div class="waiting-number">
      <span>You are number</span>
      <h2>5</h2>
      <span>in the waiting list</span>
    </div>

    <div class="waiting-number">
      <span>There are</span>
      <h2>4</h2>
      <span>availabe houses</span>
    </div>
  </div>

  <!-- Application Status -->
  <div class="app-status">
    <PBar />
  </div>
</template>

<script setup lang="ts">
import PBar from "../components/progressBar.vue";
const dateOfSubmission: any = new Date(2023, 9, 1);
const currentDate: any = new Date();
const msDifference = currentDate - dateOfSubmission;

const daysInLine = Math.floor(msDifference / (1000 * 60 * 60 * 24));

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0"); // ensures a 2-digit day
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // ensures a 2-digit month
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
console.log(daysInLine);
</script>

<style scoped>
span {
  font-size: 32px;
}
.grid-container {
  padding: 20px;  
  display: grid;
  grid-template-columns: 30vw 30vw 30vw;
  column-gap: 3vw; /* Adjust as needed for space between the grid items */
}
#dates {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 600;
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
