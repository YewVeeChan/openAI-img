import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    });
    setResult(res.data.data[0].url)
  }

  return (
  <div className="app">
  <h3>Generate an Image using Open AI API!</h3>
  <input
  className="app-input" 
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Everything you can imagine is real"
  />
  <button
  onClick={generateImage}>
  Generate an Image
  </button>

  {result.length > 0 ? 
  <img
  className="app-img" 
  src={result} 
  alt="result" /> : <></>}

    </div>
  );
}

export default App;
