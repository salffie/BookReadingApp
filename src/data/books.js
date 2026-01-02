export const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    coverImg: "https://picsum.photos/200/300?random=1",
    currentPage: 23,      // 👈 Add this
    totalPages: 45,       // 👈 Add this
    rating: 4,             // 👈 Add this (out of 5)
    isCurrentlyReading: true,  // 👈 Add this
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1948,
    genre: "Dystopian Fiction",
    coverImg: "https://picsum.photos/200/300?random=2",
    currentPage: 23,
    totalPages: 45,
    rating: 5,
    isCurrentlyReading: false,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    coverImg: "https://picsum.photos/200/300?random=3",
    currentPage: 10,
    totalPages: 50,
    rating: 5,
    isCurrentlyReading: false,
  }
]
