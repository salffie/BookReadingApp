// src/App.jsx

import { useState } from 'react';

import Header from './components/Header'; 
import BookList from './components/BookList';
import './App.css'; // We'll add styles next
import Greeting from './components/Greeting';
import { getGreeting } from './utils/helpers';
import NowReading from './components/NowReading';
import {books} from './data/books';

function App() {

 const [selectedBook, setSelectedBook] = useState(
  books.find(book => book.isCurrentlyReading)  // 👈 Change 'books' to 'book'
)

  const [isPlaying, setIsPlaying] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>{
    const searchLower = searchTerm.toLocaleLowerCase();
    return(
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower)
    );
  }); 

  // 👇 NEW: Function to handle book selection
  const handleBookSelected = (book) => {
    setSelectedBook(book);
    setIsPlaying(false); // Pause when a new book is selected
  }
 
  return (
    <div className="app">
    
      <Header 
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm} />
      
      <Greeting 
        greeting={getGreeting()} 
        subtitle="Continue your reading journey" 
      />

      <BookList books={filteredBooks} onBookSelected={handleBookSelected}  />

      <NowReading
      book={selectedBook}
      isPlaying={isPlaying}
      onPlayPause={() => setIsPlaying(!isPlaying)}
      />

    </div>
  );
}

export default App;


