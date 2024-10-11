export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map over filtered students and update their grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find the grade for the current student from newGrades array
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // If grade exists, assign it to the student, otherwise set grade to 'N/A'
    const grade = gradeObj ? gradeObj.grade : 'N/A';

    // Return updated student object
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  });

  return updatedStudents;
}
