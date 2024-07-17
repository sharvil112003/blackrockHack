import React, { useState } from 'react';
import { HfInference } from "@huggingface/inference";

const inference = new HfInference("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"); // Replace with your actual API key

const ApiCaller = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = async (data) => {
    try {
      setLoading(true);
      setError(null);
      setResponse('');

      const stream = inference.chatCompletionStream({
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [{ role: "user", content: data }],
        max_tokens: 500,
      });

      let result = '';
      for await (const chunk of stream) {
        result += chunk.choices[0]?.delta?.content || '';
      }
      setResponse(result);
    } catch (err) {
      console.error('Fetch error:', err); // Detailed error logging
      setError(`Failed to fetch data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    query(input);
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default ApiCaller;
