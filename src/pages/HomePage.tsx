import React, { useState } from 'react';
import BibleCategory from '../components/BibleCategory';
import VerseList from '../components/VerseList';
import versesData from '../data/bibleVerses.json';
import { Verse } from '../types';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [verses, setVerses] = useState<Verse[]>([]);

  const categories = Object.keys(versesData);

  const handleSelectCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setVerses([]);
    } else {
      setSelectedCategory(category);
      setVerses(versesData[category as keyof typeof versesData] as Verse[]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#2c003e',
        minHeight: '100vh',
        padding: '20px',
        color: '#ffffff',
      }}
    >
      <div className="container">
        <h1 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '30px' }}>
          Bible Categories
        </h1>

        <BibleCategory
          categories={categories}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />

        {selectedCategory && verses.length > 0 && (
          <>
            <h2 style={{ color: '#ffffff', textAlign: 'center', marginTop: '30px' }}>
              Bible Verses on {selectedCategory}
            </h2>
            <VerseList verses={verses} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
