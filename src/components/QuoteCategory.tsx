import React from 'react';

interface QuoteCategoryProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const QuoteCategory: React.FC<QuoteCategoryProps> = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="quote-categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{
            backgroundColor: selectedCategory === category ? '#6a0dad' : '#ccc',
            color: '#fff',
            margin: '5px',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default QuoteCategory;
