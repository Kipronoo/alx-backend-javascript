export default function cleanSet(set, startString) {
  // Check if any of the conditions for returning empty string are met
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || startString === '' || set.size === 0) {
    return '';
  }

  // Filter set values that start with the specified string
  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  // Check if filtered values array is empty
  if (filteredValues.length === 0) {
    return '';
  }

  // Remove the startString from the filtered values
  const cleanedValues = filteredValues.map((value) => value.replace(startString, ''));

  // Concatenate cleaned values into a single string separated by '-'
  return cleanedValues.join('-');
}
