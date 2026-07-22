export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;
export const validateTask = ({ title, dueDate } = {}) => Boolean(title && dueDate);export const mergeTaskUpdate = (original, ...updates) => ({
  ...original,
  ...updates.reduce((old, curr) => ({ ...old, ...curr }), {})
});

