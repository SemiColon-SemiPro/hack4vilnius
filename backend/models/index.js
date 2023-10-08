import { addDisabilityScore } from "./database_handler.js";
import calculateDisabilityScore from "./disability/index.js";

const calculateScore = (applicationId) => {
	const score = calculateDisabilityScore(applicationId);
	console.info(`INFO >> Score calculated ${score}`);
	addDisabilityScore(score, applicationId);
};

export default calculateScore;
