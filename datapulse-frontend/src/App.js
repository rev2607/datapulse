import React, { useState } from "react";
import Upload from "./components/Upload";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResults = (data) => {
    setResults(data);
    setError(null);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
    if (isLoading) {
      setError(null);
    }
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setResults(null);
  };

  return (
    <div className="app-container">
      {/* Responsive Header */}
      <header className="app-header">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="header-content">
            <h1 className="app-title">📊 DataPulse</h1>
            <p className="app-subtitle">AI-Powered Data Health Analysis & Insights</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Upload Section */}
        <section className="upload-section hover-lift">
          <h2 className="upload-title">Upload Your Data</h2>
          <p className="upload-description">
            Get instant insights into your data quality, detect outliers, and monitor data drift with our advanced ML algorithms.
          </p>
          
          <Upload 
            setResults={handleResults}
            setLoading={handleLoading}
            setError={handleError}
          />
        </section>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Analyzing your data with AI...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h3 className="error-title">Upload Error</h3>
            <p className="error-message">{error}</p>
          </div>
        )}

        {/* Results Section */}
        {results && (
          <section className="results-section fade-in">
            <Summary results={results} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
