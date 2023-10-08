const parseResponse = (responseData) => {
	let applicationData = {
		id: responseData[1].id,
		status: responseData[1].status,
		score: responseData[1].score,
		occupiedProperty: responseData[1].occupied_property,
		usefulMq: responseData[1].useful_mq,
		householdIncome: responseData[1].income,
		createdAt: responseData[1].created_at,
		householdAddress: {
			city: responseData[1].city,
			district: responseData[1].district,
			street: responseData[1].street,
			houseNumber: responseData[1].house_number,
			flatNumber: responseData[1].flat_number,
			zipCode: responseData[1].zip_code,
		},
	};

	let applicantsData = [];
	responseData.forEach((applicant) => {
		applicantsData.push({
			personalNumber: applicant.personal_number,
			firstName: applicant.first_name,
			lastName: applicant.last_name,
			dateOfBirth: applicant.date_of_birth,
			disabilityLevel: applicant.disability_level,
			email: applicant.email,
			phoneNumber: applicant.phone_number,
			applicantType: applicant.applicant_type,
		});
	});

	return {
		applicationData: applicationData,
		applicantsData: applicantsData,
	};
};

export default parseResponse;
