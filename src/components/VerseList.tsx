import React from 'react';
import { Verse } from '../types';

interface VerseListProps {
  verses: Verse[];
}

const VerseList: React.FC<VerseListProps> = ({ verses }) => {
  return (
    <div className="my-4">
      <div className="row">
        {verses.map((verse, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{verse.reference} - {verse.version}</h5>
                <p className="card-text">{verse.verse}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerseList;
