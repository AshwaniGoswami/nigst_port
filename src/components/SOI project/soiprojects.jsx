import { useState } from 'react';

function SimpleSlider() {

const cards = [
  { 
    id: 1, 
    title: 'Card 1', 
    image: 'https://via.placeholder.com/150', 
    description: 'Description for Card 1' 
  },
  { 
    id: 2, 
    title: 'Card 2', 
    image: 'https://via.placeholder.com/150', 
    description: 'Description for Card 2' 
  },
  { 
    id: 3, 
    title: 'Card 3', 
    image: 'https://via.placeholder.com/150', 
    description: 'Description for Card 3' 
  },
  { 
    id: 4, 
    title: 'Card 4', 
    image: 'https://via.placeholder.com/150', 
    description: 'Description for Card 4' 
  },
  { 
    id: 5, 
    title: 'Card 5', 
    image: 'https://via.placeholder.com/150', 
    description: 'Description for Card 5' 
  },
];

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard(currentCard === cards.length - 1 ? 0 : currentCard + 1);
  };

  const prevCard = () => {
    setCurrentCard(currentCard === 0 ? cards.length - 1 : currentCard - 1);
  };

  const displayedCards = [
    cards[currentCard],
    cards[(currentCard + 1) % cards.length],
    cards[(currentCard + 2) % cards.length],
    cards[(currentCard + 3) % cards.length],
  ];

  return (
    <div>
      {displayedCards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
        </div>
      ))}
      <button onClick={prevCard}>Previous</button>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};
}
export default SimpleSlider;