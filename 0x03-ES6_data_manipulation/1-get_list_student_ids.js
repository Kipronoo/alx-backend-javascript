export default function getListStudentIds(students) {
  // Check if students is an array
  if (Array.isArray(students)) {
    // If students is an array, extract the ids using map()
    const ids = students.map((student) => student.id);

    return ids;
  }
  // If students is not an array, return an empty array
  return [];
}
