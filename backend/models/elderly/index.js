import { getAgeOfBirthsByApplication } from "../database_handler.js";
import calculateAge from "./utils.js";

const calculateElderlyScore = (applicationId) => {
	const dateOfBirths = getAgeOfBirthsByApplication(applicationId);
	let countOfElderly = 0;
	let elderlyScore = 0;

	dateOfBirths.forEach((date) => {
		if (calculateAge(date.date_of_birth) >= 65) {
			countOfElderly++;
		}
	});

	if (countOfElderly > 3) {
		elderlyScore = 0.1;
	} else if (countOfElderly >= 2) {
		elderlyScore = 0.066;
	} else if (countOfElderly >= 1) {
		elderlyScore = 0.033;
	} else {
		elderlyScore = 0.0;
	}

	return elderlyScore;
};

export default calculateElderlyScore;
