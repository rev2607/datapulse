import React from "react";
import Plot from "react-plotly.js";

function Summary({ results }) {
  return (
    <div className="summary-container">
      <h2 className="summary-title">📑 Report</h2>
      
      <p className="health-score"><b>Health Score:</b> {results.health_score}%</p>

      <h3 className="section-title">Missing Values</h3>
      <pre className="json-display">{JSON.stringify(results.missing, null, 2)}</pre>

      <h3 className="section-title">Outliers (IQR)</h3>
      <pre className="json-display">{JSON.stringify(results.outliers_iqr, null, 2)}</pre>

      <h3 className="section-title">Outliers (IsolationForest)</h3>
      <pre className="json-display">{JSON.stringify(results.outliers_iforest, null, 2)}</pre>

      {results.drift && (
        <>
          <h3 className="section-title">Drift (PSI)</h3>
          <pre className="json-display">{JSON.stringify(results.drift, null, 2)}</pre>
        </>
      )}

      {/* Example plot for correlations later */}
      {results.summary && (
        <Plot
          data={[
            {
              type: "bar",
              x: Object.keys(results.missing),
              y: Object.values(results.missing),
            },
          ]}
          layout={{ title: "Missing Values per Column" }}
        />
      )}
    </div>
  );
}

export default Summary;
