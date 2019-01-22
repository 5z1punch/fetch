export function fetchPolyfill(input, init) {
  return fetch(input,init);
}

export default  {fetchPolyfill: fetchPolyfill};
