import React, { useState, useEffect } from 'react';
import FlagCaptured from '../components/FlagCaptured'

const secretLink = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/666c79'

const HomePage = () => {
  const [flag, setFlag] = useState('');
  const [loading, setLoading] = useState(true);
  
 useEffect(() => {
    // Your logic to load the flag
    // For example, using a fetch request
    fetch(secretLink)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => {
        setFlag(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Thank you for the opportunity!!</h1>
      {
        loading ? <div>loading...</div> : <FlagCaptured flag={flag} />
      }
    </div>
  );
};

export default HomePage;




