import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import { AppContext } from "../../context/AppContext";
import { TextEncoder, TextDecoder } from "util";

const mockCharacter = {
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
};

// Mock do contexto
const mockContext = {
  favorites: [],
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
  selectedHouse: "",
  setSelectedHouse: jest.fn(),
  isFavorite: jest.fn().mockReturnValue(false),
};

describe("CharacterCard", () => {
  it("should correctly render the character's name and house", () => {
    render(
      <AppContext.Provider value={mockContext}>
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      </AppContext.Provider>
    );

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
  });

  it("should add to favorites when star button is clicked", () => {
    render(
      <AppContext.Provider value={mockContext}>
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      </AppContext.Provider>
    );

    const starButton = screen.getByRole("button", {
      name: `Adicionar Harry Potter aos favoritos`,
    });

    fireEvent.click(starButton);

    expect(mockContext.addFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  it("should show link to view character details", () => {
    render(
      <AppContext.Provider value={mockContext}>
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      </AppContext.Provider>
    );

    const detailsLink = screen.getByText(/Ver Detalhes/i);
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink.getAttribute("href")).toBe("/characters/1");
  });
});
