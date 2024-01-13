export default function getStudentIdsSum(stds) {
  const initval = 0;
  if (stds instanceof Array) {
    return stds.reduce((prevstd, curstd) => prevstd + curstd.id, initval);
  }
  return 0;
}
