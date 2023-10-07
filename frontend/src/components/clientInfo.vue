<template id="">
  <div class="custom-container">
    <div class="custom-form">
      <form @submit.prevent="onSubmit">
        <!-- Text/Number Inputs -->
        <div class="form-group">
          <h4>Basic personal Information</h4>
          <div class="row">
            <div class="col-12 col-md-6">
              <input type="text" placeholder="Name" v-model="name" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" placeholder="Last Name" v-model="lastName" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" placeholder="ID Number" v-model="idNumber" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="email" placeholder="Email" v-model="email" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="tel" placeholder="Phone Number" v-model="phoneNumber" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" placeholder="Address" v-model="address" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="number" placeholder="income" v-model="incomeHousehold" required />
            </div>
            <div class="selection-dis">
              <label>Disability level</label>
              <select name="disabilityLevel" v-model="persDisable">
                <option value="none"></option>
                <option value="level1">Level 1</option>
                <option value="level2">Level 2</option>
                <option value="level3">Level 3</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <h4>Address Information</h4>
            <div class="row">
              <input type="text" placeholder="City" v-model="city" required />
              <input type="text" placeholder="District" v-model="district" required />
              <input type="text" placeholder="Street" v-model="street" required />
              <input type="text" placeholder="House Number" v-model="houseNumber" required />
              <input type="text" placeholder="Flat Number (optional)" v-model="flatNumber" />
              <input type="text" placeholder="ZIP Code" v-model="zipCode" required />
            </div>
          </div>

          <label class="label-up" for="incomeStatement">Copy of yearly household income statement:</label>
          <input type="file" id="incomeStatement" ref="incomeStatement" />

          <label class="label-up" for="passport">ID/passport:</label>
          <input type="file" id="passport" ref="passport" />

          <label class="label-up" for="numFamilyMembers">Number of family members (excluding the main applicant):</label>
          <input type="number" id="numFamilyMembers" v-model="numFamilyMembers" />

          <div v-for="(member, index) in numFamilyMembers" :key="index" class="familyMember">
            <h3>Family Member {{ index + 2 }}</h3>
            <div class="in">
              <div class="names">
                <input type="text" placeholder="Name of the Family Member" v-model="familyMembers[index].name" required />
                <input type="text" placeholder="Last Name of the Family Member" v-model="familyMembers[index].lastName"
                  required />
                <input type="text" placeholder="Birth date DD/MM/YYYY" v-model="familyMembers[index].dateOfBirth"
                  required />
                <div class="selection-dis">
                  <label>Disability level</label>
                  <select id="disability-level" name="disabilityLevel" v-model="familyMembers[index].disable">
                    <option value="none"></option>
                    <option value="level1">Level 1</option>
                    <option value="level2">Level 2</option>
                    <option value="level3">Level 3</option>
                  </select>
                </div>
              </div>
              <div class="documents">

                <div class="documents">
                  <label class="label-up" for="familyPassports">ID/passport (adult family members):</label>

                  <input type="file" id="familyPassports" ref="familyPassports" multiple />

                  <label class="label-up" for="birthCertificates">Birth certificates for family members under 16:</label>
                  <input type="file" id="birthCertificates" ref="birthCertificates" multiple />
                </div>
              </div>
            </div>
          </div>

          <label for="incomeStatement">Copy of yearly household income statement:</label>
          <input type="file" id="incomeStatement" ref="incomeStatement" />

          <label for="passport">ID/passport:</label>
          <input type="file" id="passport" ref="passport" />



          <label for="birthCertificates">Birth certificates for family members under 16:</label>
          <input type="file" id="birthCertificates" ref="birthCertificates" multiple />
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
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

// Document Upload refs
const incomeStatement = ref("income");
const passport = ref("pass");
const numFamilyMembers = ref(0);
const familyMembers = ref([]);
const persDisable = ref("none")


const city = ref('How');
const district = ref(' deep');
const street = ref('is');
const houseNumber = ref('your');
const flatNumber = ref('love');
const zipCode = ref('it');

const updateFamilyMembers = () => {
  const newLength = numFamilyMembers.value;
  while (familyMembers.value.length < newLength) {
    familyMembers.value.push({
      name: 'Default Name',
      lastName: 'Default Last Name',
      dateOfBirth: '01/01/2000',
      disabilityLevel: "none"
    });
  }
  while (familyMembers.value.length > newLength) {
    familyMembers.value.pop();
  }
};

watch(numFamilyMembers, updateFamilyMembers);

// Text/Number Input refs
const idNumber = ref('94u0943u5');
const name = ref('John');
const lastName = ref('Doe');
const email = ref('john.doe@example.com');
const phoneNumber = ref('123-456-7890');
const address = ref("ffpfpfpf")
const incomeHousehold = ref()
// Checkbox refs
const youngFamilies = ref(false);
const familiesRaisingChildren = ref(false);
const personsWithoutParentalCare = ref(false);
const disabledOrChronicIllness = ref(false);
const tenantsOfSocialHousing = ref(false);
const general = ref(false);  // You forgot to add this in your ref list

const onSubmit = () => {
  const formData = {
    applicantDetails: {
      personalNumber: idNumber.value,
      firstName: name.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,

      disabilityLevel: persDisable.value,
      householdIncome: incomeHousehold.value,
      sizeOfOccupiedProperty: address.value,
      address: { city: city.value, district: district.value, street: street.value, houseNumber: houseNumber.value, flatNumber: flatNumber.value, zipCode: zipCode.value }
    },
    FamilyMembers: { count: numFamilyMembers.value, familyDetails: familyMembers.value, },
    applicationType: {
      youngFamilies: youngFamilies.value,
      tenantsOfSocialHousing: tenantsOfSocialHousing.value,
    },
  };

  console.log(JSON.stringify(formData));
};
</script>


<style scoped>
.title {}

.selection-dis {
  display: flex;
  flex-direction: row;
}

.form-container {
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  padding: 5px;
  display: block;
  margin-bottom: 10px;
}

.label-up {
  font-weight: bold;
  font-size: 1.1em;
  padding-top: 20px;
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

.custom-form {
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.custom-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.custom-col {
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.custom-col-half {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
}

.custom-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.familyMemeber {}

.in {
  margin: 5px;
  border: solid;
  border-width: 1px;
  border-color: #0056b3;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.names {
  padding-top: 20px
}
</style>
