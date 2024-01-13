export default function updateUniqueItems(MyMap) {
  if (!(MyMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  MyMap.forEach((v, k) => {
    if (v === 1) {
      MyMap.set(k, 100);
    }
  });
}
