export async function mergeSort(arr, updateBars, speed = 70) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = await mergeSort(arr.slice(0, mid), updateBars, speed);
  const right = await mergeSort(arr.slice(mid), updateBars, speed);

  return await merge(left, right, updateBars, speed);
}

async function merge(left, right, updateBars, speed) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
    updateBars([...result, ...left.slice(i), ...right.slice(j)]);
    await new Promise((res) => setTimeout(res, speed));
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
