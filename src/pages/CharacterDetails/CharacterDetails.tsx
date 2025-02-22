import React from "react";
import useCharacterDetails from "./useCharacterDetails";

const CharacterDetails: React.FC = () => {
  const { id, character, navigate } = useCharacterDetails();

  if (!character) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center p-8 gap-8">
      {/* Botão de voltar */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        Go Back
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-2xl shadow-lg w-80 h-auto"
        />
        <div className="flex flex-col text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {character.name}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>House:</strong> {character.house}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Actor:</strong> {character.actor}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Alternate Names:</strong>{" "}
            {character.alternate_names.join(", ")}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Date of Birth:</strong> {character.dateOfBirth}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Species:</strong> {character.species}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Ancestry:</strong> {character.ancestry}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Eye Colour:</strong> {character.eyeColour}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Hair Colour:</strong> {character.hairColour}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Wand:</strong> {character.wand.wood}, {character.wand.core},{" "}
            {character.wand.length} inches
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Patronus:</strong> {character.patronus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
