// /src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import { Character } from "../interfaces/Character";

interface AppContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: string) => void;
  selectedHouse: string;
  setSelectedHouse: (house: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<string>("");

  const addFavorite = (character: Character) => {
    if (!favorites.find((fav) => fav.id === character.id)) {
      setFavorites((prev) => [...prev, character]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((character) => character.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        selectedHouse,
        setSelectedHouse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
