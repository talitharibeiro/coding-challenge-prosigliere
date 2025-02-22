
# 📚 Character Explorer

Welcome to **Character Explorer**, a React application that allows users to explore characters from the Harry Potter universe. With the ability to filter characters by their house and favorite them, the application provides a fun and interactive way to engage with the magical world!

![Character Explorer](https://your-image-link-here.png)

## 🛠️ Features

- 🎨 **Responsive UI**: Designed for both desktop and mobile users.
- 🏡 **Filter Characters by House**: Select from Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
- ⭐ **Favorite Characters**: Mark your favorite characters and keep them easily accessible.
- 🔍 **Character Details**: View detailed information for each character including name, house, actor, and more.
- 💾 **Custom Hooks**: Leverages React hooks to handle character data and logic.

## 🖥️ Tech Stack

This project is built with the following technologies:

- ⚛️ **React**: Frontend framework for building user interfaces.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for styling.
- 🌐 **React Router**: For navigation between pages.
- 🧪 **Jest** and **React Testing Library**: For unit and integration tests.

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/character-explorer.git
cd character-explorer
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the application:**

```bash
npm start
# or
yarn start
```

The app will run locally at `http://localhost:3000`.

### Running Tests

To ensure everything works perfectly, run the tests using the following command:

```bash
npm test
# or
yarn test
```

## 🧩 Project Structure

```bash
├── src
│   ├── components       # Reusable UI components
│   ├── pages            # Application pages
│   ├── hooks            # Custom hooks for state and logic
│   ├── tests            # Unit and integration tests
│   └── assets           # Images and other static assets
```

## 📁 Key Files

- **`src/pages/CharacterList.tsx`**: Renders the list of characters with a filter option.
- **`src/components/CharacterCard.tsx`**: Displays individual character details.
- **`src/hooks/useCharacterList.ts`**: Custom hook for fetching and filtering character data.
- **`src/tests`**: Contains unit tests for different components.

## 📦 API Integration

This application fetches character data from an external API. You can configure the API URL in the environment file `.env`:

```bash
REACT_APP_API_URL=https://your-api-endpoint.com
```

## 🧪 Running Tests

The project is covered with unit tests and integration tests using **Jest** and **React Testing Library**.

To run tests:

```bash
npm test
# or
yarn test
```

## 🛡️ Code Quality

This project follows best practices in terms of code quality:

- **Prettier**: For code formatting
- **ESLint**: For linting and ensuring code quality
- **Husky**: Pre-commit hooks to enforce code quality standards

To run lint checks:

```bash
npm run lint
# or
yarn lint
```

To format code:

```bash
npm run format
# or
yarn format
```

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository.
2. **Create** your feature branch: `git checkout -b feature/YourFeature`.
3. **Commit** your changes: `git commit -m 'Add YourFeature'`.
4. **Push** to the branch: `git push origin feature/YourFeature`.
5. **Open a pull request**.

## 👨‍💻 Authors

- **Your Name** - [GitHub Profile](https://github.com/your-username)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
