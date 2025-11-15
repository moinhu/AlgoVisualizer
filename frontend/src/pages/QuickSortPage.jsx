import SortVisualizer from "../components/SortVisualizer";
import { quickSort } from "../algorithms/quickSort";

export default function QuickSortPage() {
  return <SortVisualizer title="Quick Sort" algorithm={quickSort} />;
}
