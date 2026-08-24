# House Price Prediction System

## Overview

This project is an end-to-end machine learning application developed to predict house prices based on different property and location-related features.

The project covers the complete machine learning workflow, including data preprocessing, exploratory data analysis, feature analysis, model training, evaluation, model comparison, model saving, and integration with a Flask web application.

A Linear Regression model was initially used as a baseline. The performance was later improved using Random Forest Regression, which achieved an **R² score of approximately 0.854** on the test data.

---

## Features

- Predicts house prices based on property details
- Uses 18 property and location-related input features
- Performs exploratory data analysis and feature correlation analysis
- Compares Linear Regression and Random Forest Regression
- Uses Random Forest Regression as the final model
- Evaluates the model using MAE, RMSE, and R² Score
- Saves the trained model using Joblib
- Provides real-time predictions through a Flask web application
- Includes descriptions and examples for input fields
- Responsive and interactive frontend

---

## Dataset

The project uses the **King County House Sales Dataset**, which contains residential property sales information from King County, Washington, USA.

The dataset contains **21,613 property records** with information about house characteristics, location, construction quality, and surrounding properties.

Some of the important features include:

- Bedrooms
- Bathrooms
- Living area
- Lot area
- Number of floors
- Waterfront status
- View rating
- Property condition
- Construction grade
- Above-ground area
- Basement area
- Year built
- Year renovated
- ZIP code
- Latitude
- Longitude
- Nearby homes' living area
- Nearby homes' lot area

The target variable is:

```text
price
```

---

## Data Preprocessing

Before model training, the dataset was inspected and prepared for analysis.

The main steps included:

1. Checking the shape and structure of the dataset
2. Checking data types
3. Checking for missing values
4. Checking duplicate records
5. Removing unnecessary columns
6. Separating input features and target variable
7. Splitting the data into training and testing sets

Columns such as `id` and `date` were not used as input features for the final prediction model.

---

## Exploratory Data Analysis

Exploratory Data Analysis was performed to understand the distribution of house prices and the relationship between different property features and price.

The analysis included:

- House price distribution
- Feature distributions
- Correlation analysis
- Relationship between living area and price
- Relationship between bathrooms and price
- Identification of highly correlated features
- Analysis of high-priced properties and outliers

Some of the strongest correlations with house price were:

| Feature | Correlation with Price |
|---|---:|
| sqft_living | 0.702 |
| grade | 0.667 |
| sqft_above | 0.606 |
| sqft_living15 | 0.585 |
| bathrooms | 0.525 |

The analysis showed that living area and construction grade were among the most important features associated with house prices.

---

## Input Features

The final model uses **18 input features**:

```text
bedrooms
bathrooms
sqft_living
sqft_lot
floors
waterfront
view
condition
grade
sqft_above
sqft_basement
yr_built
yr_renovated
zipcode
lat
long
sqft_living15
sqft_lot15
```

The target variable is:

```text
price
```

---

## Train-Test Split

The dataset was divided into training and testing sets.

```text
Training samples : 17,290
Testing samples  : 4,323
```

This corresponds to an approximately **80:20 train-test split**.

---

## Model Training

Two regression approaches were evaluated during the project.

### Linear Regression

Linear Regression was used as the initial baseline model.

Performance:

```text
MAE      : 127,493
RMSE     : 212,540
R² Score : 0.701
```

The model explained approximately 70% of the variation in house prices, but the prediction errors were relatively high.

### Random Forest Regression

Random Forest Regression was then used to capture more complex and non-linear relationships between the property features and house prices.

Performance:

```text
MAE      : 72,750
RMSE     : 148,583
R² Score : 0.854
```

Random Forest provided a significant improvement over the Linear Regression baseline.

---

## Model Comparison

| Model | MAE | RMSE | R² Score |
|---|---:|---:|---:|
| Linear Regression | 127,493 | 212,540 | 0.701 |
| **Random Forest Regression** | **72,750** | **148,583** | **0.854** |

Random Forest Regression was selected as the final model because it produced lower prediction errors and a higher R² score.

---

## Final Model

The final model used in the application is:

**Random Forest Regression**

Final test performance:

