const movies = [
  {
    title: "Arrival",
    year: 2016,
    rating: "7.9",
    genres: ["Sci-Fi", "Drama"],
    image:
      "https://m.media-amazon.com/images/I/81q31owGDsL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A linguist works with the military to communicate with visitors from another world."
  },
  {
    title: "Black Panther",
    year: 2018,
    rating: "7.3",
    genres: ["Action", "Adventure"],
    image:
      "https://m.media-amazon.com/images/I/81Jxz3ssO9L._AC_UF894,1000_QL80_.jpg",
    description:
      "T'Challa returns home to Wakanda and faces a challenge to his throne."
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: "7.8",
    genres: ["Adventure", "Comedy"],
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_SX600.jpg",
    description:
      "An exhausted laundromat owner tumbles through the multiverse to save her family."
  },
  {
    title: "Fast & Furious",
    year: 2009,
    rating: "6.5",
    genres: ["Action", "Crime"],
    searchTerms: ["fast", "furious", "fast and furious"],
    image:
      "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_.jpg",
    description:
      "Dominic Toretto and Brian O'Conner reunite to take down a dangerous drug lord."
  },
  {
    title: "Fast Five",
    year: 2011,
    rating: "7.3",
    genres: ["Action", "Crime"],
    searchTerms: ["fast", "furious", "fast and furious"],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_.jpg",
    description:
      "The crew plans a massive Rio heist while a federal agent closes in."
  },
  {
    title: "Furious 7",
    year: 2015,
    rating: "7.1",
    genres: ["Action", "Thriller"],
    searchTerms: ["fast", "furious", "fast and furious"],
    image:
      "https://m.media-amazon.com/images/M/MV5BODVkYWQwZTAtNzEwYi00NTFhLWJlMDMtMWFmNTIxMDg5MWZlXkEyXkFqcGc@._V1_.jpg",
    description:
      "The team faces Deckard Shaw after he begins hunting them one by one."
  },
  {
    title: "Get Out",
    year: 2017,
    rating: "7.8",
    genres: ["Horror", "Mystery"],
    image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
    description:
      "A weekend visit turns sinister when a man meets his girlfriend's family."
  },
  {
    title: "Inception",
    year: 2010,
    rating: "8.8",
    genres: ["Action", "Sci-Fi"],
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description:
      "A thief enters dreams to steal secrets and attempts one final impossible job."
  },
  {
    title: "Knives Out",
    year: 2019,
    rating: "7.9",
    genres: ["Comedy", "Mystery"],
    image:
      "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_.jpg",
    description:
      "A detective investigates a famous novelist's death and a family full of secrets."
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: "8.1",
    genres: ["Action", "Adventure"],
    image:
      "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A road warrior and a rebel driver flee across a wasteland in a high-speed chase."
  },
  {
    title: "Moonlight",
    year: 2016,
    rating: "7.4",
    genres: ["Drama"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_FMjpg_UX1000_.jpg",
    description:
      "A young man grows into himself across three defining chapters of his life."
  },
  {
    title: "Parasite",
    year: 2019,
    rating: "8.5",
    genres: ["Drama", "Thriller"],
    image:
      "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    description:
      "Two families become entangled in a sharp story about class and opportunity."
  }
];

const movieGrid = document.querySelector("#movieGrid");
const sortSelect = document.querySelector("#sortSelect");
const searchInput = document.querySelector("#searchInput");
const resultsLine = document.querySelector("#resultsLine");

function sortMovies(movieList, sortType) {
  return [...movieList].sort((firstMovie, secondMovie) => {
    if (sortType === "za") {
      return secondMovie.title.localeCompare(firstMovie.title);
    }

    if (sortType === "newest") {
      return secondMovie.year - firstMovie.year;
    }

    if (sortType === "oldest") {
      return firstMovie.year - secondMovie.year;
    }

    return firstMovie.title.localeCompare(secondMovie.title);
  });
  }

function filterMovies(movieList, searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return movieList.filter((movie) => !movie.hiddenUntilSearch);
  }

  return movieList.filter((movie) => {
    if (
      movie.hiddenUntilSearch &&
      !normalizedSearch.includes(movie.hiddenUntilSearch)
    ) {
      return false;
    }

    const genreText = movie.genres.join(" ").toLowerCase();
    const searchTermText = movie.searchTerms?.join(" ").toLowerCase() || "";
    return (
      movie.title.toLowerCase().includes(normalizedSearch) ||
      genreText.includes(normalizedSearch) ||
      searchTermText.includes(normalizedSearch)
    );
  });
}

function createMovieCard(movie) {
  const genreItems = movie.genres.map((genre) => `<li>${genre}</li>`).join("");

  return `
    <article class="movie-card">
      <div class="poster-wrap">
        <img src="${movie.image}" alt="${movie.title} movie poster" loading="lazy" />
      </div>
      <div class="movie-content">
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span class="rating">IMDb ${movie.rating}</span>
        </div>
        <h3>${movie.title}</h3>
        <ul class="genre-list" aria-label="${movie.title} genres">
          ${genreItems}
        </ul>
        <p class="movie-description">${movie.description}</p>
      </div>
    </article>
  `;
}
function renderMovies() {
  const filteredMovies = filterMovies(movies, searchInput.value);
  const sortedMovies = sortMovies(filteredMovies, sortSelect.value);

  resultsLine.textContent = `${sortedMovies.length} ${
    sortedMovies.length === 1 ? "movie" : "movies"
  } shown`;

  if (sortedMovies.length === 0) {
    movieGrid.innerHTML = `
      <div class="empty-state">
        <h3>No movies found</h3>
        <p>Try a different title or genre search.</p>
      </div>
    `;
    return;
  }

  movieGrid.innerHTML = sortedMovies.map(createMovieCard).join("");
}

sortSelect.addEventListener("change", renderMovies);
searchInput.addEventListener("input", renderMovies);

renderMovies();