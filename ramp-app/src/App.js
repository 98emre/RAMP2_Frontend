import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/HomePage/Home";
import Checklist from "./components/Pages/Checklist/Checklist";
import Result from "./components/Pages/Results/Result";
import ActionModel from "./components/Pages/ActionModel/ActionModel";
import ActionPlan from "./components/Pages/ActionPlan/ActionPlan";
import ActionsSuggestions from "./components/Pages/ActionsSuggestions/ActionsSuggestions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checklist" element={<Checklist />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Actionmodel" element={<ActionModel />} />
          <Route path="/Actionssuggestions" element={<ActionsSuggestions />} />
          <Route path="/Actionplan" element={<ActionPlan />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
