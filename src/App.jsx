import NewsFeed from "./Components/Pages/NewsFeed";
import Home from "./Components/Pages/Home";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import { Sidebar } from "./Components/ui/Sidebar";
import { Navbar } from "./Components/ui/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mb-14">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar className="" />
        <div className="flex-1 space-y-6 p-6 ml-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news-feed" element={<NewsFeed />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
