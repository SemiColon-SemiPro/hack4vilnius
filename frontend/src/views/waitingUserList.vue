<template>
  <h1 class="title">Waiting Applications</h1>
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
        <tr v-for="(house, index) in houses" :key="house.address">
          <td>{{ house.size }}</td>
          <td>{{ house.numberOfRooms }}</td>
          <td>{{ house.floor }}</td>
          <td><button type="button" @click="cancelTheOffer(index)">Make an Offer</button></td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
function cancelTheOffer(index: number) {
  houses.value.splice(index, 1);
} const houses = ref([
  {
    size: "100 sqm",
    numberOfRooms: 3,
    floor: 2,
    address: "123 Pigu Street, Vilnius",
    price: "200 UEUR",
  },
  {
    size: "150 sqm",
    numberOfRooms: 4,
    floor: 5,
    address: "456 Zidu Avenue, Vilnius",
    price: "25 EUR",
  },
  {
    size: "80 sqm",
    numberOfRooms: 2,
    floor: 1,
    address: "79 Egle Blvd, Vilnius",
    price: "180",
  },
  {
    size: "100 sqm",
    numberOfRooms: 3,
    floor: 2,
    address: "123 Pigu Street, Vilnius",
    price: "200 UEUR",
  },
  {
    size: "150 sqm",
    numberOfRooms: 4,
    floor: 5,
    address: "456 Zidu Avenue, Vilnius",
    price: "25 EUR",
  },
  {
    size: "80 sqm",
    numberOfRooms: 2,
    floor: 1,
    address: "79 Egle Blvd, Vilnius",
    price: "180",
  },
]);

const listOfHouses = ref<any[]>([]); // initialize it as an empty array or null

async function fetchHouses() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/houses");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any = await response.json();
    console.log(response);

    listOfHouses.value = data; // set the data to listOfHouses ref here
  } catch (error) {
    console.error("There was a problem fetching houses:", error);
  }
}

fetchHouses();
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

th {
  background-color: #f2f2f2;
}
</style>