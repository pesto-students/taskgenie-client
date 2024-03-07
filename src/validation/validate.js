export const validateTask = async (schema, data) => {
  let errors = {};
  try {
    await schema.validateAsync(data);
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
