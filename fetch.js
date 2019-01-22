export function fetchPolyfill(input, init) {
  return this.fetch(input,init);
}

fetchPolyfill.polyfill = true;
var default = {fetchPolyfill: fetchPolyfill};
