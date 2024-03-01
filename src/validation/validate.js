import { TaskStep1Schema } from "./schema/validationSchema";

export const validateStep1 = async (data) => {
  console.log("validating data", data);
  let errors = {};
  try {
    await TaskStep1Schema.validateAsync(data);
  } catch (error) {
    // Map validation errors to field names and error messages
    error.details.forEach((detail) => {
      const fieldName = detail.context.key;
      console.log("fieldName", fieldName);
      errors[fieldName] = detail.message;
    });
  }
  console.log("returning", errors);
  return {
    isValid: Object.keys(errors).length === 0, // Check if errors object is empty
    errors,
  };
};
