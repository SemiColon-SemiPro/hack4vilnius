const calculateAge = (dateOfBirth) => {
	const bd = parseAgeString(dateOfBirth);
	var ageDifMs = Date.now() - new Date(bd);
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const parseAgeString = (stringAge) => {
	return stringAge.split("/").reverse().join("/");
};

export default calculateAge;
