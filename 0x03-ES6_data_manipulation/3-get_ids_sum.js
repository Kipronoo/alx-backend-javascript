export default function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of all student ids
  const sumStudentIds = students.reduce((accummulator, student) => accummulator + student.id, 0);
  return sumStudentIds;
}
