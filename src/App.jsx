import { Routes, Route, Link } from "react-router-dom";
import SubmitData from "./pages/SubmitData";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12 }}>
        <Link to="/">Submit Data</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SubmitData />} />
        {/* If your teacher wants a specific path, add it too: */}
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </div>
  );
}
