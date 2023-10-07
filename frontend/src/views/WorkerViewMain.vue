<template>
  <h1 class="title">Employee Dashboard</h1>
  <EmployeeDash />
</template>
<script setup lang="ts">
import EmployeeDash from "../components/employeeView.vue";

</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
}

.grid-applicants-properties {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Creates 4 equal columns */
  gap: 2vw;
  margin: 50px;
}

.box {
  border: 1px solid #ccc;
  padding: 20px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 25vh;
}

.suggestions,
.incoming-properties {
  grid-column: span 2;
  /* Makes these boxes span two columns */
}

/* Specific stylings for each box, if needed */
.new-applicants {
  background-color: #f9f9f9;
}

.waiting-applicants {
  background-color: #e9e9e9;
}

.offered-applicants {
  background-color: #d9d9d9;
}

.accepted-offer {
  background-color: #c9c9c9;
}

.suggestions {
  background-color: #b9b9b9;
}

.incoming-properties {
  background-color: #a9a9a9;
}
</style>

