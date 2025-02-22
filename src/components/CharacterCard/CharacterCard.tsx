// /src/components/CharacterCard.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Character } from "../../interfaces/Character";
import { Star } from "lucide-react";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { addFavorite } = useContext(AppContext)!;

  return (
    <div className="border rounded-2xl shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {character.name}
          </h2>
          <p className="text-sm text-gray-500">{character.house}</p>
        </div>
        <button
          onClick={() => addFavorite(character)}
          className="text-yellow-500 hover:text-yellow-600 transition-colors"
          aria-label={`Adicionar ${character.name} aos favoritos`}
        >
          <Star size={24} />
        </button>
      </div>
      <Link
        to={`/characters/${character.id}`}
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default CharacterCard;
