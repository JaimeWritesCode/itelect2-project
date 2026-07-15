export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;
export const validateTask = (title) => `${title} True`;
export const mergeTaskUpdate = (original, ...updates) => ({
  ...original,
  ...updates.reduce((old, curr) => ({ ...old, ...curr }), {})
});