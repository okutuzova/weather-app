# Exercise: Weather App Containerized

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Description
The project is a simple weather application that displays the current weather conditions in Turin, Italy. The diagram displaying the temperature change during the last 24 hours is displayed. The application is using the API from [https://open-meteo.com/en/docs/].

## Technologies Used
- HTML
- CSS
- JavaScript
- Docker
- Docker Compose


## Installation
1. Clone the repository: `git clone 'https://github.com/okutuzova/weather-app'`
2. Navigate to the project directory: `cd weather-app`
3. Run the application: `docker-compose up --build`
4. Open in browser `http://localhost:8080`

## 🧊 Docker-files
- Dockerfile — describes the build of a frontend-container on the basis of node:alpine.
- docker-compose.yml — builds the project automatically with one service.