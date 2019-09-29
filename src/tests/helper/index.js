export const maxNumber = arr => {
  if (arr.length > 0) {
    return arr.reduce((acc, num) => (num > acc ? num : acc));
  }
  return 0;
};
