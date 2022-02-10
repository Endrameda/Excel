export const capitalize = (string: string): string => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return '';
};
