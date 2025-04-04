

### Backend Setup (Flask)

1. Navigate to the backend directory:
   ```sh
    cd .\flask-server\
    ```
   
3. Create a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the Flask server:
    ```sh
    flask run
    ```

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```sh
    cd .\ipl-prediction\
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the React application:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage

Once the backend and frontend servers are running, you can interact with the application via the web interface. Enter the match details to get the prediction for the IPL 2025 match winners and explore various data-driven insights.

## Data Collection

Data for this project is collected from the , an open-source dataset available on Kaggle. The data includes comprehensive information about IPL matches, teams, players, and match outcomes from 2008 to 2024.

## Model Development

The code for building, training, and evaluating the machine learning model can be found in the public notebook available  This notebook explores various aspects of IPL data analysis and winner prediction model, providing insights into team performance, player statistics, and match outcome patterns.

Feel free to explore the notebook to understand the methodologies and techniques used in developing the prediction model for IPL 2025 matches. This includes:
- Feature engineering
- Model selection
- Hyperparameter tuning
- Model evaluation

## User Interface

The `ipl-prediction` directory contains the React code for the web application. Users can input match details through the interface, view the predicted winner, and explore various analytical insights derived from the data.
