function calculateDisabilitySum(jsonData) {
	const results = [];

	function calculateFamilyDisabilitySum(familyMembers) {
		return familyMembers.reduce((sum, familyMember) => {
			const disabilityLevel = familyMember.disabilityLevel || 0;
			return sum + disabilityLevel;
		}, 0);
	}

	function calculateApplicantDisabilityScore(application) {
		const familySize = application.familyMembers.count + 1;
		const familyDisabilitySum = calculateFamilyDisabilitySum(
			application.familyMembers.familyDetails,
		);
		const applicantDisability =
			application.applicantDetails.disabilityLevel;
		const disabilitySum = familyDisabilitySum + applicantDisability;
		const disabilityScore = disabilitySum / familySize;

		if (disabilitySum === 0) {
			return null;
		} else if (disabilityScore > 0.75) {
			return 0.1;
		} else if (disabilityScore > 0.25) {
			return 0.15;
		} else {
			return 0.05;
		}
	}

	jsonData.forEach((application) => {
		const result = calculateApplicantDisabilityScore(application);
		results.push(result);
	});

	return results;
}

const jsonData = [
	{
		applicantDetails: {
			personalNumber: "123456789",
			firstName: "Alice",
			lastName: "Smith",
			email: "alice.smith@example.com",
			phoneNumber: "+9876543210",
			disabilityLevel: 2,
			householdIncome: 2500,
			sizeOfOccupiedProperty: 35.0,
			address: {
				city: "New York",
				district: "Downtown",
				street: "Main Street",
				houseNumber: "123",
				flatNumber: "Apt 4B",
				zipCode: "10001",
			},
		},
		familyMembers: {
			count: 3,
			familyDetails: [
				{
					firstName: "Bob",
					lastName: "Smith",
					dateOfBirth: "05/15/1990",
					disabilityLevel: 1,
				},
				{
					firstName: "Charlie",
					lastName: "Smith",
					dateOfBirth: "03/10/2010",
				},
				{
					firstName: "Daisy",
					lastName: "Smith",
					dateOfBirth: "07/20/2015",
				},
			],
		},
		applicationType: {
			youngFamily: true,
			tenantsOfSocialHousing: false,
		},
		errors: {
			code: "200",
			message: "Application successfully submitted",
		},
	},
];
//BELOW IS FOR THE 'MIDDLE DATA' PARSING TO GET SCORE
const disabilitySums = calculateDisabilitySum(jsonData);
console.log(disabilitySums, "its here");
console.log("hello");

const testData = {
	applicantsData: [
		{
			type: "applicant",
			personalNumber: "94u0943u5",
			firstName: "John",
			lastName: "Doe",
			dateOfBirth: "01/01/2000",
			email: "john.doe@example.com",
			phoneNumber: "+1234567890",
			disabilityLevel: 1,
		},
		{
			type: "member",
			firstName: "Default Name",
			lastName: "Default Last Name",
			dateOfBirth: "01/01/2000",
			disabilityLevel: 3,
		},
		{
			type: "member",
			firstName: "Default Name",
			lastName: "Default Last Name",
			dateOfBirth: "01/01/2000",
			disabilityLevel: null,
		},
	],
	applicationData: {
		id: "f6873992-22ae-4e7d-a8aa-23a37b867491",
		status: "new",
		score: 0,
		created_at: "2023-10-07T18:05:42.732Z",
		updated_at: "2023-10-07T18:05:42.732Z",
		occupied_property: true,
		useful_mq: 25.5,
	},
};

const sumOfDisabilityLevels = testData.applicantsData.reduce(
	(total, applicant) => {
		if (applicant.disabilityLevel !== null) {
			return total + applicant.disabilityLevel;
		} else {
			return total;
		}
	},
	0,
);

let disabilityScore = null;

if (sumOfDisabilityLevels === 0) {
	disabilityScore = null;
} else {
	disabilityScore = sumOfDisabilityLevels / testData.applicantsData.length;

	if (disabilityScore > 0.75) {
		disabilityScore = 0.1;
	} else if (disabilityScore > 0.25) {
		disabilityScore = 0.15;
	} else {
		disabilityScore = 0.05;
	}
}

console.log("Disability Score:", disabilityScore);

//BELOW, WE NEED TO ACCESS THE DATABASE AND DO THE SCORE KEEPING FROM THERE
