from fastapi import FastAPI, UploadFile, File
import pandas as pd
from app.utils import analyze_csv

app = FastAPI()
last_df = None   # cache last upload

@app.get("/")
def health():
    return {"status": "ok"}

@app.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    global last_df
    df = pd.read_csv(file.file)
    results = analyze_csv(df, last_df)
    last_df = df   # update cache
    return results
