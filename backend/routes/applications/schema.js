import Joi from "joi";

// schema of request
const applicationsSchema = Joi.object({
	personalDetails: {
		personalNumber: Joi.string().required(),
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().email().required(),
		phoneNumber: Joi.string()
			.regex(/^[+][0-9]+$/)
			.required(),
		householdIncome: Joi.number().required(),
	},
	familyMembers: Joi.object({
		count: Joi.number().integer().required(),
		familyDetails: Joi.array()
			.required()
			.items(
				Joi.object({
					firstName: Joi.string().required(),
					middleName: Joi.string().allow(null, ""),
					lastName: Joi.string().required(),
					dateOfBirth: Joi.string().required(),
					disabilityLevel: Joi.number(),
					address: Joi.object({
						city: Joi.string().required(),
						district: Joi.string().required(),
						street: Joi.string().required(),
						houseNumber: Joi.string().required(),
						flatNumber: Joi.string(),
						zipCode: Joi.string().allow(null, ""),
					}).required(),
				}).required(),
			),
	}),
	applicationType: Joi.object({
		youngFamily: Joi.bool().required(),
		tenantsOfSocialHousing: Joi.bool().required(),
		ownedPropertyMq: Joi.number().required(),
		singleParents: Joi.bool().required(),
	}).required(),
});

export default applicationsSchema;
