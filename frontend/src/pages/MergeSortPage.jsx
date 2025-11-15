import SortVisualizer from "../components/SortVisualizer";
import { mergeSort } from "../algorithms/mergeSort";

export default function MergeSortPage() {
  return <SortVisualizer title="Merge Sort" algorithm={mergeSort} />;
}
