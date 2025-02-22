// src/components/CharacterDetails.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterDetails from "./CharacterDetails";
import useCharacterDetails from "./useCharacterDetails";
import "@testing-library/jest-dom/extend-expect";

// Mocking the hook useCharacterDetails
jest.mock("./useCharacterDetails");

const mockNavigate = jest.fn();

const mockCharacter = {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
  actor: "Daniel Radcliffe",
  alternate_names: ["The Boy Who Lived"],
  dateOfBirth: "31-07-1980",
  species: "Human",
  ancestry: "Half-blood",
  eyeColour: "Green",
  hairColour: "Black",
  wand: {
    wood: "Holly",
    core: "Phoenix Feather",
    length: 11,
  },
  patronus: "Stag",
  image: "https://example.com/harry.jpg",
};

describe("CharacterDetails Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render 'Loading...' while the character is not loaded", () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      id: 1,
      character: null,
      navigate: mockNavigate,
    });

    render(<CharacterDetails />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("should render character details correctly when loaded", () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      id: 1,
      character: mockCharacter,
      navigate: mockNavigate,
    });

    render(<CharacterDetails />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("House: Gryffindor")).toBeInTheDocument();
    expect(screen.getByText("Actor: Daniel Radcliffe")).toBeInTheDocument();
    expect(
      screen.getByText("Alternate Names: The Boy Who Lived")
    ).toBeInTheDocument();
    expect(screen.getByText("Date of Birth: 31-07-1980")).toBeInTheDocument();
    expect(screen.getByText("Species: Human")).toBeInTheDocument();
    expect(screen.getByText("Ancestry: Half-blood")).toBeInTheDocument();
    expect(screen.getByText("Eye Colour: Green")).toBeInTheDocument();
    expect(screen.getByText("Hair Colour: Black")).toBeInTheDocument();
    expect(
      screen.getByText("Wand: Holly, Phoenix Feather, 11 inches")
    ).toBeInTheDocument();
    expect(screen.getByText("Patronus: Stag")).toBeInTheDocument();

    const image = screen.getByAltText("Harry Potter");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockCharacter.image);
  });

  test("should navigate to the previous page when the 'Go Back' button is clicked", () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      id: 1,
      character: mockCharacter,
      navigate: mockNavigate,
    });

    render(<CharacterDetails />);

    const goBackButton = screen.getByText("Go Back");
    fireEvent.click(goBackButton);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
