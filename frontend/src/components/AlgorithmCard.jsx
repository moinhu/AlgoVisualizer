import { Link } from "react-router-dom";

export default function AlgorithmCard({ algo }) {
  return (
    <Link
      to={algo.route}
      className={`p-6 rounded-xl shadow-xl ${algo.color} hover:opacity-90 transition`}
    >
      <h2 className="text-2xl font-bold mb-2">{algo.name}</h2>
      <p className="text-sm opacity-90">{algo.description}</p>
    </Link>
  );
}
