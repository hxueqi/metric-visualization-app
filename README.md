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
  - assets/: Assets such as images (logo.p
