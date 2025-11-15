export async function quickSort(arr, updateBars, speed = 70) {
  return await qs(arr, 0, arr.length - 1, updateBars, speed);
}

async function qs(arr, low, high, updateBars, speed) {
  if (low < high) {
    let p = await partition(arr, low, high, updateBars, speed);
    await qs(arr, low, p - 1, updateBars, speed);
    await qs(arr, p + 1, high, updateBars, speed);
  }
  return arr;
}

async function partition(arr, low, high, updateBars, speed) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;

      updateBars([...arr]);
      await new Promise((res) => setTimeout(res, speed));
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  updateBars([...arr]);
  await new Promise((res) => setTimeout(res, speed));

  return i;
}
