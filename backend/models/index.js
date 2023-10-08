import { addScore } from "./database_handler.js";
import calculateDisabilityScore from "./disability/index.js";
import calculateElderlyScore from "./elderly/index.js";

const calculateScore = (applicationId) => {
	let score = 0.0;

	const disabilityScore = calculateDisabilityScore(applicationId);
	console.info(`INFO >> Disability score calculated ${disabilityScore}`);
	const elderlyScore = calculateElderlyScore(applicationId);
	console.info(`INFO >> Elderly score calculated ${elderlyScore}`);

	score = disabilityScore + elderlyScore;
	console.info(`INFO >> Score calculated ${score}`);

	addScore(score, applicationId);
};

export default calculateScore;
