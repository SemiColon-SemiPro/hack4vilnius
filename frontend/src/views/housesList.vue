<script setup lang="ts">
import { ref } from 'vue';

const listOfHouses = ref<any[]>([]); // initialize it as an empty array or null

async function fetchHouses() {
  try {
    const response = await fetch('http://localhost:3000/api/v1/houses');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: any = await response.json();
    console.log(data);

    listOfHouses.value = data.houses; // set the data to listOfHouses ref here
  } catch (error) {
    console.error('There was a problem fetching houses:', error);
  }
}

fetchHouses();
</script>

<template>
  <h1 class="title">List of properties</h1>
  <div class="table-holder">
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Number of Rooms</th>
          <th>Size</th>
          <th>Address</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="house in listOfHouses" :key="house.id">
          <td>{{ house.id }}</td>
          <td>{{ house.available }}</td>
          <td>{{ house.useful_mq }}</td>
          <td>{{ house.house_number }} {{ house.street }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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

th {
  background-color: #f2f2f2;
}
</style>
