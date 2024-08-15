# W.A.L.L.Y
Warehouse Analytics and Logistics Learning for Yield
The application, made for the walmart sparkathon is a full-stack web application designed for managing and generating reports, with integrated AI services for forecasting, promotions, and warehouse optimization. It consists of three main parts:

Backend: Node.js and Express-based REST API server

Frontend: React-based client-side application

AI Service: Flask-based service for AI model training and predictions.

# Backend Working

<img width="704" alt="Screenshot 2024-08-05 at 7 03 08 PM" src="https://github.com/user-attachments/assets/d8e8b9b2-2503-4002-b700-8cf7f22a0153">

1.Initialization:
server.js initializes the server and connects to the MongoDB database using Mongoose.
app.js sets up the Express application and middleware (like body-parser for JSON parsing).

2.Controllers:
reportController.js: Handles CRUD operations for reports.
userController.js: Manages user-related operations such as registration and profile management.
authController.js: Manages authentication processes like login and token verification.

3.Routes:
Define endpoints for the application.
reportRoutes.js, userRoutes.js, authRoutes.js link HTTP requests to controller actions.

4.Services:
Business logic and interaction with models.
aiService.js: Manages communication with the AI service.
reportService.js, userService.js, authService.js: Handle operations related to reports, users, and authentication respectively.

5.Models:
Define MongoDB schemas and data structures.
Report.js, User.js, Auth.js represent the data models for reports, users, and authentication tokens.

6.Utilities:
Helper functions and middleware.
auth.js: Contains functions for token verification and authentication.

7.Configuration:
database.js: Contains database connection logic.
auth.js: Contains authentication configuration and secrets.

# AI Service Working

<img width="694" alt="Screenshot 2024-08-05 at 7 13 23 PM" src="https://github.com/user-attachments/assets/493e2577-2f78-41f8-b693-04be15fa42fb">

1.Initialization:
app.py sets up a Flask server to handle requests for AI predictions and training.

2.Models:
forecast.py, promotions.py, warehouse.py: Contain model definitions and prediction functions using facebook prohet, random forest classifiers, time series analysis
train.py: Contains training routines for the AI models.
predict.py: Contains prediction routines using the trained models.

3.Endpoints:
Flask routes defined in app.py handle incoming requests for training and prediction.
Requests from the backend for AI services are routed here.


# Frontend Working

<img width="416" alt="Screenshot 2024-08-05 at 7 03 17 PM" src="https://github.com/user-attachments/assets/69cb6219-20df-46fd-9c1a-c84e320b62cd">

1.Initialization:
index.js is the entry point that initializes the React application.
App.js contains the main application layout and routes.

2.Components:
Reusable UI components such as Dashboard.js, Report.js, and Navbar.js.
Handle rendering and user interactions.

2.Pages:
Specific pages like HomePage.js, LoginPage.js, RegisterPage.js, DashboardPage.js, and ReportPage.js.
Combine components to form complete views for different parts of the application.

3.Services:
apiService.js: Handles HTTP requests to the backend.
authService.js: Manages authentication-related operations such as login and token storage.

4.Testing:
Test files for different components and pages to ensure functionality.
Dashboard.test.js, Report.test.js, HomePage.test.js, LoginPage.test.js, RegisterPage.test.js.

