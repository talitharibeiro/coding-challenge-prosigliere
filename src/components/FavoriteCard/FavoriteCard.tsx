// /src/components/FavoriteCard.tsx
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Trash } from "lucide-react";

const FavoriteCard: React.FC = () => {
  const { favorites, removeFavorite } = useContext(AppContext)!;

  return (
    <div className="border p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Favorite Characters</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite characters.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((character) => (
            <li
              key={character.id}
              className="flex justify-between items-center p-2 border-b last:border-none"
            >
              <div>
                <h4 className="text-sm font-semibold">{character.name}</h4>
                <p className="text-xs text-gray-500">{character.house}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFavorite(character.id)}
                aria-label={`Remover ${character.name} dos favoritos`}
              >
                <Trash size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteCard;
