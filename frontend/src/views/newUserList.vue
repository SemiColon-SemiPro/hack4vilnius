<template>
  <h1 class="title">New Applications</h1>
  <div class="table-holder">
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Application ID</th>
          <th>Days Waited</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in listOfApplications" :key="app.id">
          <td>{{ app.score }}</td>

          <td>
            <router-link to="/indApplication" id="app-id">
              {{ app.id }}
            </router-link>
          </td>
          <td>8</td>
          <td>
            <button type="button" @click="cancelApplication(app.id)">
              Approve
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import router from '../router/index';
function cancelApplication(id: string) {
  let idx = 0;
  listOfApplications.value.forEach(app => {
    if (app.id === id) {
      idx = listOfApplications.value.indexOf(app);
    }
  });
  listOfApplications.value.splice(idx, 1);
}

const listOfApplications = ref<any[]>([]); // initialize it as an empty array or null

async function fetchApplications() {
  try {
    const response = await fetch('http://localhost:3000/api/v1/applications');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: any = await response.json();
    console.log(data);

    listOfApplications.value = data.applications; // set the data to listOfHouses ref here
  } catch (error) {
    console.error('There was a problem fetching houses:', error);
  }
}

fetchApplications();
</script>

<style scoped>
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

#app-id {
  color: rgba(0, 0, 0, 0.635);
}
</style>
