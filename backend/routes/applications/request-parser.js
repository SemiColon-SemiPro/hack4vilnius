import crypto from "node:crypto";

const parseRequest = (requestObj) => {
	let applicationData = {
		id: crypto.randomUUID(),
		status: "new",
		score: 0,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
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
		},
	];

	if (requestObj.familyMembers.count > 0) {
		requestObj.familyMembers.familyDetails.forEach((member) => {
			applicantsData.push({
				type: "member",
				firstName: member.firstName,
				lastName: member.lastName,
				dateOfBirth: member.dateOfBirth,
				disabilityLevel: member.disabilityLevel
					? member.disabilityLevel
					: null,
			});
		});
	}

	return {
		applicantsData: applicantsData,
		applicationData: applicationData,
	};
};

export default parseRequest;
