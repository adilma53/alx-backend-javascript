export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {

    if (success) {
      resolve("API response data");
    } else {
      reject(new Error("API request failed"));
    }
  });
}
