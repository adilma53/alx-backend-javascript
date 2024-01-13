export default function hasValuesFromArray(theset, Arr) {
  return Arr.every((v) => theset.has(v));
}
