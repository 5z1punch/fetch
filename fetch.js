export function fetchPolyfill(input, init) {
  return self.fetch(input,init);
}

export default  {fetchPolyfill: fetchPolyfill};
