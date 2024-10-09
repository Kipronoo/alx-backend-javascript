export default function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist within the set
  return arr.every((value) => set.has(value));
}
