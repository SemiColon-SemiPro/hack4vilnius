<template>

  <div class="container">
    <div class="row">
      <h1 class="title">Waiting List</h1>
    </div>
    <div class="row">
      <div class="table-holder">
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Score</th>
              <th>Application ID</th>
              <th>Days Waited</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="application in listOfApplications" :key="application.id">
              <td>{{ listOfApplications.indexOf(application) + 1 }}</td>
              <td>{{ application.score }}</td>
              <td>{{ application.id }}</td>
              <td>{{ getRandomDays(10) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

function getRandomDays(max: number) {
  return Math.floor(Math.random() * max);
}

const listOfApplications = ref<any[]>([]); // initialize it as an empty array or null

async function fetchApplications() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/applications?status=pending");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any = await response.json();
    console.log(data);

    listOfApplications.value = data.applications; // set the data to listOfHouses ref here
  } catch (error) {
    console.error("There was a problem fetching applications:", error);
  }
}

fetchApplications();
</script>

<style>
.table-holder {
  padding: 30px;
}

table {
  padding-left: 20px;
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  color: azure;
  font-size: 1.7rem;
  border: solid black 3px;
}

thead {
  background-color: #0e60ad;
}

.table-holder tr:nth-child(even) {
  background: rgb(192, 221, 240);
}

.table-holder tr {
  font-size: 1.25rem;
}
</style>
