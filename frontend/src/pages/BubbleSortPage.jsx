import SortVisualizer from "../components/SortVisualizer";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function BubbleSortPage() {
  return <SortVisualizer title="Bubble Sort" algorithm={bubbleSort} />;
}
