export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((std) => std.location === city);
  }
  return [];
}
