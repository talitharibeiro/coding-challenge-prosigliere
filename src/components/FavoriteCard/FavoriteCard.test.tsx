// src/components/FavoriteCard.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteCard from "./FavoriteCard";
import { AppContext } from "../../context/AppContext";
import "@testing-library/jest-dom";
import { Trash } from "lucide-react";

// Mocking context values
const mockFavorites = [
  {
    id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    name: "Harry Potter",
    alternate_names: [
      "The Boy Who Lived",
      "The Chosen One",
      "Undesirable No. 1",
      "Potty",
    ],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: {
      wood: "holly",
      core: "phoenix tail feather",
      length: 11,
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [],
    alive: true,
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
];

const mockRemoveFavorite = jest.fn();

const renderFavoriteCard = (favorites = mockFavorites) => {
  return render(
    <AppContext.Provider
      value={{
        favorites,
        removeFavorite: mockRemoveFavorite,
        addFavorite: jest.fn(),
        selectedHouse: "",
        setSelectedHouse: jest.fn(),
      }}
    >
      <FavoriteCard />
    </AppContext.Provider>
  );
};

describe("FavoriteCard Component", () => {
  test("deve renderizar a mensagem 'No favorite characters.' quando não há favoritos", () => {
    renderFavoriteCard([]); // Passando um array vazio de favoritos
    expect(screen.getByText("No favorite characters.")).toBeInTheDocument();
  });

  test("deve renderizar a lista de personagens favoritos quando houver favoritos", () => {
    renderFavoriteCard();
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Hermione Granger")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Remover/i })).toHaveLength(2);
  });

  test("deve chamar a função removeFavorite quando o botão de remover for clicado", () => {
    renderFavoriteCard();
    const removeButtons = screen.getAllByRole("button", { name: /Remover/i });

    // Simula o clique no primeiro botão de remover
    fireEvent.click(removeButtons[0]);

    // Verifica se a função de remover foi chamada com o ID correto
    expect(mockRemoveFavorite).toHaveBeenCalledWith(1);
  });

  test("deve renderizar o ícone de lixeira corretamente", () => {
    renderFavoriteCard();
    const trashIcons = screen.getAllByLabelText(/Remover/);
    expect(trashIcons[0]).toBeInTheDocument();
  });
});
