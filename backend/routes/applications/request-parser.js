const parseRequest = (requestObj) => {
	let applicationData = {
		id: generateId(requestObj.applicantDetails.personalNumber),
		status: "new",
		score: 0,
		occupied_property: requestObj.applicationType.tenantsOfSocialHousing,
		useful_mq: requestObj.applicantDetails.sizeOfOccupiedProperty,
	};

	let applicantsData = [
		{
			type: "applicant",
			personalNumber: requestObj.applicantDetails.personalNumber,
			firstName: requestObj.applicantDetails.firstName,
			lastName: requestObj.applicantDetails.lastName,
			dateOfBirth: requestObj.applicantDetails.dateOfBirth,
			email: requestObj.applicantDetails.email,
			phoneNumber: requestObj.applicantDetails.phoneNumber,
			disabilityLevel: requestObj.applicantDetails.disabilityLevel,
			income: requestObj.applicantDetails.householdIncome,
		},
	];

	if (requestObj.familyMembers.count > 0) {
		requestObj.familyMembers.familyDetails.forEach((member) => {
			applicantsData.push({
				type: "member",
				personalNumber: member.personalNumber,
				firstName: member.firstName,
				lastName: member.lastName,
				dateOfBirth: member.dateOfBirth,
				email: member.email ? member.email : null,
				phoneNumber: member.phoneNumber ? member.phoneNumber : null,
				disabilityLevel: member.disabilityLevel
					? member.disabilityLevel
					: null,
			});
		});
	}

	let addressData = {
		address: requestObj.applicantDetails.address,
	};

	return {
		applicantsData: applicantsData,
		applicationData: applicationData,
		addressData: addressData,
	};
};

const generateId = (personalId) => {
	const date = new Date().toISOString().split("T")[0].split("-");
	const year = date[0].split("").splice(2, 2).join("");
	const month = date[1];
	const day = date[2];
	return `${year}${month}${day}${randomLetter()}${personalId.slice(-4)}`;
};

const randomLetter = () => {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	return randomLetter;
};

export default parseRequest;
