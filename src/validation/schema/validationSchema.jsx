import Joi from "joi";

export const TaskStep1Schema = Joi.object({
  title: Joi.string().max(70).required(),
  locationType: Joi.string().valid("in-person", "remote").required(),
  location: Joi.object().when("locationType", {
    is: "in-person",
    then: Joi.object({
      label: Joi.string().required().messages({
        "any.required": "Location label is required for in-person tasks",
        "string.empty": "Location label is required for in-person tasks",
      }),
      lat: Joi.number().required().messages({
        "any.required": "Latitude is required for in-person tasks",
        "number.base": "Latitude must be a number",
      }),
      lng: Joi.number().required().messages({
        "any.required": "Longitude is required for in-person tasks",
        "number.base": "Longitude must be a number",
      }),
      placeId: Joi.string().required().messages({
        "any.required": "Place ID is required for in-person tasks",
        "string.empty": "Place ID is required for in-person tasks",
      }),
    })
      .required()
      .messages({ "object.base": "Please select where task is located" }),
    otherwise: Joi.object().optional().allow(null, ""),
  }),
  dateType: Joi.string().valid("on", "before", "flexible").required(),
  date: Joi.date().when("dateType", {
    is: Joi.string().valid("on", "before"),
    then: Joi.date().required().messages({
      "any.required": "Date is required for on or before tasks",
      "date.base": "Date must be a valid date",
    }),
    otherwise: Joi.date().allow(null).optional(),
  }),
});
