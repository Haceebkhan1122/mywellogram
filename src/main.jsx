import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrimeReactProvider } from 'primereact/api';
import '../src/assets/css/global.scss';

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PrimeReactProvider>
);
