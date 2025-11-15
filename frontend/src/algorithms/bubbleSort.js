export async function bubbleSort(arr, updateBars, speed = 80) {
  const a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        updateBars([...a]);

        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  }

  return a;
}
