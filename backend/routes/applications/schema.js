import Joi from "joi";

// schema of request
const applicationsSchema = Joi.object({
	name: Joi.string().required(),
});

export default applicationsSchema;
