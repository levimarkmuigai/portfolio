import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Backend } from "./pages/Backend";
import { Frontend } from "./pages/Frontend";
import { ProjectDetail } from "./pages/ProjectDetail";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-500/30">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
