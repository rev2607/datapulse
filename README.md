# 🚀 DataPulse
> AI-Powered Data Health Analysis & Insights Platform - Get instant insights into your data quality, detect outliers, and monitor data drift with advanced ML algorithms.

![Tech Stack](https://img.shields.io/badge/Tech-Python|FastAPI|React|Docker-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

## 📌 Overview
**DataPulse** is a comprehensive data health analysis platform that combines the power of FastAPI backend with a modern React frontend to provide instant data quality insights. It's designed for data scientists, analysts, and engineers who need to quickly assess data health, detect anomalies, and monitor data drift in their datasets.

**Why it's useful:**
- **Instant Data Health Assessment**: Upload any CSV file and get comprehensive analysis in seconds
- **ML-Powered Outlier Detection**: Uses Isolation Forest and IQR methods for robust anomaly detection
- **Data Drift Monitoring**: Tracks changes between datasets using Population Stability Index (PSI)
- **Professional Dashboard**: Beautiful, responsive UI with interactive visualizations

**Who it's for:**
- Data Scientists and Analysts
- Data Engineers and DevOps teams
- Business Intelligence professionals
- Anyone working with CSV data who needs quality insights

## ✨ Features
- ✅ **Automated EDA Reports** - Comprehensive statistical summaries and schema inference
- ✅ **Data Health Checks** - Missing value analysis and overall health scoring
- ✅ **Interactive Dashboard** - Modern React UI with Material-UI components
- ✅ **ML Outlier Detection** - Isolation Forest and IQR-based anomaly detection
- ✅ **Data Drift Monitoring** - PSI-based drift detection between datasets
- ✅ **Real-time Analysis** - FastAPI backend for instant results
- ✅ **Docker Support** - Easy deployment and containerization
- ✅ **CORS Enabled** - Seamless frontend-backend integration

## 🖼️ Demo
![DataPulse Dashboard](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=DataPulse+Dashboard)
*Upload your CSV files and get instant AI-powered insights into data quality, outliers, and drift patterns.*

## ⚙️ Tech Stack
- **Languages**: Python 3.8+, JavaScript (ES6+)
- **Backend**: FastAPI, Uvicorn, Pandas, NumPy, Scikit-learn, SciPy
- **Frontend**: React 19, Material-UI, Plotly.js, Axios
- **Tools**: Docker, Docker Compose, Git
- **Development**: pytest, black, isort, flake8, mypy

## 🚀 Getting Started

### ✅ Installation

#### Option 1: Docker (Recommended)
```bash
# Clone the repository
git clone <repository-url>
cd data_health

# Start both backend and frontend
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
```

#### Option 2: Local Development
```bash
# Backend Setup
cd datapulse-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend Setup (in new terminal)
cd datapulse-frontend
npm install
npm start
```

## 📂 Project Structure
```
data_health/
├── datapulse-backend/          # FastAPI backend service
│   ├── app/
│   │   ├── main.py            # FastAPI application entry point
│   │   ├── schemas.py         # Pydantic models
│   │   └── utils.py           # Data analysis utilities
│   ├── tests/                 # Unit tests
│   ├── requirements.txt       # Python dependencies
│   ├── Dockerfile            # Backend container config
│   └── README.md             # Backend documentation
├── datapulse-frontend/        # React frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Upload.js      # File upload component
│   │   │   └── Summary.js     # Results display component
│   │   ├── App.js            # Main application component
│   │   └── index.js          # Application entry point
│   ├── package.json          # Node.js dependencies
│   ├── Dockerfile            # Frontend container config
│   └── README.md             # Frontend documentation
├── docker-compose.yml         # Multi-container orchestration
└── README.md                 # This file
```

## 📈 Output & Features

### Data Health Analysis
- **Schema Inference**: Automatic data type detection
- **Statistical Summary**: Comprehensive descriptive statistics
- **Missing Value Analysis**: Detailed null value reporting
- **Health Score**: Overall data quality percentage

### Advanced Analytics
- **Outlier Detection**: 
  - IQR method for statistical outliers
  - Isolation Forest for ML-based anomaly detection
- **Data Drift Monitoring**: Population Stability Index (PSI) calculations
- **Interactive Visualizations**: Plotly.js powered charts and graphs

### API Endpoints
- **GET** `/` - Health check endpoint
- **POST** `/upload` - CSV file upload and analysis

## 🛠️ Use Cases

### Data Quality Assessment
- **Pre-processing Validation**: Check data quality before ML model training
- **ETL Pipeline Monitoring**: Validate data integrity in data pipelines
- **Compliance Reporting**: Generate data quality reports for regulatory requirements

### Anomaly Detection
- **Fraud Detection**: Identify unusual patterns in financial data
- **Quality Control**: Detect defective products in manufacturing data
- **System Monitoring**: Find anomalies in log data or metrics

### Data Drift Analysis
- **Model Performance**: Monitor when data distributions change
- **Business Intelligence**: Track changes in customer behavior data
- **A/B Testing**: Compare data distributions between test groups

## 🚀 Deployment

### Production Deployment
```bash
# Build production images
docker-compose -f docker-compose.yml build

# Deploy with environment variables
docker-compose -f docker-compose.yml up -d
```

### Environment Configuration
- Backend port: 8000
- Frontend port: 3000
- CORS enabled for localhost:3000
- File upload size limits configurable

## 🧪 Testing

### Backend Tests
```bash
cd datapulse-backend
pytest tests/
```

### Frontend Tests
```bash
cd datapulse-frontend
npm test
```

## 📚 API Documentation

Once the backend is running, visit:
- **Interactive API Docs**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Author

**Revanth Guthula**
- 📧 Email: [revanth2607@gmail.com](mailto:revanth2607@gmail.com)
- 🔗 LinkedIn: [rev2607](https://linkedin.com/in/rev2607)
- 🌐 Portfolio: [www.revanth.cloud](https://www.revanth.cloud)

---

<div align="center">
  <p>Made with ❤️ for the data community</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
