import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import Favourites from './pages/Favourites';

function App() {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
