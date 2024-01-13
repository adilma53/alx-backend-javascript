export default function setFromArray(theset) {
  if (theset instanceof Array) {
    return new Set(theset);
  }
  return [];
}
