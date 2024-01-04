export default function iterateThroughObject(reportWithIterator) {
  const TheString = [];
  for (const rpt of reportWithIterator) {
    TheString.push(rpt);
  }
  return TheString.join(' | ');
}
