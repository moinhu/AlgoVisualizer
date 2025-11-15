import AlgorithmCard from "../components/AlgorithmCard";

export default function Dashboard() {
  const algorithms = [
    {
      name: "Bubble Sort",
      description: "Visualize simple comparison-based sorting",
      route: "/bubble-sort",
      color: "bg-cyan-600",
    },
    {
      name: "Merge Sort",
      description: "Efficient divide-and-conquer sorting",
      route: "/merge-sort",
      color: "bg-green-600",
    },
    {
      name: "Quick Sort",
      description: "Fast pivot-based recursive sorting",
      route: "/quick-sort",
      color: "bg-purple-600",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        AlgoVisualizer Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {algorithms.map((algo) => (
          <AlgorithmCard key={algo.name} algo={algo} />
        ))}
      </div>
    </div>
  );
}
