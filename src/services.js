export function fetchWithTimeout(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay));
}
