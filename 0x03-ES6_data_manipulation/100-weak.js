// Define and export the WeakMap instance
export const weakMap = new WeakMap();

// Define and export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If already queried, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count exceeds 5
    if (count >= 5) {
      // If so, throw an error
      throw new Error('Endpoint load is high');
    }
  }
}
