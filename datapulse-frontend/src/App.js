import React, { useState } from "react";
import Upload from "./components/Upload";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">📊 DataPulse — Automated EDA</h1>
      <Upload setResults={setResults} />
      {results && <Summary results={results} />}
    </div>
  );
}

export default App;
