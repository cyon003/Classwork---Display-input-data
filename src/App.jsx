import { Routes, Route, Link } from "react-router-dom";
import SubmitData from "./pages/SubmitData";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<SubmitData />} />
      <Route path="/submitdata" element={<SubmitData />} />
      <Route path="*" element={<SubmitData to="/submitdata" replace />} />
  </Routes>
    // <div>
    //   <nav style={{ padding: 12 }}>
    //     <Link to="/">Submit Data</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<SubmitData />} />
    //     {/* If your teacher wants a specific path, add it too: */}
    //     <Route path="/submit-data" element={<SubmitData />} />
    //   </Routes>
    // </div>

   
  );
}
