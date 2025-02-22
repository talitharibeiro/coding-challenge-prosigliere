import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Character } from "../../interfaces/Character";

interface CharacterDetails {
  id: string | undefined;
  navigate: NavigateFunction;
  character: Character | null;
}

const useCharacterDetails = (): CharacterDetails => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://hp-api.onrender.com/api/characters`
      );
      const data: Character[] = await response.json();
      const selectedCharacter = data.find((char) => char.id === id);
      setCharacter(selectedCharacter || null);
    };
    fetchCharacter();
  }, [id]);

  return { id, navigate, character };
};

export default useCharacterDetails;
