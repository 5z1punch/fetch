export function fetchPolyfill(input, init) {
  return self.fetch(input,init);
}

fetchPolyfill.polyfill = true