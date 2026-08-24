import os
import urllib.request

MODEL_DIR = "model"
MODEL_PATH = os.path.join(MODEL_DIR, "model.pkl")

MODEL_URL = "https://github.com/snehaa-bansal/House-Price-Prediction-System/releases/download/v1.0/model.pkl"

os.makedirs(MODEL_DIR, exist_ok=True)

if not os.path.exists(MODEL_PATH):
    print("Downloading trained model...")
    urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
    print("Model downloaded successfully.")
else:
    print("Model already exists.")