import React, { useState } from 'react';
import QuoteList from '../components/QuoteList';
import quotesData from '../data/quotes.json';
import { Quote } from '../types';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const categories = Object.keys(quotesData);

  const handleSelectCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setQuotes([]);
    } else {
      setSelectedCategory(category);
      setQuotes(quotesData[category as keyof typeof quotesData] as Quote[]);
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
          Motivational Quote Categories
        </h1>

        <div className="row justify-content-center">
          {categories.map((category) => (
            <div
              key={category}
              className="col-lg-4 col-md-6 col-12 mb-4"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <button
                onClick={() => handleSelectCategory(category)}
                style={{
                  width: '100%',
                  padding: '20px',
                  fontSize: '18px',
                  backgroundColor: selectedCategory === category ? '#6a0dad' : '#8a2be2',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        {selectedCategory && quotes.length > 0 && (
          <>
            <h2 style={{ color: '#ffffff', textAlign: 'center', marginTop: '30px' }}>
              Motivational Quotes on {selectedCategory}
            </h2>
            <QuoteList quotes={quotes} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
