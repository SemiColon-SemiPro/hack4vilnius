import { getAverageDisabilityByApplication } from "../database_handler.js";

const calculateDisabilityScore = (applicationId) => {
	const avgDisability = getAverageDisabilityByApplication(applicationId).score;
	let disabilityScore = 0;

	if (avgDisability > 2) {
		disabilityScore = 0.15;
	} else if (avgDisability > 1) {
		disabilityScore = 0.1;
	} else if (avgDisability > 0) {
		disabilityScore = 0.05;
	} else {
		disabilityScore = 0.0;
	}

	return disabilityScore;
}

export default calculateDisabilityScore;