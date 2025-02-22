import { useState, useEffect } from "react";
import { Character } from "../../interfaces/Character";

interface UseCharacterList {
  filteredCharacters: Character[];
  selectedHouse: string;
  setSelectedHouse: React.Dispatch<React.SetStateAction<string>>;
}

const useCharacterList = (): UseCharacterList => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedHouse, setSelectedHouse] = useState("");

  const filteredCharacters = selectedHouse
    ? characters.filter((char) => char.house === selectedHouse)
    : characters;

  useEffect(() => {
    // Simula a chamada para obter os personagens
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const data = await response.json();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return {
    filteredCharacters,
    selectedHouse,
    setSelectedHouse,
  };
};

export default useCharacterList;
