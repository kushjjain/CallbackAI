import NewsFeed from "./Components/Pages/NewsFeed";
import Home from "./Components/Pages/Home";
import CustomerSupport from "./Components/Pages/CustomerSupport";
import { Sidebar } from "./Components/ui/Sidebar";
import { Navbar } from "./Components/ui/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./Components/Pages/Chatbot";
import Connecting from "./Components/Pages/Connecting";
import Agent from "./Components/Pages/Agent";
import Feedback from "./Components/Pages/Feedback";
import ThankYou from "./Components/Pages/Thankyou";
import LoginPage from "./Components/Pages/Loginpage";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/news-feed" element={<NewsFeed />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/support/chatbot" element={<Chatbot/>} />
            <Route path="/support/connecting" element={<Connecting />} />
            <Route path="/support/agent" element={<Agent />} />
            <Route path="/support/feedback" element={<Feedback />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
