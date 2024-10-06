import React from 'react';
import { Card } from 'react-bootstrap';

interface Quote {
  quote: string;
  author: string;
}

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  return (
    <div className="container">
      <div className="row">
        {quotes.map((quoteObj, index) => (
          <div className="col-12 mb-4" key={index}>
            <Card
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid #444',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '18px', fontStyle: 'italic' }}>
                  "{quoteObj.quote}"
                </Card.Text>
                <Card.Footer
                  style={{
                    textAlign: 'right',
                    borderTop: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  - {quoteObj.author}
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
