import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import AddAgents from "./pages/AddAgents";
import AddCampaign from "./components/AddCampaign";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/addagent" element={<AddAgents />} />
            <Route path="/addCampaign" element={<AddCampaign />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
