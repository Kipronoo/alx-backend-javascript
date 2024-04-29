export default function cleanSet(set, startString) {
  // Check if startString is empty
  if (startString === '') {
    return '';
  }
  // Filter set values that start with the specified string
  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  // Remove the startString from the filtered values
  const cleanedValues = filteredValues.map((value) => value.replace(startString, ''));

  // Concatenate cleaned values into a single string separated by '-'
  return cleanedValues.join('-');
}
