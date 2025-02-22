// src/pages/CharacterList.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterList from "./CharacterList";
import useCharacterList from "./useCharacterList";
import "@testing-library/jest-dom/extend-expect";

// Mock dos componentes utilizados na página
jest.mock("../../components/CharacterCard/CharacterCard", () => ({
  __esModule: true,
  default: ({ character }: { character: any }) => (
    <div data-testid="character-card">{character.name}</div>
  ),
}));

jest.mock("../../components/FavoriteCard/FavoriteCard", () => ({
  __esModule: true,
  default: () => <div data-testid="favorite-card">Favorite Characters</div>,
}));

// Mock do hook useCharacterList
jest.mock("./useCharacterList");

const mockCharacters = [
  { id: 1, name: "Harry Potter", house: "Gryffindor" },
  { id: 2, name: "Hermione Granger", house: "Gryffindor" },
  { id: 3, name: "Draco Malfoy", house: "Slytherin" },
];

describe("CharacterList Page", () => {
  beforeEach(() => {
    (useCharacterList as jest.Mock).mockReturnValue({
      filteredCharacters: mockCharacters,
      selectedHouse: "",
      setSelectedHouse: jest.fn(),
    });
  });

  test("should render the title and dropdown correctly", () => {
    render(<CharacterList />);

    // Verifica se o título está presente
    expect(screen.getByText("Characters")).toBeInTheDocument();

    // Verifica se o dropdown está presente com a opção de todas as casas
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
    expect(screen.getByText("Slytherin")).toBeInTheDocument();
    expect(screen.getByText("Hufflepuff")).toBeInTheDocument();
    expect(screen.getByText("Ravenclaw")).toBeInTheDocument();
  });

  test("should render the FavoriteCard component", () => {
    render(<CharacterList />);

    // Verifica se o componente FavoriteCard está presente
    expect(screen.getByTestId("favorite-card")).toBeInTheDocument();
  });

  test("should render the character list correctly", () => {
    render(<CharacterList />);

    // Verifica se os personagens são renderizados corretamente
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Hermione Granger")).toBeInTheDocument();
    expect(screen.getByText("Draco Malfoy")).toBeInTheDocument();
  });

  test("should filter characters when selecting a house", () => {
    const setSelectedHouseMock = jest.fn();

    // Simulando o retorno do hook com a função setSelectedHouse
    (useCharacterList as jest.Mock).mockReturnValue({
      filteredCharacters: mockCharacters,
      selectedHouse: "Gryffindor",
      setSelectedHouse: setSelectedHouseMock,
    });

    render(<CharacterList />);

    // Simula a mudança no dropdown para "Gryffindor"
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Gryffindor" } });

    // Verifica se a função setSelectedHouse foi chamada corretamente
    expect(setSelectedHouseMock).toHaveBeenCalledWith("Gryffindor");
  });

  test("should show Gryffindor characters after filter", () => {
    // Simula que apenas personagens de Gryffindor estão no estado filtrado
    (useCharacterList as jest.Mock).mockReturnValue({
      filteredCharacters: mockCharacters.filter(
        (character) => character.house === "Gryffindor"
      ),
      selectedHouse: "Gryffindor",
      setSelectedHouse: jest.fn(),
    });

    render(<CharacterList />);

    // Verifica se apenas os personagens de Gryffindor estão sendo renderizados
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Hermione Granger")).toBeInTheDocument();
    expect(screen.queryByText("Draco Malfoy")).not.toBeInTheDocument(); // Draco Malfoy não deve ser exibido
  });
});
