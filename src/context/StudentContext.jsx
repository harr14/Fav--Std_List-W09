import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students] = useState([
    { id: 1, name: 'Karthik', rollNo: '101' },
    { id: 2, name: 'Sreya', rollNo: '102' },
    { id: 3, name: 'Charlie', rollNo: '103' },
    { id: 4, name: 'Daniel', rollNo: '104' },
    { id: 5, name: 'Evan', rollNo: '105' },
  ]);

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (student) => {
    if (!favourites.some((fav) => fav.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </StudentContext.Provider>
  );
};
