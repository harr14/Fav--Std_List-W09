import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students, favourites, addToFavourites } = useContext(StudentContext);

  return (
    <div className="page-container">
      <h2>All Students</h2>
      <ul className="student-list">
        {students.map((student) => {
          const isFavourite = favourites.some((fav) => fav.id === student.id);
          return (
            <li key={student.id} className="student-card">
              <div>
                <strong>{student.name}</strong>
                <p>Roll No: {student.rollNo}</p>
              </div>
              <button
                onClick={() => addToFavourites(student)}
                disabled={isFavourite}
                className={isFavourite ? 'btn-disabled' : 'btn-add'}
              >
                {isFavourite ? 'Added' : 'Add to Favourite'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
