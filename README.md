# PokeAPI Image Fetcher

A lightweight JavaScript web app that fetches and displays Pokémon images by name using the public [PokeAPI](https://pokeapi.co/).

## Features

- Search Pokémon by name
- Fetch data from a real public REST API
- Display Pokémon sprite image instantly
- Built with plain HTML, CSS-ready structure, and vanilla JavaScript
- Beginner-friendly async/await implementation

## Tech Stack

- HTML5
- JavaScript (ES6+)
- Fetch API
- PokeAPI

## Project Structure

```text
.
├── index.html      # App UI markup
├── script.js       # API fetch logic and DOM updates
└── README.md       # Project documentation
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pokeapi-image-fetcher.git
cd pokeapi-image-fetcher
```

### 2. Run locally

Open `index.html` directly in your browser.

Or use a local server (recommended):

```bash
# VS Code Live Server extension
# or Python
python -m http.server 5500
```

Then open:

- `http://localhost:5500`

## Usage

1. Enter a Pokémon name in the input field (for example: `pikachu`, `charmander`, `bulbasaur`).
2. Click **Get Image**.
3. The app fetches Pokémon data and displays the sprite image.

## API Reference

- Endpoint used: `https://pokeapi.co/api/v2/pokemon/{pokemonName}`
- Official docs: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

## Error Handling

The app validates fetch responses and logs errors to the browser console if:

- The Pokémon name is invalid
- The API request fails
- Network issues occur

## Improvement Ideas

- Add user-facing error messages in the UI
- Add loading state while fetching data
- Add Enter key support for search
- Display more Pokémon stats (type, height, weight, abilities)
- Improve styling and responsiveness with CSS

## Contributing

Contributions are welcome.

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is open-source and available under the MIT License.

## Author

**Ahmed Raza**
