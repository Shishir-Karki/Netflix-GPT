import React, { useState } from 'react';
import { TextServiceClient } from '@google/generative-ai';
import { GEMINIAI_KEY } from './constants';

// Set your API key
const API_KEY = GEMINIAI_KEY; // Replace with your actual API key
const client = new TextServiceClient({ apiKey: API_KEY });

const MovieRecommendation = () => {
  const [prompt, setPrompt] = useState('');
  const [recommendations, setRecommendations] = useState('');

  // Fetch movie suggestions based on user prompt
  const fetchRecommendations = async () => {
    try {
      const response = await client.generateText({
        prompt: {
          text: prompt, // User input like "a happy movie"
        },
      });
      const aiResponse = response.candidates[0].output;
      setRecommendations(aiResponse); // Display the AI's suggestions
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="movie-recommendation">
      <h2>Movie Recommendation</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type a prompt, e.g., 'a happy movie'"
      />
      <button onClick={fetchRecommendations}>Get Recommendations</button>
      {recommendations && (
        <div className="recommendation-output">
          <h3>Suggestions:</h3>
          <p>{recommendations}</p>
        </div>
      )}
    </div>
  );
};

export default MovieRecommendation;
