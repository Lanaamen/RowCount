export function increment(count) {
  return count + 1;
}
 
export function decrement(count) {
  if (count <= 0) return 0;
  return count - 1;
}
 
export function reset() {
  return 0;
}