export const weakMap = new WeakMap();

const MAX_ENDPOINT = 5;

/**
 * Increase the count for the given endpoint in the weakMap
 * and throw an error if the count exceeds the maximum limit.
 * @param {object} endpoint - The API endpoint.
 * @throws {Error} - If the count for the endpoint exceeds the maximum limit.
 */
export function queryAPI(endpoint) {
  // If the endpoint is not present in the weakMap, initialize it with a count of 0.
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint in the weakMap.
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // Check if the count for the endpoint exceeds the maximum limit.
  if (weakMap.get(endpoint) >= MAX_ENDPOINT) {
    throw Error('Endpoint load is high');
  }
}
