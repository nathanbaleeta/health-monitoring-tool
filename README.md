## Health Monitoring Tool
A public health monitoring platform tool that collects and visualizes data related to community health.

### Pre-requisites
- React
- Docker

### Quick local setup
```
cd client
npm install && npm run dev
```

Run the development server: `npm run dev`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

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

### ENDPOINT USED
```
const COVID19_WORLDWIDE_API_ENDPOINT = "https://disease.sh/v3/covid-19/all";
```

### CI/CD Explanation
- CI/CD will be used to run automated data quality and integrity checks
- CI/CD will also validate that unit and integration tests pass for fetching, parsing data pipelines

### GIVEN MORE TIME
- Would have visualized the data which had been fetched from the API in the React UI dashboard

### SNAPSHOTS
<img width="1878" height="1007" alt="Screenshot from UI" src="https://github.com/user-attachments/assets/4be1bcc8-dad0-489c-b9e6-2aa0b2ac5b58" />

