import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Favourites = () => {
  const { favourites, removeFromFavourites } = useContext(StudentContext);

  return (
    <div className="page-container">
      <h2>My Favourite Students</h2>
      {favourites.length === 0 ? (
        <p className="empty-message">No favourite students added yet.</p>
      ) : (
        <ul className="student-list">
          {favourites.map((student) => (
            <li key={student.id} className="student-card fav-card">
              <div>
                <strong>{student.name}</strong>
                <p>Roll No: {student.rollNo}</p>
              </div>
              <button onClick={() => removeFromFavourites(student.id)} className="btn-remove">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
