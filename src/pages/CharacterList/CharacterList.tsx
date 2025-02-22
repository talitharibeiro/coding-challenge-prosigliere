// /src/pages/CharacterList.tsx
import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
import useCharacterList from "./useCharacterList";

const CharacterList: React.FC = () => {
  const { filteredCharacters, selectedHouse, setSelectedHouse } =
    useCharacterList();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Characters
      </h1>

      {/* Dropdown de Seleção */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        <p className="text-lg font-medium text-gray-700">Choose a house:</p>
        <select
          className="p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          value={selectedHouse}
          onChange={(e) => setSelectedHouse(e.target.value)}
        >
          <option value="">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>

      {/* Card de Favoritos */}
      <FavoriteCard />

      {/* Grid de Personagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
