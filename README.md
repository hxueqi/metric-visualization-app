# Metric Visualization App

This repository contains the code for a metric visualization web application, consisting of a backend and frontend.

## Backend

The backend of the application is responsible for handling data storage and processing. It is structured as follows:

- Dockerfile: Dockerfile for building the backend Docker image.
- src/:
  - config/: Contains the database configuration (db.js).
  - controllers/: Controllers for handling metrics (metricController.js).
  - models/: Models for metrics (metricModel.js).
  - routes/: Routes for the metrics API (metricRoutes.js).
  - services/: Services for handling metrics logic (metricsService.js).
  - tests/ (Optional): Directory for tests, including example test files (metricController.test.js).
- app.js: Main entry point of the backend application.
- package.json: Node.js dependencies and scripts.
- .gitignore: List of files and directories to ignore in version control.

## Frontend

The frontend of the application is responsible for the user interface and data visualization. It is structured as follows:

- public/: Public files including index.html.
- src/:
  - components/: React components including Graph.js and MetricGenerator.js.
  - assets/: Assets such as images (logo.png).
  - styles/: CSS stylesheets including App.css.
- App.js: Main React component.
- index.js: Entry point for the React application.
- .gitignore: List of files and directories to ignore in version control.
- package.json: Node.js dependencies and scripts.
- package-lock.json: Lock file for Node.js dependencies.
- README.md: Markdown file with information about the repository.

## Running the Application

To run the application, follow these steps:

### Start the backend:

1. Navigate to the backend directory.
2. Build the Docker image: `docker build -t backend .`
3. Run the Docker container: `docker run -p 3001:3001 backend`

### Start the frontend:

1. Navigate to the frontend directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

The application should now be accessible at http://localhost:3000.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Make sure to follow the code of conduct.

## License

This project is licensed under the MIT License.
