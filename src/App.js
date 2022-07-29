import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Tickets from "./components/Tickets";
import Progress from "./components/Progress";
import Contact from "./components/Contact";
import Machine from "./components/Machine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="progress" element={<Progress />} />
          <Route path="machine" element={<Machine />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
