export const truncateString = (str: string, num: number = 20): string => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
};

// export const capitalize = (str: string): string => {
//   return str
// }

export const removeDashes = (input: string): string => {
  // Split the string into words based on "-"
  const words = input.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words into a sentence
  const formattedString = capitalizedWords.join(" ");

  return formattedString;
};

export const extractErrorMessages = (error: any): string[] => {
  const messages: string[] = [];

  const traverse = (obj: any) => {
    for (const key in obj) {
      const value = obj[key];
      if (Array.isArray(value)) {
        messages.push(...value);
      } else if (typeof value === "object" && value !== null) {
        traverse(value);
      }
    }
  };

  traverse(error);

  return messages;
};

export function removeEmptyValues(obj: any) {
  const result: any = {};
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== "") {
      result[key] = obj[key];
    }
  }
  return result;
}
