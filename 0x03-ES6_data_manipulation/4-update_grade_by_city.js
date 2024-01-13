function clean(grades, std) {
  const defgrade = { grade: 'N/A' };
  return grades.filter((grade) => grade.studentId === std.id)
    .pop() || defgrade;
}

export default function updateStudentGradeByCity(stds, city, newGrades) {
  if (stds instanceof Array) {
    return stds
      .filter((std) => std.location === city)
      .map((std) => ({
        id: std.id,
        firstName: std.firstName,
        location: std.location,
        grade: (clean(newGrades, std)).grade,
      }));
  }
  return [];
}
