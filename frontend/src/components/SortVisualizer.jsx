import { useState } from "react";

export default function SortVisualizer({ title, algorithm }) {
  const [array, setArray] = useState([50, 30, 70, 10, 90, 40]);
  const [sorting, setSorting] = useState(false);

  const updateBars = (newArr) => setArray([...newArr]);

  const shuffle = () => {
    let a = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(a);
  };

  const handleSort = async () => {
    setSorting(true);
    await algorithm([...array], updateBars, 70);
    setSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-8">
        {title} Visualizer
      </h1>

      <div className="flex justify-center gap-3 h-64 items-end mb-10">
        {array.map((v, i) => (
          <div
            key={i}
            style={{ height: `${v * 3}px` }}
            className="w-8 bg-cyan-500 rounded"
          />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={shuffle}
          disabled={sorting}
          className="px-4 py-2 bg-yellow-500 rounded-lg"
        >
          Shuffle
        </button>
        <button
          onClick={handleSort}
          disabled={sorting}
          className="px-4 py-2 bg-cyan-500 rounded-lg"
        >
          {sorting ? "Sorting..." : "Start"}
        </button>
      </div>
    </div>
  );
}
