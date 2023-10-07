<template>
  <div class="progress-container">
    <div
      v-for="(stage, index) in stages"
      :key="index"
      :class="['stage', { active: currentStage >= index }]"
    >
      {{ stage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stages = ["Submitted", "Accepted", "House Offered", "Completed"];
const currentStage = ref(1); // Change this value to represent the current stage (0 for Submitted, 3 for Completed)
</script>

<style scoped>
.progress-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.stage {
  width: 25%;
  padding: 10px;
  background-color: #e0e0e0;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.stage.active {
  background-color: #4caf50;
  color: white;
}
</style>
