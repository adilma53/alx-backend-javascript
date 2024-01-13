export default function getListStudentIds(arrObj) {
  if (arrObj instanceof Array) {
    return arrObj.map((obj) => obj.id);
  }
  return [];
}
