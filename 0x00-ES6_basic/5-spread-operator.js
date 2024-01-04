export default function concatArrays(array1, array2, string) {
  const wholeArray = [...array1, ...array2, ...string];
  return wholeArray;
}
