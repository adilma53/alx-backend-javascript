export default function cleanSet(theSet, startString) {
  const strset = [];
  if (!theSet || !startString || !(theSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const v of theSet.values()) {
    if (typeof v === 'string' && v.startsWith(startString)) {
      const vs = v.substring(startString.length);
      if (vs && vs !== v) {
        strset.push(vs);
      }
    }
  }
  return strset.join('-');
}
