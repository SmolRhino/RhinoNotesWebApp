import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rhino Notes Web App
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

interface ApiResponse {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

async function fetchData(): Promise<ApiResponse[]> {
  try {
    const response = await fetch('https://rhinonotesapi-ejc4anghdshcghac.australiaeast-01.azurewebsites.net/weatherforecast');

    // Check if the response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response and return it
    const data: ApiResponse[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export default App;
