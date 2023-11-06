// FlagComponent.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypewriterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TypewriterListItem = styled.li`
  display: inline;
`;

const FlagComponent = ({ flag }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  
  useEffect(() => {
    const timeoutIds = [];
    let delay = 0;

    flag.split('').forEach((char, index) => {
      delay += 500;
      const id = setTimeout(() => {
        setDisplayedText((prevState) => prevState + char);
      }, delay);
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
   }, []);
  
  

  return (
    <TypewriterList>
      {displayedText.split('').map((char, index) => (
        <TypewriterListItem key={index}>
          {char}
        </TypewriterListItem>
      ))}
    </TypewriterList>
  );
};

export default FlagComponent;