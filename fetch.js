export function fetchPolyfill(input, init) {
  return this.fetch(input,init);
}

fetchPolyfill.polyfill = true;
exports.default = {fetchPolyfill: fetchPolyfill};
