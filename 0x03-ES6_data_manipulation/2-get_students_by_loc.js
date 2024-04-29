export default function getStudentsByLocation(students, city) {
  // Filter the students array based on the specified city
  const studentsByCity = students.filter((student) => student.location === city);

  return studentsByCity;
}
