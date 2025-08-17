import React from "react";
import Plot from "react-plotly.js";

function Summary({ results }) {
  const getHealthScoreDescription = (score) => {
    if (score >= 80) return 'Excellent data quality!';
    if (score >= 60) return 'Good data quality with some issues.';
    return 'Data quality needs attention.';
  };

  return (
    <div className="summary-container">
      {/* Results Header */}
      <h2 className="results-title">📊 Analysis Results</h2>

      {/* Health Score */}
      <div className="health-score-container">
        <div className="health-score-label">Data Health Score</div>
        <div className="health-score-value">{results.health_score}%</div>
        <div className="health-score-description">
          {getHealthScoreDescription(results.health_score)}
        </div>
      </div>

      {/* Data Overview Grid */}
      <div className="data-grid">
        {/* Schema Card */}
        <div className="data-card hover-lift">
          <div className="card-header">
            <span className="card-icon">🏗️</span>
            <h3 className="card-title">Data Schema</h3>
          </div>
          <div className="card-content">
            <p>Your dataset contains <strong>{Object.keys(results.schema).length}</strong> columns with various data types.</p>
            <div className="json-display">
              {JSON.stringify(results.schema, null, 2)}
            </div>
          </div>
        </div>

        {/* Missing Values Card */}
        <div className="data-card hover-lift">
          <div className="card-header">
            <span className="card-icon">🔍</span>
            <h3 className="card-title">Missing Values</h3>
          </div>
          <div className="card-content">
            <p>Analysis of missing data across all columns.</p>
            <div className="json-display">
              {JSON.stringify(results.missing, null, 2)}
            </div>
          </div>
        </div>

        {/* Outliers IQR Card */}
        <div className="data-card hover-lift">
          <div className="card-header">
            <span className="card-icon">📈</span>
            <h3 className="card-title">Outliers (IQR Method)</h3>
          </div>
          <div className="card-content">
            <p>Statistical outlier detection using Interquartile Range method.</p>
            <div className="json-display">
              {JSON.stringify(results.outliers_iqr, null, 2)}
            </div>
          </div>
        </div>

        {/* Outliers ML Card */}
        <div className="data-card hover-lift">
          <div className="card-header">
            <span className="card-icon">🤖</span>
            <h3 className="card-title">Outliers (ML Method)</h3>
          </div>
          <div className="card-content">
            <p>Machine learning outlier detection using Isolation Forest.</p>
            <div className="json-display">
              {JSON.stringify(results.outliers_iforest, null, 2)}
            </div>
          </div>
        </div>
      </div>

      {/* Drift Analysis */}
      {results.drift && (
        <div className="data-card hover-lift" style={{ marginBottom: '2rem' }}>
          <div className="card-header">
            <span className="card-icon">🔄</span>
            <h3 className="card-title">Data Drift Analysis</h3>
          </div>
          <div className="card-content">
            <p>Population Stability Index (PSI) analysis comparing current vs. previous dataset.</p>
            <div className="json-display">
              {JSON.stringify(results.drift, null, 2)}
            </div>
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e8eaed' }}>
              <p><strong>💡 PSI Interpretation:</strong></p>
              <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                <li><strong>PSI &lt; 0.1:</strong> No significant drift</li>
                <li><strong>PSI 0.1 - 0.2:</strong> Moderate drift</li>
                <li><strong>PSI &gt; 0.2:</strong> Significant drift detected</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Charts Section */}
      {results.missing && (
        <div className="charts-section">
          <div className="chart-container hover-lift">
            <h3 className="chart-title">Missing Values Visualization</h3>
            <Plot
              data={[
                {
                  type: "bar",
                  x: Object.keys(results.missing),
                  y: Object.values(results.missing),
                  marker: {
                    color: Object.values(results.missing).map(val => 
                      val === 0 ? '#10b981' : val < 5 ? '#f59e0b' : '#ef4444'
                    ),
                    line: {
                      color: '#374151',
                      width: 1
                    }
                  },
                  text: Object.values(results.missing).map(val => val.toString()),
                  textposition: 'auto',
                  textfont: {
                    color: '#374151',
                    size: 12
                  }
                }
              ]}
              layout={{
                title: {
                  text: "Missing Values per Column",
                  font: { size: 18, color: '#1a1a1a' }
                },
                xaxis: {
                  title: "Columns",
                  titlefont: { size: 14, color: '#64748b' },
                  tickfont: { size: 12, color: '#64748b' }
                },
                yaxis: {
                  title: "Missing Count",
                  titlefont: { size: 14, color: '#64748b' },
                  tickfont: { size: 12, color: '#64748b' }
                },
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                margin: { t: 60, b: 60, l: 60, r: 40 },
                showlegend: false,
                height: 400
              }}
              config={{
                displayModeBar: true,
                displaylogo: false,
                modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
              }}
            />
          </div>
        </div>
      )}

      {/* Summary Statistics */}
      {results.summary && (
        <div className="data-card hover-lift">
          <div className="card-header">
            <span className="card-icon">📋</span>
            <h3 className="card-title">Statistical Summary</h3>
          </div>
          <div className="card-content">
            <p>Comprehensive statistical analysis of your numerical data.</p>
            <div className="json-display">
              {JSON.stringify(results.summary, null, 2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Summary;
