import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AppRoutes from "./routes";
import { AppProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
};

export default App;
