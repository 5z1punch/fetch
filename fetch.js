export function fetchPolyfill(input, init) {
  return this.fetch(input,init);
}

fetchPolyfill.polyfill = true;
export default = {"fetchPolyfill": fetchPolyfill};
