import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Snowfall from 'react-snowfall';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Snowfall
      color="white" 
      snowflakeCount={100} 
      speed={[1, 3]} 
    />
    <App />
  </StrictMode>,
);
