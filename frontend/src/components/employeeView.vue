<template>
  <div class="employee-info">
    <div>Name: Dovydas Krypsis</div>
    <div>Employee ID: ST77898</div>
  </div>
  <div class="grid-applicants-properties">
    <router-link to="/user-list-ranking/new">
      <div class="box new-applicants">
        <span>You have</span>
        <h2>{{ newApplicants }}</h2>
        <span>new applicants</span>
      </div>
    </router-link>
    <router-link to="/user-list-ranking/waiting">
      <div class="box waiting-applicants"><span>You have</span>
        <h2>{{ waitingApplicants }}</h2>
        <span>awaiting applicants</span>
      </div>
    </router-link>
    <router-link to="/user-list-ranking/offered">

      <div class="box offered-applicants"><span>You have offered</span>
        <h2>{{ offeredApplicants }}</h2>
        <span>a property to move in</span>
      </div>
    </router-link>
    <router-link to="/user-list-ranking/accepted">

      <div class="box accepted-offer"><span>Because of you</span>
        <h2>{{ acceptedOfferedApplicants }}</h2>
        <span>applicants found a home</span>
      </div>
    </router-link>
    <router-link to="/matches">

      <div class="box suggestions">Suggestions to Offer Housing</div>
    </router-link>
    <router-link to="/incoming-properties">

      <div class="box incoming-properties">Incoming Properties to Approve</div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
const newApplicants = ref(10)
const waitingApplicants = ref(340)
const offeredApplicants = ref(8)
const acceptedOfferedApplicants = ref(982)

</script>
<style scoped>
.employee-info {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
}

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