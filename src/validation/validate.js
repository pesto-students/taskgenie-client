import { TaskStep1Schema, SetupProfileSchema } from "./schema/validationSchema";

export const validateStep1 = async (data) => {
  let errors = {};
  try {
    await TaskStep1Schema.validateAsync(data);
  } catch (error) {
    // Map validation errors to field names and error messages
    error.details.forEach((detail) => {
      const fieldName = detail.context.key;
      errors[fieldName] = detail.message;
    });
  }
  return {
    isValid: Object.keys(errors).length === 0, // Check if errors object is empty
    errors,
  };
};

export const validateSetupProfile = async (data) => {
    let errors = {};
    try{
        await SetupProfileSchema.validateAsync(data);
    } catch (error) {
        error.details.forEach((detail) => {
            const fieldName = detail.context.key;
            errors[fieldName] = detail.message;
        });
    }
    return {
        isValid: Object.keys(errors.length) === 0,
        errors,
    };
};
