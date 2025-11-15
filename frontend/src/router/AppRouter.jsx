import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BubbleSortPage from "../pages/BubbleSortPage";
import MergeSortPage from "../pages/MergeSortPage";
import QuickSortPage from "../pages/QuickSortPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bubble-sort" element={<BubbleSortPage />} />
        <Route path="/merge-sort" element={<MergeSortPage />} />
        <Route path="/quick-sort" element={<QuickSortPage />} />
      </Routes>
    </BrowserRouter>
  );
}
