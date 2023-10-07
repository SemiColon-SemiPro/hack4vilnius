<template id="">
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <!-- Text/Number Inputs -->
        <div class="form-group">
          <h4>Basic personal Information</h4>
          <input type="text" placeholder="ID Number" v-model="idNumber" />
          <input type="text" placeholder="Name" v-model="name" />
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <input type="email" placeholder="Email" v-model="email" />
          <input type="tel" placeholder="Phone Number" v-model="phoneNumber" />
        </div>

        <label for="incomeStatement"
          >Copy of yearly household income statement:</label
        >
        <input type="file" id="incomeStatement" ref="incomeStatement" />

        <label for="passport">ID/passport:</label>
        <input type="file" id="passport" ref="passport" />

        <label for="numFamilyMembers">Number of family members:</label>
        <input type="number" id="numFamilyMembers" ref="numFamilyMembers" />

        <label for="familyPassports">ID/passport for all family members:</label>

        <input
          type="file"
          id="familyPassports"
          ref="familyPassports"
          multiple
        />

        <label for="birthCertificates"
          >Birth certificates for family members under 16:</label
        >
        <input
          type="file"
          id="birthCertificates"
          ref="birthCertificates"
          multiple
        />
      </div>

      <!-- Checkboxes -->
      <div class="form-group">
        <h4>Mark what applies to you or a member of your household:</h4>
        <label>
          <input type="checkbox" v-model="youngFamilies" /> Young families
        </label>
        <label>
          <input type="checkbox" v-model="familiesRaisingChildren" /> Families
          raising three or more children
        </label>
        <label>
          <input type="checkbox" v-model="personsWithoutParentalCare" /> Persons
          left without parental care
        </label>
        <label>
          <input type="checkbox" v-model="disabledOrChronicIllness" /> Disabled
          persons, persons suffering from chronic diseases
        </label>
        <label>
          <input type="checkbox" v-model="tenantsOfSocialHousing" /> Tenants of
          social housing
        </label>
        <label>
          <input type="checkbox" v-model="general" /> General (all individuals
          and families not listed)
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Document Upload refs
const incomeStatement = ref();
const passport = ref();
const numFamilyMembers = ref();
const familyPassports = ref();
const birthCertificates = ref();

// Text/Number Input refs
const idNumber = ref('');
const name = ref('');
const lastName = ref('');
const email = ref('');
const phoneNumber = ref('');

// Checkbox refs
const youngFamilies = ref(false);
const familiesRaisingChildren = ref(false);
const personsWithoutParentalCare = ref(false);
const disabledOrChronicIllness = ref(false);
const tenantsOfSocialHousing = ref(false);
const general = ref(false);

const onSubmit = () => {
  const formData = {
    documents: {
      incomeStatement: incomeStatement.value?.name,
      passport: passport.value?.name,
      numFamilyMembers: numFamilyMembers.value,

      familyPassports: Array.from(familyPassports.value || []).map(
        file => file.name
      ),
      birthCertificates: Array.from(birthCertificates.value || []).map(
        file => file.name
      ),
    },
    personalDetails: {
      idNumber: idNumber.value,
      name: name.value,
      lastName: lastName.value,
      email: email.value,

      phoneNumber: phoneNumber.value,
    },
    checkboxData: {
      youngFamilies: youngFamilies.value,
      familiesRaisingChildren: familiesRaisingChildren.value,
      personsWithoutParentalCare: personsWithoutParentalCare.value,
      disabledOrChronicIllness: disabledOrChronicIllness.value,
      tenantsOfSocialHousing: tenantsOfSocialHousing.value,

      general: general.value,
    },
  };

  console.log(JSON.stringify(formData));
};
</script>

<style scoped>
.title {
}
.form-container {
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type='text'],
input[type='email'],
input[type='tel'],
input[type='number'] {
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
