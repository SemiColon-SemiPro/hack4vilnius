import Joi from "joi";

// schema of request
const applicationsSchema = Joi.object({
	applicantDetails: {
		personalNumber: Joi.string().required(),
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().email().required(),
		dateOfBirth: Joi.string().required(),
		phoneNumber: Joi.string()
			.regex(/^[+][0-9]+$/)
			.required(),
		disabilityLevel: Joi.number().min(1).max(3),
		householdIncome: Joi.number().required(),
		sizeOfOccupiedProperty: Joi.number().required(),
		address: Joi.object({
			city: Joi.string().required(),
			district: Joi.string().required(),
			street: Joi.string().required(),
			houseNumber: Joi.string().required(),
			flatNumber: Joi.string(),
			zipCode: Joi.string().allow(null, ""),
		}).required(),
	},
	familyMembers: Joi.object({
		count: Joi.number().integer().required(),
		familyDetails: Joi.array()
			.required()
			.items(
				Joi.object({
					firstName: Joi.string().required(),
					lastName: Joi.string().required(),
					dateOfBirth: Joi.string().required(),
					disabilityLevel: Joi.number(),
				}).required(),
			),
	}),
	applicationType: Joi.object({
		youngFamily: Joi.boolean().required(),
		tenantsOfSocialHousing: Joi.bool().required(),
	}).required(),
});

export default applicationsSchema;
