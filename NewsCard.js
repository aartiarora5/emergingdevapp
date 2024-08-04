import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #e0f7fa; /* Light cyan background */
  border-radius: 15px; /* Reduced border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Reduced shadow */
  margin: 20px;
  padding: 15px; /* Reduced padding */
  width: 100%; /* Full width */
  max-width: 600px; /* Maximum width */
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: row; /* Horizontal layout */
  align-items: center;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
  }
`;

const Image = styled.img`
  width: 150px; /* Fixed width */
  height: 100px; /* Fixed height */
  object-fit: cover;
  border-radius: 10px; /* Reduced border radius */
  margin-right: 15px; /* Margin to the right */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1.2rem; /* Reduced font size */
  margin-bottom: 10px; /* Reduced margin */
  color: #00796b; /* Teal color for title */
`;

const Description = styled.p`
  font-size: 1rem; /* Reduced font size */
  color: #004d40; /* Darker teal color for description */
`;

const NewsCard = ({ article }) => {
  return (
    <Card>
      {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
      <TextContainer>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </TextContainer>
    </Card>
  );
};

export default NewsCard;
