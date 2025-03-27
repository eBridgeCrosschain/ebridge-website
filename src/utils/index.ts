export const handleError = (error: any) => {
  return error?.error || error;
};

export const handleErrorMessage = (error: any, errorText?: string) => {
  error = handleError(error);
  if (typeof error === 'string') errorText = error;
  if (typeof error?.message === 'string') errorText = error.message;
  return errorText || '';
};
