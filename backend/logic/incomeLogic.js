const SELECT_SINGLE_APP_NUM_APPLICANTS = `
SELECT applications.score, applications.status, applications.id AS application_id, COUNT(*) AS count_of_applicants
FROM applicants
JOIN applications
ON applications.id = applicants.application_id
WHERE applications.id = ?
GROUP BY applications.id;
`;

export const getNumberOfApplicantsForCount = async (num) => {
	const applications = db.prepare(SELECT_SINGLE_APP_NUM_APPLICANTS).all(num);

	console.debug(
		`Applications with ${num} applicants retrieved: ${applications.length}`,
	);

	return applications;
};

// const applicationIdToSearch = "231008B1124"; //
// console.log(getNumberOfApplicantsForCount(applicationIdToSearch));