```text
R² Score : 0.854
MAE      : 72,750
RMSE     : 148,583
```

The trained model was saved using Joblib and loaded by the Flask application for predictions.

---
### Model File

> **Note:** The trained Random Forest model file (`model.pkl`) is not included in this repository because its size exceeds GitHub's standard file size limit. The model can be reproduced by running the training notebook provided in the `notebooks` folder.
---

## Application Workflow

The complete prediction process is:

```text
User Enters Property Details
            |
            v
       Flask Backend
            |
            v
  Convert Inputs to Features
            |
            v
 Random Forest Regression
            |
            v
   Predicted House Price
            |
            v
 Display Result on Web Page
```

---

## Web Application

The trained machine learning model is integrated into a Flask web application called **HomeVision AI**.

The application allows users to enter property details such as:

- Number of bedrooms and bathrooms
- Living and lot area
- Number of floors
- Waterfront status
- View and condition ratings
- Construction grade
- Basement and above-ground area
- Construction and renovation year
- ZIP code
- Geographic coordinates
- Nearby property information

Descriptions, units, and example values are provided for the input fields to make the application easier to use.

After submitting the form, the application processes the entered values and displays the estimated house price.

---

## Technologies Used

### Programming Language

- Python

### Data Analysis

- Pandas
- NumPy

### Data Visualization

- Matplotlib
- Seaborn

### Machine Learning

- Scikit-learn
- Linear Regression
- Random Forest Regression

### Model Evaluation

- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)
- R² Score

### Web Development

- Flask
- HTML
- CSS
- JavaScript

### Development Tools

- Jupyter Notebook
- VS Code
- Joblib
- Git
- GitHub

---

## Project Structure

```text
House-Price-Prediction/
|
|-- data/
|   |-- kc_house_data.csv
|
|-- model/
|   |-- model.pkl
|
|-- notebooks/
|   |-- House_Price.ipynb
|
|-- static/
|   |-- script.js
|   |-- style.css
|
|-- templates/
|   |-- index.html
|
|-- utils/
|
|-- app.py
|-- requirements.txt
|-- README.md
|-- .gitignore
```

---

## Installation

Clone the repository:

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project directory:

```bash
cd House-Price-Prediction
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment on Windows:

```bash
.venv\Scripts\activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

---

## Running the Application

Start the Flask application:

```bash
python app.py
```

After the server starts, open:

```text
http://127.0.0.1:5000
```

in your browser.

---

## Example Input

A sample property can be entered as:

```text
Bedrooms                 : 3
Bathrooms                : 2.25
Living Area              : 1800 sq ft
Lot Area                 : 5000 sq ft
Floors                   : 2
Waterfront               : No
View Rating              : 0
Condition                : 3 - Average
Construction Grade       : 7
Above-Ground Area        : 1500 sq ft
Basement Area            : 300 sq ft
Year Built               : 1995
Year Renovated           : 0
ZIP Code                 : 98103
Latitude                 : 47.61
Longitude                : -122.33
Nearby Homes Living Area : 1700 sq ft
Nearby Homes Lot Area    : 5000 sq ft
```

The model uses these values to generate an estimated property price.

---

## What I Learned

Through this project, I gained practical experience with:

- Working with a real-world regression dataset
- Data cleaning and exploratory data analysis
- Understanding feature correlations
- Preparing features for machine learning
- Creating train and test datasets
- Training regression models
- Comparing Linear Regression and Random Forest
- Evaluating regression models using MAE, RMSE, and R²
- Saving and loading trained models using Joblib
- Integrating a machine learning model with Flask
- Building an interactive frontend for a machine learning application
- Using Git and GitHub for project version control

---

## Future Improvements

The project can be further improved by:

- Performing systematic hyperparameter tuning
- Using cross-validation for model selection
- Experimenting with Gradient Boosting and XGBoost
- Improving geographic feature engineering
- Adding stronger validation for unrealistic property inputs
- Adding prediction intervals to represent uncertainty
- Testing the model with newer housing market data
- Deploying and maintaining the application on a cloud platform

---

## Author

**Sneha Bansal**

B.Tech Computer Science and Engineering  
Specialization in Artificial Intelligence and Machine Learning