import React from 'react';

interface BibleCategoryProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const BibleCategory: React.FC<BibleCategoryProps> = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="row">
      {categories.map((category) => (
        <div
          key={category}
          className="col-6 col-md-4 col-lg-2 mb-4"
        >
          <div
            className="card text-center h-100"
            onClick={() => onSelectCategory(category)} 
            style={{
              cursor: 'pointer',
              backgroundColor: selectedCategory === category ? '#000000' : '#ffffff',
              color: selectedCategory === category ? '#ffffff' : '#000000',
              border: '1px solid #ccc',
              borderRadius: '8px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5 className="card-title">{category}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BibleCategory;
