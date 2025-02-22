import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList/CharacterList";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
    </Routes>
  );
};

export default AppRoutes;
