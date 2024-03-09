import Joi from "joi";

export const TaskStep1Schema = Joi.object({
  title: Joi.string().max(70).required(),
  locationType: Joi.string().valid("in-person", "remote").required(),
  location: Joi.object().when("locationType", {
    is: "in-person",
    then: Joi.object({
      name: Joi.string().required().messages({
        "any.required": "Location name is required for in-person tasks",
        "string.empty": "Location name is required for in-person tasks",
      }),
      coordinates: Joi.array()
        .length(2) // Ensures there are exactly two elements
        .items(Joi.number()) // Ensures both elements are numbers
        .required()
        .messages({
          "array.base": "Coordinates must be specified as an array",
          "array.length": "Coordinates must contain exactly two elements",
          "array.includesRequiredKnowns":
            "Coordinates must be specified as [lng, lat]",
        }),
    })
      .required()
      .messages({
        "object.base": "Please provide location details for in-person tasks",
      }),
    otherwise: Joi.object().optional().allow(null, ""),
  }),
  dateType: Joi.string().valid("on", "before", "flexible").required(),
  date: Joi.when("dateType", {
    is: Joi.valid("on", "before"),
    then: Joi.date().required().messages({
      "any.required": "Date is required for on or before tasks",
      "date.base": "Date must be a valid date",
    }),
    otherwise: Joi.date().valid(null).optional(),
  }),
});

export const TaskStep2Schema = Joi.object({
  description: Joi.string().max(1000).optional(),
  budget: Joi.number().integer().min(100).max(99000).optional(),
  imageUrls: Joi.array().max(3).items(Joi.string()).optional(),
});

export const SetupProfileSchema = Joi.object({
  firstName: Joi.string().max(20).required(),
  lastName: Joi.string().max(20).required(),
  city: Joi.object({
      label: Joi.string().required(),
  }).required(),
  choice: Joi.string().valid("post-task", "find-task").required(),
});
