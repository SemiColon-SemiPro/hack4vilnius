<template>
    <div class="container">
        <section class="applicant-section">
            <h2>Applicant Details</h2>
            <p><strong>Personal Number:</strong> {{ applicantDetails.personalNumber }}</p>
            <p><strong>First Name:</strong> {{ applicantDetails.firstName }}</p>
            <p><strong>Last Name:</strong> {{ applicantDetails.lastName }}</p>
            <p><strong>Birth Date:</strong> {{ applicantDetails.birthDate }}</p>
            <p><strong>Email:</strong> {{ applicantDetails.email }}</p>
            <p><strong>Phone Number:</strong> {{ applicantDetails.phoneNumber }}</p>
            <p><strong>Disability Level:</strong> {{ applicantDetails.disabilityLevel }}</p>
            <p><strong>Household Income:</strong> {{ applicantDetails.householdIncome }}</p>
            <p><strong>Size of Occupied Property:</strong> {{ applicantDetails.sizeOfOccupiedProperty }}</p>
            <div class="address">
                <h3>Address</h3>
                <p><strong>City:</strong> {{ applicantDetails.address.city }}</p>
                <p><strong>District:</strong> {{ applicantDetails.address.district }}</p>
                <p><strong>Street:</strong> {{ applicantDetails.address.street }}</p>
                <p><strong>House Number:</strong> {{ applicantDetails.address.houseNumber }}</p>
                <p><strong>Flat Number:</strong> {{ applicantDetails.address.flatNumber }}</p>
                <p><strong>ZIP Code:</strong> {{ applicantDetails.address.zipCode }}</p>
            </div>
        </section>

        <section class="family-section">
            <h2>Family Members</h2>
            <p><strong>Count:</strong> {{ FamilyMembers.count }}</p>
            <div v-for="member in FamilyMembers.familyDetails" :key="member.idNumber" class="member">
                <p><strong>Name:</strong> {{ member.name }}</p>
                <p><strong>Last Name:</strong> {{ member.lastName }}</p>
                <p><strong>Date of Birth:</strong> {{ member.dateOfBirth }}</p>
                <p><strong>Disability Level:</strong> {{ member.disabilityLevel }}</p>
                <p><strong>ID Number:</strong> {{ member.idNumber }}</p>
            </div>
        </section>

        <section class="application-type">
            <h2>Application Type</h2>
            <p><strong>Young Families:</strong> {{ applicationType.youngFamilies }}</p>
            <p><strong>Tenants Of Social Housing:</strong> {{ applicationType.tenantsOfSocialHousing }}</p>
        </section>
    </div>
</template>
  

<script setup>
import { ref } from 'vue';

const applicantDetails = {
    personalNumber: "94u0943u5",
    firstName: "John",
    lastName: "Doe",
    birthDate: "2023-11-03",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    disabilityLevel: "level1",
    householdIncome: 233,
    sizeOfOccupiedProperty: "ffpfpfpf",
    address: {
        city: "How",
        district: "deep",
        street: "is",
        houseNumber: "your",
        flatNumber: "love",
        zipCode: "it"
    }
};

const FamilyMembers = {
    count: 2,
    familyDetails: [
        {
            name: "Default Name",
            lastName: "Default Last Name",
            dateOfBirth: "01/01/2000",
            disabilityLevel: "none",
            idNumber: "123",
            disable: "level2"
        },
        {
            name: "Default Name",
            lastName: "Default Last Name",
            dateOfBirth: "01/01/2000",
            disabilityLevel: "none",
            idNumber: "123",
            disable: "level1"
        }
    ]
};

const applicationType = {
    youngFamilies: true,
    tenantsOfSocialHousing: true
};
</script>
  
  
<style scoped>
.container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}

h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    margin-top: 0;
}

.address,
.member {
    background-color: #f9f9f9;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
}

.application-type {
    background-color: #e9ecef;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
}
</style>
  