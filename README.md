## Health Monitoring Tool
A public health monitoring platform tool that collects and visualizes data related to community health.

### Pre-requisites
- React
- Docker
### ENDPOINT USED
```
const COVID19_WORLDWIDE_API_ENDPOINT = "https://disease.sh/v3/covid-19/all";
```
### Quick local setup
```
cd client
npm install && npm run dev
```

Run the development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker setup
Build and run your dockerized React app
```
docker build -t health-monitoring-tool .
```

Running the Docker container
For the development image:
```
docker run -p 3000:3000 health-monitoring-tool
```
Accessing your application
Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
