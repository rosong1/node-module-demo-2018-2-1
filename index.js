export const add = (n, sum = 0) => {
  sum += n
  if (n - 1 === 0) return sum
  return add(n - 1, sum)
}